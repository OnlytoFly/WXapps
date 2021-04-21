// pages/api4/api4b.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dreamCode:'',
    dreamResult:[],
    dates:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    //查看传递数据 是否成功
    console.log(options);
    //更新此页面的data数据
    that.setData({
    dates:options.dates

    })
    //console.log(this.data.dreamResult)
     wx.request({
        url: 'http://api.tianapi.com/txapi/lishi/index', 
        method:'GET',
        data:{
          key:'e14365791172cb3feac0c7ec2b4ed403',
          date:that.data.dates
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            dreamCode:res.data.code,
            dreamResult:res.data.newslist
          })
         
        },
        fail: function (err) {
          console.log(err)
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
  test:function(){
    
    wx.redirectTo({
      url: '/pages/app4/app4',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})