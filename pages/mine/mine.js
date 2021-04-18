
import {request} from "../../request/index.js"
import {postrequest} from "../../request/index.js"
import {regeneratorRuntime} from "../../lib/runtime/runtime"
// pages/mine/mine.js

Page({
   /* 页面的初始数据
   */
  data: {
    appsList:[],
    userinfo:{},
    favoriteList:[],
    isMoveout:"",
    changeFavorite:{},
  },
  loginParams: {
    encryptedData:"",
    iv:"",
    code:""
  },
  WXuser: {
    wxuserid:"12345",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var thisblock=this;

    wx.login({
      success: function (res) {
        thisblock.loginParams.code=res.code;
      }
     })
     this.setData({
      isMoveout:false,
    })
  },
  onShow: function () {

    this.setData({
      favoriteList:wx.getStorageSync('favoriteList'),
      appsList:wx.getStorageSync('appsList'),
      isMoveout:false,
      changeFavorite:{},
    })
    //console.log(this.data.favoriteList);

  },
  onHide: function () {
    wx.setStorageSync('favoriteList', this.data.favoriteList)

  },
  async getuserinfoAndsignup(){
    const res1=await request({url:"wxuserinfo/id",data:this.loginParams});
    wx.setStorageSync('userInfo', res1.data.userInfo)
    const userinfo=wx.getStorageSync('userInfo');
    this.setData({
      userinfo:userinfo
    })
    this.WXuser.wxuserid=this.data.userinfo.openId;
    const res2=await postrequest({url:"wxuser/opt",data:this.WXuser,method:"POST"});
    await wx.showToast({
      title:res2.data.message,
      icon:'success',
      duration:2000
    })
    if(this.islogin()){
      const res3=await request({url:"wxuserfavorite/opt/"+wx.getStorageSync('userInfo').openId});
      this.setData({
        favoriteList:res3.data.dataZone.WXuserFavorite,

      })
      wx.setStorageSync('favoriteList', this.data.favoriteList);
      //console.log(this.data.favoriteList);
      //console.log(this.QueryParams);
      return true;
    }
    else{
      return false;
    } 

  }, 
  islogin(){

    if(wx.getStorageSync('userInfo')){
      return true;
    }
    else{
      return false;
    }

  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.loginParams.encryptedData=res.encryptedData;
        this.loginParams.iv=res.iv;
        //console.log(this.loginParams);
        this.getuserinfoAndsignup();
      }
    })
  },
  changeMode(){
    this.setData({
      isMoveout:!this.data.isMoveout,
    })
  },
  doNothing(){

  },
  async disloveit(e){

    if(this.islogin()){
      var num=e.currentTarget.dataset.appname;
      var temp = 'favoriteList[' + num +']'
      this.setData({
        [temp]:!this.data.favoriteList[num],
      })
      temp = 'changeFavorite';
      this.setData({
        [temp+'.uid']:wx.getStorageSync('userInfo').openId,
      })
      temp += '.app';
      for(var i=1;this.data.favoriteList[i-1]!=null;i++){
        this.setData({
          [temp+i]:this.data.favoriteList[i-1],
        })
      }
      const res=await request({url:"wxuserfavorite/change",data:this.data.changeFavorite});
      
    }
    else{
      return false;
    }

  },
})