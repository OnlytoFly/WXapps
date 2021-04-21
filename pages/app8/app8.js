// pages/poem/poem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poemResult:[],
    poemCode:'',  
    aurthorResult:"",
    titleResult:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    self = this
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

  inputChange_author:function(e){
    this.setData({
      aurthorResult:e.detail.value
    }),
    console.log(this.data.aurthorResult)
  },

  inputChange_title:function(e){
    this.setData({
      titleResult:e.detail.value
    }),
    console.log(this.data.titleResult)
  },

  showDialogBtn_poem:function(){
    wx.request({
      url: 'http://api.tianapi.com/txapi/poetries/index',
      method:'GET',
      data:{
        key:'de654987fe3a7b4460118b2fdbd184fa',
        num : 2,
        page : 1,
         word :this.data.titleResult
        /* author:"韩愈" */
        /* rand : 2 */
      },
      success: function(res){
        console.log(res.data)
           self.setData({
            poemCode: res.data.code,
            poemResult:res.data.newslist
        })
      }
    })
    this.setData({
      showModal:true
     })
  },
  hidepopup: function () {
    this.setData({
      showModal: false
    });
  }
})