import {request} from "../../request/index.js"
import {regeneratorRuntime} from "../../lib/runtime/runtime"
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appsList:[],
    hasNextPage:"",
    changeFavorite:{},
    showList:[],
    searchingtext:"",

  },
  QueryParams:{
    pageNum:1,
    pageSize:5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.clearStorageSync();
    this.getAppsList();

  },
  async getAppsList(){
    const res=await request({url:"wxappfavoritenum/list",data:this.QueryParams});
    this.setData({
      appsList:[...this.data.appsList,...res.data.dataZone.pageInfo.list],
      hasNextPage:res.data.dataZone.pageInfo.hasNextPage,
    })
    this.initShowList();
    //console.log(res);
    //console.log(this.QueryParams);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    this.setData({
      appsList:wx.getStorageSync('appsList'),
      changeFavorite:{},
      searchingtext:"",

    })
    this.initShowList();

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.setStorageSync('appsList', this.data.appsList);

  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

    if(this.data.hasNextPage&&this.data.searchingtext.replace(/\s+/g,"")==""){
      this.QueryParams.pageNum++;
      this.getAppsList();

    }
 
   },
   /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  islogin(){

    if(wx.getStorageSync('userInfo')){
      return true;
    }
    else{
      return false;
    }

  },
  async disloveit(e){

    if(this.islogin()){
      var num=e.currentTarget.dataset.appnum;
      var temp = 'appsList[' + num +'].islove'
      this.setData({
        [temp]:!this.data.appsList[num].islove,
      })
      temp = 'changeFavorite';
      this.setData({
        [temp+'.uid']:wx.getStorageSync('userInfo').openId,
      })
      temp += '.app';
      for(var i=1;this.data.appsList[i-1]!=null;i++){
        this.setData({
          [temp+i]:this.data.appsList[i-1].islove,
        })
      }
      const res=await request({url:"wxuserfavorite/change",data:this.data.changeFavorite});

      temp = 'appsList['+num+'].favoritenum'
      //console.log(temp);
      //console.log(this.data);
      if(this.data.appsList[num].islove){
        this.setData({
          [temp]:this.data.appsList[num].favoritenum+1
        })
      }
      else{
        this.setData({
          [temp]:this.data.appsList[num].favoritenum-1
        })
      }
      
      this.updateShowList();
    }
    else{
      return false;
    }
    
  },
  searchinginput(e){

    this.setData({
      searchingtext:e.detail.value,
    })
    this.updateShowList();

  },
  updateShowList(){
    var value = this.data.searchingtext.replace(/\s+/g,"");
    this.setData({
      showList:[],
    })
    if (value == ''){
      this.initShowList();
    }
    else{
      for(var i=0,m=0;this.data.appsList[i];i++){
        if (this.data.appsList[i].appName.indexOf(value) >= 0){
          var temp = 'showList[' + m +']';
          m++;
          this.setData({
            [temp]:this.data.appsList[i],
            [temp+".inappsNum"]:i,
  
          })
        }   
      }
    }

  },
  initShowList(){
    for(var i=0;this.data.appsList[i];i++){
      var temp = 'showList[' + i +']';
      this.setData({
        [temp]:this.data.appsList[i],
        [temp+".inappsNum"]:i,

      })
    }
  },

})