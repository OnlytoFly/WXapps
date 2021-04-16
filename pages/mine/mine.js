
import {request} from "../../request/index.js"
import {postrequest} from "../../request/index.js"
import {regeneratorRuntime} from "../../lib/runtime/runtime"
// pages/mine/mine.js

Page({
   /* 页面的初始数据
   */
  data: {
    userinfo:{}
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
})