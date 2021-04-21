// pages/domain/domain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    showmodal360:false,
    showmodalsougo:false,
    showmodalbaidu:false,
    showmodal:false,
    showModal: false,
    num:1,
    searchresult_baidu:[],
    searchresult_360:[],
    searchresult_sougo:[],
    i_domain:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  domain:function(res){
    this.setData({
      i_domain: res.detail.value , //赋值给i_value,使用的使用直接去i_value即可
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

  radioChange(e){
    if (e.detail.value==0) {
      this.setData({
        num:0
      })
    }
    else if(e.detail.value==1){
      this.setData({
        num:1,
        current:0
      })
    }
    else if(e.detail.value==2){
      this.setData({
        num:2,
        current:1
      })
    }
    else if(e.detail.value==3){
      this.setData({
        num:3,
        current:2
      })
    }
    else{
      this.setData({
        num:3
      })
    }
  },

  test:function(){
    if (this.data.num==0) {
      wx.request({
        url: 'http://api.tianapi.com/txapi/sopages/index',
        method:"GET",
        data:{
          key:"7c8ff4921166a6b56804bbe1dcf2a7f4",
          domain:this.data.i_domain
        },
        success:function(res){
          if (res.data.newslist[0].count=="") {
            self.setData({
              showModal:true,
              showmodal360:false,
              showmodalsougo:false,
              showmodalbaidu:false
            })
            return false
          }
            self.setData({
              searchresult_360:res.data.newslist,
              showmodal360:true
            })
          }
      })
      wx.request({
        url: 'http://api.tianapi.com/txapi/sogoupages/index',
        method:"GET",
        data:{
          key:"7c8ff4921166a6b56804bbe1dcf2a7f4",
          domain:this.data.i_domain
        },
        success:function(res){
          if (res.data.newslist[0].count=="") {
            self.setData({
              showModal:true,
              showmodal360:false,
              showmodalsougo:false,
              showmodalbaidu:false
            })
            return false
          }
            self.setData({
              searchresult_sougo:res.data.newslist,
              showmodalsougo:true
            })}
      })
      wx.request({
        url: 'http://api.tianapi.com/txapi/baidupages/index',
        method:"GET",
        data:{
          key:"7c8ff4921166a6b56804bbe1dcf2a7f4",
          domain:this.data.i_domain
        },
        success:function(res){
          if (res.data.newslist[0].count=="") {
            self.setData({
              showModal:true,
              showmodal360:false,
              showmodalsougo:false,
              showmodalbaidu:false
            })
            return false
          }
            self.setData({
              searchresult_baidu:res.data.newslist,
              showmodalbaidu:true
            })}
      })
    }
    if (this.data.num==1) {
      wx.request({
        url: 'http://api.tianapi.com/txapi/sopages/index',
        method:"GET",
        data:{
          key:"7c8ff4921166a6b56804bbe1dcf2a7f4",
          domain:this.data.i_domain
        },
        success:function(res){
          if (res.data.newslist[0].count=="") {
            self.setData({
              showModal:true,
              showmodal360:false,
              showmodalsougo:false
            })
            return false
          }
            self.setData({
              searchresult_360:res.data.newslist,
              showmodal360:true,
              showmodalsougo:false
            })}
      })
    }
    if (this.data.num==2) {
      wx.request({
        url: 'http://api.tianapi.com/txapi/sogoupages/index',
        method:"GET",
        data:{
          key:"7c8ff4921166a6b56804bbe1dcf2a7f4",
          domain:this.data.i_domain
        },
        success:function(res){
          if (res.data.newslist[0].count=="") {
            self.setData({
              showModal:true,
              showmodal360:false,
              showmodalsougo:false
            })
            return false
          }
            self.setData({
              searchresult_sougo:res.data.newslist,
              showmodalsougo:true,
              showmodal360:false
            })}
      })
    }
    if (this.data.num==3) {
      wx.request({
        url: 'http://api.tianapi.com/txapi/baidupages/index',
        method:"GET",
        data:{
          key:"7c8ff4921166a6b56804bbe1dcf2a7f4",
          domain:this.data.i_domain
        },
        success:function(res){
          if (res.data.newslist[0].count=="") {
            self.setData({
              showModal:true,
              showmodal360:false,
              showmodalsougo:false,
              showmodalbaidu:false
            })
            return false
          }
            self.setData({
              searchresult_baidu:res.data.newslist,
              showmodal360:false,
              showmodalsougo:false,
              showmodalbaidu:true
            })}
      })
    }
  },
  submit: function() {
    this.setData({
    showModal: true
    })
   },
   
   preventTouchMove: function() {
   
   },
   
   
   go: function() { 
    this.setData({
    showModal: false,
    showmodal:false,
    showmodal360:false,
    showmodalsougo:false,
    showmodalbaidu:false
    })
    this.onLoad
   }
})