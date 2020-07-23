// pages/foodshow/foodshow.js
const app=getApp()

Page({
   
  /**
   * 页面的初始数据
   */
  data: {
    // foodname1:"",
    // img1:"",
    // foodname2:"",
    // img2:"",
    // foodname3:"",
    // img3:"",
    // foodname4:"",
    // img4:"",
    // foodname5:"",
    // img5:""

     zu:[],
     length:0
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
    // ' var l=app.aData.Selectedfood.length
    this.setData({zu:app.aData.Selectedfood})


    // this.setData({
    //   foodname1:app.aData.Selectedfood[0].foodname,
    //   img1:app.aData.Selectedfood[0].link,
    //   foodname2:app.aData.Selectedfood[1].foodname,
    //   img2:app.aData.Selectedfood[1].link,
    //   foodname3:app.aData.Selectedfood[2].foodname,
    //   img3:app.aData.Selectedfood[2].link,
    //   foodname4:app.aData.Selectedfood[3].foodname,
    //   img4:app.aData.Selectedfood[3].link,
    //   foodname5:app.aData.Selectedfood[4].foodname,
    //   img5:app.aData.Selectedfood[4].link
    // })'
    var length=0
  for ( var i in this.data.zu){
          length++
  }
    this.setData({length:length})
    console.log("lenght",length)
  },
tap1:function(e){
     app.aData.FSingal=0
     wx.navigateTo({
       url: '../xianshi/xianshi',
     })
},
tap2:function(e){
  app.aData.FSingal=1
  wx.navigateTo({
    url: '../xianshi/xianshi',
  })
},
tap3:function(e){
  app.aData.FSingal=2
  wx.navigateTo({
    url: '../xianshi/xianshi',
  })
},
tap4:function(e){
  app.aData.FSingal=3
  wx.navigateTo({
    url: '../xianshi/xianshi',
  })
},
tap5:function(e){
  app.aData.FSingal=4
  wx.navigateTo({
    url: '../xianshi/xianshi',
  })
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