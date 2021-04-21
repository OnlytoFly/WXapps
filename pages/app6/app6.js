// pages/translator/translator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectArray: [{
      "id": "1",
      "text": "自动检测"
  }, {
      "id": "2",
      "text": "韩语"
  }, {
    "id": "3",
    "text": "繁体中文"
  }, {
  "id": "4",
  "text": "英语"
  }, {
  "id": "5",
  "text": "日语"
  }, {
  "id": "6",
  "text": "保加利亚语"
  }, {
  "id": "7",
  "text": "芬兰语"
  }, {
  "id": "8",
  "text": "斯洛文尼亚语"
  }, {
  "id": "9",
  "text": "泰语"
  }, {
  "id": "10",
  "text": "粤语"
  }, {
  "id": "11",
  "text": "葡萄牙语"
  }, {
  "id": "12",
  "text": "文言文"
  }, {
  "id": "13",
  "text": "俄语"
  }, {
    "id": "14",
    "text": "德语"
  }, {
    "id": "15",
    "text": "意大利语"
  }],
  translatorCode:'',
  allResult:[],
  finalResult:"",
  finalid:"",
  Toid:""
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
  getDate:function(e){
    console.log(e.detail.id)
   /*   finalid:selectArray[0].id */
   /* finalid= wx.createSelectorQuery().in(this).detail */
   this.setData({
     finalid: e.detail.id
   })
},

  inputChange:function(e){
  this.setData({
    finalResult:e.detail.value
  }),
  console.log(this.data.finalResult)
},

showDialogBtn:function(finalResult,finalid) { 
  //console.log("esfesw"+this.data.foodResult)
     if(this.data.finalid=="0"){
         console.log("abcd");
         this.setData({
          Toid:"auto"
        })
     }else if(this.data.finalid=="1"){
        this.setData({
          Toid:"kor"
      })
     }else if(this.data.finalid=="2"){
         this.setData({
           Toid:"cht"
      })
     }else if(this.data.finalid=="3"){
         this.setData({
           Toid:"en"
      })
     }else if(this.data.finalid=="4"){
         this.setData({
           Toid:"jp"
      })
     }else if(this.data.finalid=="5"){
         this.setData({
            Toid:"bul"
      })
     }else if(this.data.finalid=="6"){
         this.setData({
            Toid:"fin"
      })
     }else if(this.data.finalid=="7"){
         this.setData({
            Toid:"slo"
      })
     }else if(this.data.finalid=="8"){
         this.setData({
            Toid:"th"
      })
     }else if(this.data.finalid=="9"){
        this.setData({
            Toid:"yue"
      })
     }else if(this.data.finalid=="10"){
        this.setData({
          Toid:"pt"
      })
     }else if(this.data.finalid=="11"){
        this.setData({
          Toid:"wyw"
      })
     }else if(this.data.finalid=="12"){
       this.setData({
          Toid:"ru"
      })
     }else if(this.data.finalid=="13"){
       this.setData({
         Toid:"de"
      })
     }else if(this.data.finalid=="14"){
       this.setData({
          Toid:"it"
      })
     }
     /* this.setData({
       Toid:"auto"
     }) */
     console.log(this.data.Toid)
  wx.request({
    url: 'http://api.tianapi.com/txapi/fanyi/index',
    method:'GET',
    data:{
      key:'de654987fe3a7b4460118b2fdbd184fa',
      text :this.data.finalResult,
      to : this.data.Toid
    },
    success: function(res){
      console.log(res.data)
         self.setData({
          translatorCode: res.data.code,
          allResult:res.data.newslist
      })
    },
    fail: function () {
      // fail
    } 
   }) 
}
})