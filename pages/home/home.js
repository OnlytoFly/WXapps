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
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    //每次显示更新数据，并尝试拿到可能已经从mine页面拿到的用户数据
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

    //判断是否还有下一页app数据，如果有则向服务器请求，并更新
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
  //向服务器请求数据，拿到app的列表，并初始化显示列表来显示app
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
  //判断登录状态
  islogin(){

    if(wx.getStorageSync('userInfo')){
      return true;
    }
    else{
      return false;
    }

  },
  //更改用户对某款app的收藏
  async disloveit(e){

    //先判断是否登录
    if(this.islogin()){
      var num=e.currentTarget.dataset.appnum;
      //拿到app编号，修改wx缓存数据
      var temp = 'appsList[' + num +'].islove'
      this.setData({
        [temp]:!this.data.appsList[num].islove,
      })
      //用来发给数据库服务器的包体 changeFavorite
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
      //发给服务器修改数据
      const res=await request({url:"wxuserfavorite/change",data:this.data.changeFavorite});

      //修改自wx内部缓存数据，减少与数据库的交互
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
      
      //更新显示列表
      this.updateShowList();
    }
    else{
      return false;
    }
    
  },
  //input内容发生变化则修改变量内容，并根据内容显示搜索结果
  searchinginput(e){

    this.setData({
      searchingtext:e.detail.value,
    })
    this.updateShowList();

  },
  //根据搜索内容，更新app显示列表
  updateShowList(){
    var value = this.data.searchingtext.replace(/\s+/g,"");
    //先清空列表
    this.setData({
      showList:[],
    })
    //如果搜索输入为空则显示全部app
    if (value == ''){
      this.initShowList();
    }
    else{
      //循环搜索，如果名字符合条件则加入显示列表
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
  //初始化app显示列表为所有app
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