// pages/xianshi/xianshi.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ttitle:"食物热量信息",
    ttitle2:"热量信息:",
    foodnames:"食物名称:",
    mg:"请输入质量:",
    kcal:'',
    m:'',
    name:'',
    inputm:0.0,
    showvalue3:''
  },
  btn:function(e){
this.setData({kcal:app.globalData.foodcal,
  m:app.globalData.gram,
  name:app.globalData.foodname
})
console.log(app.globalData.foodcal)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.foodgram)
    console.log(app.globalData.selectedfood)
    // this.setData({kcal:wx.getStorageSync('foodcal'),
    //   m:wx.getStorageSync('foodgram'),
    //   name:app.globalData.selectedfood
    // })
    // wx.removeStorageSync('foodcal')
    // wx.removeStorageSync('foodgram')
    this.setData({
      kcal:app.globalData.foodcal,
      m:app.globalData.foodgram,
      name:app.globalData.selectedfood
    })
    // wx.setStorageSync('kcal', '')
    // wx.setStorageSync('m', '')
    // wx.setStorageSync('foodname','')
  },
classify:function(e){
  this.setData({ inputm:parseFloat(e.detail.value)})
},
btn3:function(e){
if(this.data.inputm==''){
  wx.showToast({
    title: '请输入食物质量',
    icon: '',
    image: '../image/baocuo.png',
    duration: 1000,
    mask: true,
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
}
else{
  var that=this
   
  var timestamp=Date.parse(new Date());
  var date=new Date(timestamp);
  var Y=date.getFullYear();
  var M=(date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1)
  var  D=date.getDate()<10?'0'+date.getDate():date.getDate();
  var da=Y+'-'+M+'-'+D;
  wx.request({
   url: 'https://kcal.applinzi.com/UpsetItake.php?IN=' +(this.data.inputm*(parseFloat(this.data.kcal)/parseFloat(this.data.m))).toFixed(2)+'&date='+da+'&openid='+app.aData.openid  ,
   
   data: {
   
   },
   header: {
     'content-type': 'application/json'
   },
   success: function (res) {
    wx.showToast({
      title: '添加成功',
      icon: '',
      image: '',
      duration: 1000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
     //打印用户信息
     console.log(res)
    app.aData.intakecal=res.data
     
   },  
 }) 
 
 wx.switchTab({
  url: '../foodlist/foodlist',
 })
}
  
  
}
})