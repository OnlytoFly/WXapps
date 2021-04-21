// pages/api3/api3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['男', '女'],
    index: 0,//默认显示位置
    height: '',
    weight: '',
/*     dreamCode:'',
    dreamResult:[] */
  },
  valueInputFirst:function(e){
    this.setData({
      height:e.detail.value
    }),
    console.log(this.data.height)
  },
  valueInputSecond:function(e){
    this.setData({
      weight:e.detail.value
    }),
    console.log(this.data.weight)
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //普通选择器2：
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      objectIndex: e.detail.value
    })
  },
  test:function(){
    var that=this;
   /*  wx.request({
      url: 'http://api.tianapi.com/txapi/bmi/index', 
      method:'GET',
      data:{
        key:'e14365791172cb3feac0c7ec2b4ed403',
        height:this.data.height,
        weight:this.data.weight,
        sex:this.data.index,
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
  */
    wx.navigateTo({
      url: '/pages/app3/api3b?index='+that.data.index+'&height='+that.data.height+'&weight='+that.data.weight,
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    self=this;
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