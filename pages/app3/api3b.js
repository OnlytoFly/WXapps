// pages/api3/api3b.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:'',
    height: '',
    weight: '',
    dreamCode:'',
    dreamResult:[],
    showModal:false,
    showmodal:false,
  },

  onLoad: function (options) {//上一个页面传递过来的数据都会在options里
    var that =this;
    console.log(options);
    //更新此页面的data数据
    that.setData({
    index:options.index,
    height:options.height,
    weight:options.weight,
    })
    if (that.data.height>0) { }
    else{
      that.setData({
        showModal:true,
        showmodal:false
      })
      return
    }
    if (that.data.weight>0) { }
    else{
      that.setData({
        showModal:true,
        showmodal:false
      })
      return
    }
    //查看传递数据 是否成功
    
    //console.log(this.data.dreamResult)
     wx.request({
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
          if(res.data.code=200){
            that.setData({
              dreamCode:res.data.code,
              dreamResult:res.data.newslist,
              showmodal:true
            })
          }
         
          if(res.data.code!=200){
            that.setData({
              showModal:true
            })
            return false
          }
        },
        
        fail: function (err) {
          console.log(err)
        }
      })
  },
  submit: function() {
    this.setData({
    showModal: true
    })
   }, 
   go: function() { 
    this.setData({
    showModal: false,
    showmodal:false
    })
    wx.navigateTo({
      url: '/pages/app3/app3',
    })
   },

  /**
   * 生命周期函数--监听页面加载
   */
/*   onLoad: function (options) {
    var that = this;
 
     
  }, */

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