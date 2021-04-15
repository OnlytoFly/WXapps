import {request} from "../../request/index.js"
import {regeneratorRuntime} from "../../lib/runtime/runtime"
// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:[]

  },
  loginParams:{
    encryptedData:"",
    iv:"",
    code:""
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
  async getAppsList(){
    const res=await request({url:"wxuserinfo/id",data:this.loginParams});
    this.setData({
      test:res
    })
    //console.log(this.data.code);
    console.log(res);
    
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.loginParams.encryptedData=res.encryptedData;
        this.loginParams.iv=res.iv;
        console.log(this.loginParams);
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})