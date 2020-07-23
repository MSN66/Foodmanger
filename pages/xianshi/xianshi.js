// pages/xianshi/xianshi.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    k:"",
    show:false,
    foodimage:"食物图片:",
    ttitle:"食物营养信息",
    ttitle2:"热量信息:",
    ttitle3:"碳水化合物(克)",
    ttitle4:"纤维素(克)",
   ttitle5:"脂肪(克)" ,
   ttitle6:"蛋白质(克)",
  foodnames:"食物名称:",
    mg:"请输入质量:",
    kcal:'',//食物的热量
    m:100,
    name:'',
    tang:'',//碳水化合物
    Carb:'',//纤维素
    Fat:"",//脂肪
    Pro:"",//蛋白质
    WcA:"",//维生素A
    imglink:"",//图片链接
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
  btn33:function(){
    app.suggestion()
    var give=app.aData.intakeAdvice
    console.log("赋值",give)
    this.setData({
      k:give,
      show:true });
  },
  /**
   * 生命周期函数--监听页面加载
   */
onLoad: function (options) {
  
   this.setData({
      name:app.aData.Selectedfood[app.aData.FSingal].foodname,
      kcal:app.aData.Selectedfood[app.aData.FSingal]["热量(大卡)"],
      tang:app.aData.Selectedfood[app.aData.FSingal]["碳水化合物(克)"],
      Carb:app.aData.Selectedfood[app.aData.FSingal]["纤维素(克)"],
      Fat:app.aData.Selectedfood[app.aData.FSingal]["脂肪(克)"],
      Pro:app.aData.Selectedfood[app.aData.FSingal]["蛋白质(克)"],
      WcA:app.aData.Selectedfood[app.aData.FSingal]["纤维素(克)"],
      imglink:app.aData.Selectedfood[app.aData.FSingal].link
   })
   console.log("sbbbb",app.aData.Selectedfood[app.aData.FSingal]["蛋白质(克)"])
  },
classify:function(e){
  this.setData({ inputm:parseFloat(e.detail.value)})
},
btn3:function(e){
  app.suggestion()
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
   console.log("希纳是",that.data.Pro)
  var timestamp=Date.parse(new Date());
  var date=new Date(timestamp);
  var Y=date.getFullYear();
  var M=(date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1)
  var  D=date.getDate()<10?'0'+date.getDate():date.getDate();
  var da=Y+'-'+M+'-'+D;
  
  wx.request({
   url: 'https://kcal.applinzi.com/UpsetItake.php?IN=' +(that.data.inputm*(parseFloat(that.data.kcal)/parseFloat(that.data.m))).toFixed(2)+'&date='+da+'&openid='+app.aData.openid+'&intakePro='+(that.data.inputm*(parseFloat(that.data.Pro)/parseFloat(that.data.m))).toFixed(2)+'&intakeCarbe='+(that.data.inputm*(parseFloat(that.data.kcal)/parseFloat(that.data.Carbe))).toFixed(2)+'&intakeFat='+(that.data.inputm*(parseFloat(that.data.Fat)/parseFloat(that.data.m))).toFixed(2)  ,
   data: {
   
   },
   header: {
     'content-type': 'application/json'
   },
   success: function (res) {
    console.log("dan",that.data.Pro)
     console.log("jjij",res)
    wx.showToast({
      title: '添加成功',
      icon: '',
      image: '',
      duration: 3000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
     //打印用户信息
     console.log("我是数据库信息",res)
    app.aData.intakecal=parseFloat(res.data.split(" ")[0])
    app.aData.intakePro=parseFloat(res.data.split(" ")[1])
    app.aData.intakeFat=parseFloat(res.data.split(" ")[2])
    app.aData.intakeCarbe=parseFloat(res.data.split(" ")[3])
   
   },  
 }) 
 
 

 setTimeout(function(e){
    wx.switchTab({
  url: '../home/home',
 })
 },3000)

}
  
  
}
})