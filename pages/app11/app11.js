// pages/quiz/quiz.js
var num=0;
 function changenum(){
   num++
 }
 function returnnum(){
   return num
 }
var score=0;
var score_history=0;
var num_right=0;
function changescore(){
  score=score+10;
  num_right++
}
function returnscore(){
  return score
}
function returnnum_right(){
  return num_right
}
function reset(){
  score=0;
  num=0;
  num_right=0
}
function returnhistoey(){
return score_history
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    decideresult:[],
    showmodal_tip:true,
    myanswer:1,
    showmodal_end:false,
    showmodal_start:true,
    showmodal_continue:false,
    showmodal_next:false,
    showmodal_analyse:false,
    showmodal_decide:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    self=this
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  //radio单选组件函数，绑定事件为change
  radioChange(e){
    if (e.detail.value==1) {
      this.setData({
        myanswer:1
      })
    }
    else{
      this.setData({
        myanswer:0
      })
    }
  },
  method:{
    refresh() {
      this.onLoad
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
  
  //开始按钮及下一题按钮绑定函数
  test:function(){
    changenum()
    this.setData({
      num:returnnum()
    })
    //请求api
    wx.request({
      url: 'http://api.tianapi.com/txapi/decide/index',
      method:"GET",
      data:{
        key:"7c8ff4921166a6b56804bbe1dcf2a7f4",
      },
      success:function(res){
          self.setData({
            decideresult:res.data.newslist,
            showmodal_tip:false,
            showmodal_title:true,
            showmodal_end:true,
            showmodal_start:false,
            showmodal_continue:true,
            showmodal_analyse:false,
            showmodal_next:false,
            showmodal_decide:true
          })}
    })
  },

  //继续按钮绑定函数
  continue:function(){
    this.setData({
      showmodal_next:true,
      showmodal_analyse:true,
      showmodal_continue:false
    })
    if (this.data.myanswer==this.data.decideresult[0].answer) {
      changescore()
    }
  },

  //结束按钮绑定函数
  endquiz:function(){
    if(returnscore()>score_history){
      score_history=score
    }
    this.setData({
      score_history:returnhistoey(),
      score:returnscore(),
      num_right:returnnum_right(),
      showmodal_tip:true,
      showModal:true
    })
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
    showmodal_start:true,
    showmodal_next:false,
    showmodal_end:false,
    showmodal_analyse:false,
    showmodal_title:false,
    showmodal_decide:false,
    showmodal_continue:false
    })
    reset()
    this.onLoad
   }
})