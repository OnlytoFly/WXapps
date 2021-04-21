// pages/cangtou/cangtou.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     i_word:"",
     i_len:0,
     i_pat:1,
     i_type:1,
     showModal:false,
     showmodal:false,
     szb_code:"",
     szbresult:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
word:function(res){
  this.setData({
    i_word: res.detail.value , //赋值给i_value,使用的使用直接去i_value即可
  })
},

  onLoad: function (options) {
    self=this
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
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

  radioChange_len(e){
    if (e.detail.value==1) {
      this.setData({
        i_len:1
      })
    }
    else{
      this.setData({
        i_len:0
      })
    }
  },

  radioChange_pat(e){
    if(e.detail.value==2){
      this.setData({
        i_pat:2
      })
    }
    else if(e.detail.value==3){
      this.setData({
        i_pat:3
      })
    }
    else if(e.detail.value==1){
      this.setData({
        i_pat:1
      })
    }
  },

  radioChange_type(e){
    if (e.detail.value==2) {
      this.setData({
        i_type:2
      })
    }
    else if(e.detail.value==3){
      this.setData({
        i_type:3
      })
    }
    else if(e.detail.value==4){
      this.setData({
        i_type:4
      })
    }
    else if(e.detail.value==5){
      this.setData({
        i_type:5
      })
    }
    else if(e.detail.value==1){
      this.setData({
        i_type:1
      })
    }
    console.log(this.data.i_type)
  },

  getapi:function(){
    wx.request({
      url: 'http://api.tianapi.com/txapi/cangtoushi/index',
      method:"GET",
      data:{
        key:"7c8ff4921166a6b56804bbe1dcf2a7f4",
        word:this.data.i_word,
        len:this.data.i_len,
        pat:this.data.i_pat,
        type:this.data.i_type
      },
      success:function(res){
        console.log(res.data)
          self.setData({
            szb_code:res.data.code,
            szbresult:res.data.newslist,
            showmodal:true
          })
          if(res.data.code!=200){
            self.setData({
              showModal:true
            })
            return false
          }
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
    this.onLoad
   }
})