// pages/stella/stella.js
var util= require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stellaResult:[],
    stellaCode:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    self = this
    var timeNow = util.formatData(new Date());
    this.setData({
    time: timeNow,
    });
    console.log(this.data.time)
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

/*处女座API输出函数*/
  showDialogBtn_Virgo:function(stellaResult){
     /* stellaResult:'virgo' */
     wx.request({
      url: 'http://api.tianapi.com/txapi/star/index',
      method:'GET',
      data:{
        key:'de654987fe3a7b4460118b2fdbd184fa',
        astro :'virgo',
        date :this.data.time
      },
      success: function(res){
        console.log(res.data)
           self.setData({
            stellaCode: res.data.code,
            stellaResult:res.data.newslist
        })
      }
    })
    this.setData({
      showModal_Virgo: true,
      showModal:true
     })
  },

/*水瓶座API输出函数*/  
  showDialogBtn_Aquarius:function(stellaResult){
    /* stellaResult:'Aquarius' */
    wx.request({
     url: 'http://api.tianapi.com/txapi/star/index',
     method:'GET',
     data:{
       key:'de654987fe3a7b4460118b2fdbd184fa',
       astro :'aquarius',
       date :this.data.time
     },
     success: function(res){
       console.log(res.data)
          self.setData({
           stellaCode: res.data.code,
           stellaResult:res.data.newslist
       })
     }
   })
   this.setData({
     showModal_Aquarius: true,
     showModal:true
    })
 },

 /*双鱼座API输出函数*/  
 showDialogBtn_Pisces:function(stellaResult){
  /* stellaResult:'Pisces' */
  wx.request({
   url: 'http://api.tianapi.com/txapi/star/index',
   method:'GET',
   data:{
     key:'de654987fe3a7b4460118b2fdbd184fa',
     astro :'pisces',
     date :this.data.time
   },
   success: function(res){
     console.log(res.data)
        self.setData({
         stellaCode: res.data.code,
         stellaResult:res.data.newslist
     })
   }
 })
 this.setData({
   showModal_Pisces: true,
   showModal:true
  })
},

/*巨蟹座API输出函数*/  
showDialogBtn_Cancer:function(stellaResult){
  /* stellaResult:'Cancer' */
  wx.request({
   url: 'http://api.tianapi.com/txapi/star/index',
   method:'GET',
   data:{
     key:'de654987fe3a7b4460118b2fdbd184fa',
     astro :'cancer',
     date :this.data.time
   },
   success: function(res){
     console.log(res.data)
        self.setData({
         stellaCode: res.data.code,
         stellaResult:res.data.newslist
     })
   }
 })
 this.setData({
   showModal_Cancer: true,
   showModal:true
  })
},

/*白羊座API输出函数*/  
showDialogBtn_Aries:function(stellaResult){
  /* stellaResult:'Aries' */
  wx.request({
   url: 'http://api.tianapi.com/txapi/star/index',
   method:'GET',
   data:{
     key:'de654987fe3a7b4460118b2fdbd184fa',
     astro :'aries',
     date :this.data.time
   },
   success: function(res){
     console.log(res.data)
        self.setData({
         stellaCode: res.data.code,
         stellaResult:res.data.newslist
     })
   }
 })
 this.setData({
   showModal_Aries: true,
   showModal:true
  })
},

/*摩羯座API输出函数*/  
showDialogBtn_Capricorn:function(stellaResult){
  /* stellaResult:'Capricorn' */
  wx.request({
   url: 'http://api.tianapi.com/txapi/star/index',
   method:'GET',
   data:{
     key:'de654987fe3a7b4460118b2fdbd184fa',
     astro :'capricorn',
     date :this.data.time
   },
   success: function(res){
     console.log(res.data)
        self.setData({
         stellaCode: res.data.code,
         stellaResult:res.data.newslist
     })
   }
 })
 this.setData({
   showModal_Capricorn: true,
   showModal:true
  })
},

