// pages/cook/cook.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
  recipeCode:'',
  recipeResult:[],
  foodResult:"",
  showModal: false
  },
  showDialogBtn: function() {
    this.setData({
      showModal: true
    })
  },
  preventTouchMove: function () {
  },
  onUnload: function () {
    wx.reLaunch({
      url: 'pages/home/home'
    })
  },

  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  },
  onLoad() {
    self = this
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  inputChange:function(e){
    console.log(e)
    this.setData({
      foodResult:e.detail.value
      //foodResult:'黄瓜'
    })
  },
  test:function(foodResult) { 
    //console.log("esfesw"+this.data.foodResult)
      wx.request({
      url: 'http://api.tianapi.com/txapi/caipu/index',
      method:'GET',
      data:{
        key:'de654987fe3a7b4460118b2fdbd184fa',
        word :this.data.foodResult,
        num:'2'
      },
      success: function(res){
        console.log(res.data)
        if(res.data.msg=="数据返回为空"||res.data.msg=="关键词不得为空"||res.data.msg=="参数值不得为空"){
          console.log(111); 
         /*  wx.showModal({
                        title: '提示',
                        content: '您确定要删除该文件吗？',
                        showCancel: false, //是否显示取消按钮-----》false去掉取消按钮
                        cancelColor: 'skyblue', //取消文字的颜色
                        confirmText: "是", //默认是“确定”
                        confirmColor: 'skyblue', //确定文字的颜色
                        success: function(res) {
                          if (res.cancel) {
                            //点击取消
                            console.log("您点击了取消")
                          } else if(res.confirm){
                            //点击确定
                           console.log("您点击了确定")
                          }
                        }   
                    }) */
           wx.showModal({
            title: '提示！',       
            content: '果咩呐，输入菜谱不合理或者找不到菜谱的样子呢',       
            showCancel: false,
            confirmText: "好哒",
            success: function (res) {      
              if (res.confirm) {//这里是点击了确定以后      
                console.log('用户点击确定')       
              } else {//这里是点击了取消以后       
                console.log('用户点击取消')
              }
            }
          })
        }else{self.setData({
          recipeCode: res.data.code,
          recipeResult:res.data.newslist
        })
      }
      },
      fail: function () {
        // fail
      } 
     }) 
  }
})
  