// pages/api1/api1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dreamCode:'',
    dreamResult:[],
    diary:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      self=this
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

  },
  test:function(){
    wx.request({
      url: 'http://api.tianapi.com/txapi/tiangou/index', 
      method:'GET',
      data:{
        key:'e14365791172cb3feac0c7ec2b4ed403',
      },
      success: function (res) {
        console.log(res.data)
        self.setData({
          dreamCode:res.data.code,
          dreamResult:res.data.newslist
        })
       
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }
})