/*射手座API输出函数*/  
showDialogBtn_Sagittarius:function(stellaResult){
  /* stellaResult:'Sagittarius' */
  wx.request({
   url: 'http://api.tianapi.com/txapi/star/index',
   method:'GET',
   data:{
     key:'de654987fe3a7b4460118b2fdbd184fa',
     astro :'sagittarius',
     date :this.data.time
   },
   success: function(res){
     console.log(res.data)
        self.setData({
         stellaCode: res.data.code,
         stellaResult:res.data.newslist
     })
   }
 })
 this.setData({
   showModal_Sagittarius: true,
   showModal:true
  })
},

/*狮子座API输出函数*/  
showDialogBtn_Leo:function(stellaResult){
  /* stellaResult:'Leo' */
  wx.request({
   url: 'http://api.tianapi.com/txapi/star/index',
   method:'GET',
   data:{
     key:'de654987fe3a7b4460118b2fdbd184fa',
     astro :'leo',
     date :this.data.time
   },
   success: function(res){
     console.log(res.data)
        self.setData({
         stellaCode: res.data.code,
         stellaResult:res.data.newslist
     })
   }
 })
 this.setData({
   showModal_Leo: true,
   showModal:true
  })
},

/*双子座API输出函数*/  
showDialogBtn_Gemini:function(stellaResult){
  /* stellaResult:'Gemini' */
  wx.request({
   url: 'http://api.tianapi.com/txapi/star/index',
   method:'GET',
   data:{
     key:'de654987fe3a7b4460118b2fdbd184fa',
     astro :'gemini',
     date :this.data.time
   },
   success: function(res){
     console.log(res.data)
        self.setData({
         stellaCode: res.data.code,
         stellaResult:res.data.newslist
     })
   }
 })
 this.setData({
   showModal_Gemini: true,
   showModal:true
  })
},

/*天秤座API输出函数*/  
showDialogBtn_Libra:function(stellaResult){
  /* stellaResult:'Libra' */
  wx.request({
   url: 'http://api.tianapi.com/txapi/star/index',
   method:'GET',
   data:{
     key:'de654987fe3a7b4460118b2fdbd184fa',
     astro :'libra',
     date :this.data.time
   },
   success: function(res){
     console.log(res.data)
        self.setData({
         stellaCode: res.data.code,
         stellaResult:res.data.newslist
     })
   }
 })
 this.setData({
   showModal_Libra: true,
   showModal:true
  })
},

/*天蝎座API输出函数*/  
showDialogBtn_Scorpio:function(stellaResult){
  /* stellaResult:'Scorpio' */
  wx.request({
   url: 'http://api.tianapi.com/txapi/star/index',
   method:'GET',
   data:{
     key:'de654987fe3a7b4460118b2fdbd184fa',
     astro :'scorpio',
     date :this.data.time
   },
   success: function(res){
     console.log(res.data)
        self.setData({
         stellaCode: res.data.code,
         stellaResult:res.data.newslist
     })
   }
 })
 this.setData({
   showModal_Scorpio: true,
   showModal:true
  })
},

/*金牛座API输出函数*/  
showDialogBtn_Taurus:function(stellaResult){
  /* stellaResult:'Taurus' */
  wx.request({
   url: 'http://api.tianapi.com/txapi/star/index',
   method:'GET',
   data:{
     key:'de654987fe3a7b4460118b2fdbd184fa',
     astro :'taurus',
     date :this.data.time
   },
   success: function(res){
     console.log(res.data)
        self.setData({
         stellaCode: res.data.code,
         stellaResult:res.data.newslist
     })
   }
 })
 this.setData({
   showModal_Taurus: true,
   showModal:true
  })
},

  hidepopup: function () {
    this.setData({
      showModal: false,
      showModal_Virgo:false,
      showModal_Aquarius:false,
      showModal_Pisces:false,
      showModal_Cancer:false,
      showModal_Aries: false,
      showModal_Capricorn: false,
      showModal_Sagittarius: false,
      showModal_Leo: false,
      showModal_Gemini: false,
      showModal_Libra: false,
      showModal_Scorpio: false,
      showModal_Taurus: false
    });
  }
})