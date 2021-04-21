// pages/api4/api4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    multiArray: [['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
 
    ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
   
      '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
   
      '25', '26', '27', '28', '29', '30', '31'
   
    ]],
  
    multiIndex: [3, 21],
   dates:'',
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
 
var data = {
 
  multiArray: this.data.multiArray,
 
  multiIndex: this.data.multiIndex
 
};
 
data.multiIndex[e.detail.column] = e.detail.value;
 
switch (e.detail.column){
 
  case 0:
 
    switch (data.multiIndex[0]) {
 
      case 1:
 
        data.multiArray[1] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
 
          '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
 
          '25', '26', '27', '28', '29'
 
        ];
 
        break;
      case 3:
        data.multiArray[1] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
 
          '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
 
          '25', '26', '27', '28', '29', '30'
 
        ];
 
        break;
        case 5:
          data.multiArray[1] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
   
            '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
   
            '25', '26', '27', '28', '29', '30'
   
          ];
   
          break;
 
          case 8:
            data.multiArray[1] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
     
              '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
     
              '25', '26', '27', '28', '29', '30'
     
            ];
     
            break;
            case 10:
              data.multiArray[1] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
       
                '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
       
                '25', '26', '27', '28', '29', '30'
       
              ];
       
              break;
      default:
 
        data.multiArray[1] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
 
          '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
 
          '25', '26', '27', '28', '29', '30', '31'
 
        ];
 
        break;
 
    }
 
    data.multiIndex[1] = 0;
 
    data.multiIndex[2] = 0;
 
    break;
 
}
 
this.setData(data);
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value,
      dates: this.data.multiArray[0][e.detail.value[0]]+this.data.multiArray[1][e.detail.value[1]]
    })
    console.log('1为：', this.data.multiArray[0][e.detail.value[0]])
    console.log('2为：', this.data.multiArray[1][e.detail.value[1]])
    console.log( this.data.dates)
  },

  test:function(){
    var that=this;
    wx.redirectTo({
      url: '/pages/app4/api4b?dates='+that.data.dates,
    })
  },

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

  }
})