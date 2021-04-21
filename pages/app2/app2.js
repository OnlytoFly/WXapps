var app = getApp()

Page({
  data:{
    navbar: ['24h', '48h', '三天','四天','五天'],
    currentTab: 0,
    dreamResult:[],
    dreamCode:'',
    showModal:false,
     showmodal:false,
   /*  showDialog: false */
  },

  
    navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    }) 
  },

  onLoad: function() {
      var that = this;
      wx.request({
        url: 'http://api.tianapi.com/txapi/tianqi/index', 
        method:'GET',
        data:{
            key:'e14365791172cb3feac0c7ec2b4ed403',
            city:'大连市',
        },
        success: function (res) {
          console.log(res.data)
          if(res.data.code == 200){
          that.setData({
            dreamCode:res.data.code,
          dreamResult:res.data.newslist,
          showmodal:true
          })
        }
        if(res.data.code!=200){
            that.setData({
              showModal:true,
              content: res.data.msg
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
    this.onLoad
   }

    /**
  * 控制 pop 的打开关闭
  * 该方法作用有2:
  * 1：点击弹窗以外的位置可消失弹窗
  * 2：用到弹出或者关闭弹窗的业务逻辑时都可调用
  */
/*   toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
 */
 
})