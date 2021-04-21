// pages/api5/api5.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    navbar: ['中草药查询', '药物说明书查询'],
    currentTab: 0,
    dreamResult:[],
    dreamCode:'',
    zhongyao:'',
    yao:'',
    contents1:'',
    showModal:false,
    showmodal:false,
  /*   contents2:'', */
   /*  showDialog: false */
  },
  change:function(str){
     str.replace(/<br>/g,"\n")
  },
  valueInputFirst:function(e){
    this.setData({
      zhongyao:e.detail.value
    }),
    console.log(this.data.zhongyao)
  },
  valueInputSecond:function(e){
    this.setData({
      yao:e.detail.value
    }),
    console.log(this.data.yao)
  },
  
    navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    }) 
  },
 /*   var dreamResult[i].content = dreamResult[i].content.replace(/<br>/g,"\n")
   var str = that.data.content.split('\n').join('&hc') */
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
  test1:function(){
    var self=this;
    var tmp='';
    wx.request({
      url: 'http://api.tianapi.com/txapi/zhongyao/index', 
      method:'GET',
      data:{
        key:'e14365791172cb3feac0c7ec2b4ed403',
        word:self.data.zhongyao,
      },
      success: function (res) {
        console.log(res.data)
        if(res.data.code!=200){
          self.setData({
            showModal:true
          })
          return false
        }
        if(res.data.code=200){
        tmp=res.data.newslist[0].content.replace(/<br>/g, "\n")
        try{
            
            tmp=tmp.replace(/<p>/g, " ")
        }
        catch(err) {

        }
        try{
            
          tmp=tmp.replace(/<\/p>/g, " ")
      }
      catch(err) {

      }
      try{
            
        tmp=tmp.replace(/<\/P>/g, " ")
    }
    catch(err) {

    }
        try{
          tmp=tmp.content.replace(/<P>/g, " ")
          
      }
      catch(err) {

      }
       
        self.setData({
          dreamCode:res.data.code,
          dreamResult:res.data.newslist,
         
          contents1:tmp
        })
        console.log(tmp) 
      }
   
      },
      fail: function (err) {
        console.log(err)
      }
    })
    
/*     let contents1=dreamResult[0].content
    contents1.replace(/<br>/g, "\n")
    contents1.replace(/<P>/g, " ") */
/*     dreamResult[0].content.replace(/<br>/g, "\n");
    dreamResult[0].content.replace(/<P>/g, " ") */
  },
  test2:function(){
    var self=this;
    var tmp=''
    wx.request({
      url: 'http://api.tianapi.com/txapi/yaopin/index', 
      method:'GET',
      data:{
        key:'e14365791172cb3feac0c7ec2b4ed403',
        word:self.data.yao,
      },
      success: function (res) {
        console.log(res.data)
        if(res.data.code!=200){
          self.setData({
            showModal:true
          })
          return false
        }   if(res.data.code=200){
       
        tmp=res.data.newslist[0].content.replace(/<br \/>/g, "\n")
        try{
          tmp=tmp.content.replace(/<P>/g, " ")
          
      }
      catch(err) {

      }
      try{
        tmp=tmp.content.replace(/<P> /g, " ")
        
    }
    catch(err) {

    }
        try{
            
            tmp=tmp.replace(/<p>/g, " ")
        }
        catch(err) {

        }
        try{
            
          tmp=tmp.replace(/<\/p>/g, " ")
      }
      catch(err) {

      }
      try{
            
        tmp=tmp.replace(/<\/P>/g, " ")
    }
    catch(err) {

    }
    
        self.setData({
          dreamCode:res.data.code,
          dreamResult:res.data.newslist,
          contents1:tmp
        })
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
    showmodal:false,
    dreamResult:[],
    })
    this.onLoad
   }
})