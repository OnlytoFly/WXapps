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
    favoriteList:[],
    changeFavorite:{},

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

  },
  async getAppsList(){
    const res=await request({url:"wxappfavoritenum/list",data:this.QueryParams});
    this.setData({
      appsList:[...this.data.appsList,...res.data.dataZone.pageInfo.list],
      hasNextPage:res.data.dataZone.pageInfo.hasNextPage
    })
    //console.log(res);
    //console.log(this.QueryParams);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    this.setData({
      appsList:[],
      hasNextPage:"",
      favoriteList:[],
      changeFavorite:{},
    })
    this.getAppsList();
    this.loaduserFavorite();

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.setStorageSync('favoriteList', this.data.favoriteList);
    wx.setStorageSync('appsList', this.data.appsList);

  },
  islogin(){

    if(wx.getStorageSync('userInfo')){
      return true;
    }
    else{
      return false;
    }

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

    if(this.data.hasNextPage){
      this.QueryParams.pageNum++;
      this.getAppsList();
    }
 
   },
   /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  async loaduserFavorite(){

    if(this.islogin()){
      this.setData({
        favoriteList:wx.getStorageSync('favoriteList'),

      })
      //console.log(this.data.favoriteList);
      //console.log(this.QueryParams);
      return true;
    }
    else{
      return false;
    }

  },
  async disloveit(e){

    if(this.islogin()){
      var num=e.currentTarget.dataset.appname;
      var temp = 'favoriteList[' + num +']'
      this.setData({
        [temp]:!this.data.favoriteList[num],
      })
      temp = 'changeFavorite';
      this.setData({
        [temp+'.uid']:wx.getStorageSync('userInfo').openId,
      })
      temp += '.app';
      for(var i=1;this.data.favoriteList[i-1]!=null;i++){
        this.setData({
          [temp+i]:this.data.favoriteList[i-1],
        })
      }
      const res=await request({url:"wxuserfavorite/change",data:this.data.changeFavorite});

      temp = 'appsList['+num+'].favoritenum'
      //console.log(temp);
      //console.log(this.data);
      if(this.data.favoriteList[num]){
        this.setData({
          [temp]:this.data.appsList[num].favoritenum+1
        })
      }
      else{
        this.setData({
          [temp]:this.data.appsList[num].favoritenum-1
        })
      }
    }
    else{
      return false;
    }

  },

})