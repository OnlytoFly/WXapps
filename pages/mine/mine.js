
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

    //拿到微信登录相关数据，为后面用户授权登录做准备
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

    //每次显示该页面，初始化数据，并尝试拿到可能已经从home页面拿到的用户数据
    this.setData({
      appsList:wx.getStorageSync('appsList'),
      isMoveout:false,
      changeFavorite:{},
    })
    //console.log(this.data.favoriteList);

  },
  onHide: function () {
    wx.setStorageSync('appsList', this.data.appsList)

  },
  //授权登录后进行登录，与后台交互，拿到openid和其他信息
  async getuserinfoAndsignup(){
    //把相关数据拿给服务器后台进行解密
    const res1=await request({url:"wxuserinfo/id",data:this.loginParams});
    wx.setStorageSync('userInfo', res1.data.userInfo)
    const userinfo=wx.getStorageSync('userInfo');
    this.setData({
      userinfo:userinfo
    })
    this.WXuser.wxuserid=this.data.userinfo.openId;
    //拿到信息以后去后台数据库进行注册/登录
    const res2=await postrequest({url:"wxuser/opt",data:this.WXuser,method:"POST"});
    await wx.showToast({
      title:res2.data.message,
      icon:'success',
      duration:2000
    })
    //如果登陆成功向服务器请求用户收藏列表
    if(this.islogin()){
      const res3=await request({url:"wxuserfavorite/opt/"+wx.getStorageSync('userInfo').openId});
      for(var i=0;this.data.appsList[i];i++){
        var temp = 'appsList[' + i +'].islove';
        this.setData({
          [temp]:res3.data.dataZone.WXuserFavorite[i],
  
        })
      }
      wx.setStorageSync('appsList', this.data.appsList);
      //console.log(this.data.favoriteList);
      //console.log(this.QueryParams);
      return true;
    }
    else{
      return false;
    } 

  }, 
  //判断登录状态
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
      desc: '展示用户信息', 
      // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.loginParams.encryptedData=res.encryptedData;
        this.loginParams.iv=res.iv;
        //console.log(this.loginParams);
        this.getuserinfoAndsignup();
      }
    })
  },
  //长摁应用开启删除模式的模式转换
  changeMode(){
    this.setData({
      isMoveout:!this.data.isMoveout,
    })
  },
  //跟home页面下基本大同小异，不再赘述
  async disloveit(e){

    if(this.islogin()){
      var num=e.currentTarget.dataset.appname;
      var temp = 'appsList[' + num +'].islove'
      this.setData({
        [temp]:!this.data.appsList[num].islove,
      })
      temp = 'changeFavorite';
      this.setData({
        [temp+'.uid']:wx.getStorageSync('userInfo').openId,
      })
      temp += '.app';
      for(var i=1;this.data.appsList[i-1]!=null;i++){
        this.setData({
          [temp+i]:this.data.appsList[i-1].islove,
        })
      }
      const res=await request({url:"wxuserfavorite/change",data:this.data.changeFavorite});

      temp = 'appsList['+num+'].favoritenum'
      //console.log(temp);
      //console.log(this.data);
      if(this.data.appsList[num].islove){
        this.setData({
          [temp]:this.data.appsList[num].favoritenum+1
        })
      }
      else{
        this.setData({
          [temp]:this.data.appsList[num].favoritenum-1
        })
      }
    }
    else{
      return false;
    }
  },
  navigateToApps(e){
    var num=e.currentTarget.dataset.appnum+1;
    wx.navigateTo({
      url: '../app'+num+'/app'+num,
    })
  }
})