// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */

  data: {
    isTiptrue:true,
    indicatorDots: true,
    show: false,
    tips:"tips:点击",
    consumecal:0,
    intakecal:0,
    cokecal:0,
    ricecal:0,
    beefcal:0,
    cokeincal:0,
    riceincal:0,
    beefincal:0,
    swiperCurrent:0,
    avatarUrl:'',
    nickname:'',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    dbw:'期望体重:',
    intake:'今日已摄入热量：',
    output:'今日运动消耗热量：',
    output1:'约为',
    DBW:app.aData.dbw,
    kg:'KG',
    slider: [
      {picUrl: 'http://a1.qpic.cn/psc?/V13wS44R2OtLTh/.35sY8zpnPlhVlJz3hDe0wOAcuBRmAAcZ0wJoZmKKDI6Wg3.woOfyETe4YDptr2WoRvRwv5phfLWprMqpu07Kw!!/b&ek=1&kp=1&pt=0&bo=tQHlALUB5QARADc!&tl=1&tm=1594872000&sce=0-12-12&rf=viewer_311'},
      {picUrl: 'http://a1.qpic.cn/psc?/V13wS44R2OtLTh/.35sY8zpnPlhVlJz3hDe0ydap4fIe*FCAO36ViL*BtOgsrpdHpwuo5QEfmWtvk.DwsexyUpOufXMm9T5AS6OwA!!/b&ek=1&kp=1&pt=0&bo=qgFHAKoBRwARADc!&tl=1&tm=1594872000&sce=0-12-12&rf=viewer_311'},
      {picUrl: 'http://a1.qpic.cn/psc?/V13wS44R2OtLTh/.35sY8zpnPlhVlJz3hDe0.lcHPc3lLnzSz*UzChnfjjn1HcxJZCoixXMEuPH1ktPsLAihY3QgKZy2mE2lDb.DQ!!/b&ek=1&kp=1&pt=0&bo=iwF2AIsBdgARADc!&tl=1&vuin=1978468912&tm=1594872000&sce=50-1-1&rf=viewer_311'},
   
      ],
      swiperCurrent: 0,
    msgList: [
      { 
        title: "体脂率为：" },
      { title: "您的健康体重为：" },
      { title: "您每日所需的热量为:" },
      { title: "您的基础代谢为:" },
      {title: "BMI:"}
      ],
    showModal: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    showModal5: false

    }

  ,
 

  jump: function (e) {

    this.setData({
     show:true,
    
    }); 
  },
  onClose() {
    this.setData({ close: false });
  },
  swiperChange: function(e){
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
 
  hideModal: function (e) {

    this.setData({
      showModal: false,
    
    }); 
  },
  hideModal2: function (e) {

    this.setData({
    
      showModal2: false
    }); 
  },
  hideModal3: function (e) {

    this.setData({
    
      showModal3: false
    });
  },
  hideModal4: function (e) {

    this.setData({
    
      showModal4: false
    }); 
  },
  hideModal5: function (e) {

    this.setData({
    
      showModal5: false
    }); 
  },
  getCurIdx(e){
   
      
      
      this.data.swiperCurrent=e.detail.current;
     
    },
  swipclick: function (e) {
    console.log(this.data.swiperCurrent)
    var flag=this.data.swiperCurrent
    if(flag==0){
      this.setData({
        showModal: true
  
      })
    }
    else if(flag==1){
      this.setData({
        showModal2: true
  
      })
    }
    else if(flag==2){
      this.setData({
        showModal3: true
  
      })
    }
    else if (flag==3){
      this.setData({
        showModal4: true
  
      })
    }
    else if (flag==4){
      this.setData({
        showModal5: true
  
      })
    }
  },

 onShow:function(){
  var that=this
  
  var timestamp=Date.parse(new Date());
  var date=new Date(timestamp);
  var Y=date.getFullYear();
  var M=(date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1)
  var  D=date.getDate()<10?'0'+date.getDate():date.getDate();
  var da=Y+'-'+M+'-'+D;
    
  wx.request({
   url:'https://kcal.applinzi.com/UpsetItake.php?IN=' + 0+'&date='+da+'&openid='+app.aData.openid +'&intakePro='+0+'&intakeFat='+0+'&intakeCarbe='+0 ,
   
   data: {
   
   },
   header: {
     'content-type': 'application/json'
   },
   success: function (res) {
     //打印用户信息
     var get=String(res.data)
     
     console.log("字符蛋白质",get.split(" ")[1])
     app.aData.IntakePro = parseFloat(get.split(" ")[1])
     app.aData.IntakeFat = parseFloat(get.split(" ")[2])
     app.aData.IntakeCarbe=parseFloat(get.split(" ")[3])
      console.log("蛋白质",app.aData.IntakePro)
     that.setData({
      intakecal:get.split(" ")[0],
      cokeincal:(parseFloat(get.split(" ")[0])*0.0063).toFixed(3),
      riceincal:(parseFloat(get.split(" ")[0])*0.0043).toFixed(3),
      beefincal:(parseFloat(get.split(" ")[0])*2.88).toFixed(3)
  })
   },
 
   
 }),
 wx.request({
  url: 'https://kcal.applinzi.com/UpsetConsume.php?IN=' + 0+'&date='+da+'&openid='+app.aData.openid +'&intakePro='+0+'&intakeFat='+0+'&intakeCarbe='+0  ,
  
  data: {
  
  },
  header: {
    'content-type': 'application/json'
  },
  success: function (res) {
    //打印用户信息
    
    console.log(res)
  that.setData({
    consumecal:res.data,
    cokecal:(parseFloat(res.data)*0.0063).toFixed(3),
    ricecal:(parseFloat(res.data)*0.0043).toFixed(3),
    beefcal:(parseFloat(res.data)*2.88).toFixed(3)
  })
  
  },

  
})

  
 
 },
  onLoad:function()
  
  {  
     console.log("这是home",app.aData.DateArray)
     var that=this
     wx.showLoading({
       title: '加载中',
       complete: (res) => {},
       fail: (res) => {},
       mask: true,
       success: (res) => {},
     })
    setTimeout(function () { 
      console.log("11",app.aData)
     var tempdata=[]
     app.aData.BMI=(app.aData.weight/(app.aData.tall*app.aData.tall/10000)).toFixed(2)

  tempdata.push({title:"体脂率为："+app.aData.BFR+"%"})
  tempdata.push({ title: "健康体重为："+app.aData.DBweight+"KG" })
  tempdata.push({ title: "每日所需热量为:"+app.aData.BMR+"KCAL" })
  tempdata.push({ title: "每日基础代谢为:"+app.aData.DBM+"KCAL"}) 
  tempdata.push({ title: "BMI为:"+app.aData.BMI})
  console.log("显示",app.aData)
  that.setData({
    avatarUrl:app.aData.avatarUrl,
    nickname:app.aData.nickName,
    msgList:tempdata
  });
  wx.hideLoading()
   }, 1000)
   
    // console.log("???",res)
   //引导页
   var firstOpen = wx.getStorageSync("loadOpen")
   var firstOpen = wx.getStorageSync("loadOpen")
   var firstOpen = wx.getStorageSync("loadOpen")
   var firstOpen = wx.getStorageSync("loadOpen")
   console.log("是否首次打开本页面==", firstOpen)
   if (firstOpen == undefined || firstOpen == '') { //根据缓存周期决定是否显示新手引导
     this.setData({
       isTiptrue: 1,
     })
   } else {
     this.setData({
       isTiptrue: false,
     })
   }
},
closeThis(e) {
  wx.setStorage({
    key: 'loadOpen',
    data: 'OpenTwo'
  })
  this.setData({
    isTiptrue: false
  })
},
close1(e) {
  this.setData({
    isTiptrue: 2
  })
},
close2(e) {
  this.setData({
    isTiptrue: 3
  })
},
close3(e) {
  this.setData({
    isTiptrue: 4
  })
},
close4(e) {
  this.setData({
    isTiptrue: 5
  })
},
close5(e) {
  this.setData({
    isTiptrue: 6
  })
},
close6(e) {
  this.setData({
    isTiptrue: 7
  })
},
close7(e) {
  this.setData({
    isTiptrue: 8
  })
},
bindveiw: function() {
    console.log("this：",app.aData.avatarUrl)
    wx.navigateTo({
      url: '../id/id'
    })
  },
  jump1:function(){
    wx.navigateTo({
      url: '../line/line'
    })
  }
,
 
   //滑动事件监听
   swiperChange:function(event){
    this.setData({
      currentSwiper: event.detail.current
    });
  },

//banner点击事件
  tapBanner:function(event){
    //下面介绍两种banner 点击获取数据事件
    // 1. 通过数据源获取
    var indexUrl = this.data.imgUrls[this.data.currentSwiper];
    console.log(indexUrl);
    // 2 . 也可以通过自定义属性获取
    var url = event.currentTarget.dataset.indexurl;
    console.log(url);

  }

 
})