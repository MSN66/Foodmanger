//index.js
//获取应用实例
const app = getApp()
var i=''
var openid=''
Page({
 
  data: {
    flag:0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
 
  onLoad: function () {
    var that=this
   
    
    var id=null
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (that.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  
    
  },
  getUserInfo: function(e) {
    this.setData({flag:1})
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    app.aData.avatarUrl=e.detail.userInfo.avatarUrl
    app.aData.nickName=e.detail.userInfo.nickName
  
    //获取openid
    wx.login({
  
      complete: function (res) {
        console.log("this",res.code),
        //发送请求获取openid
        wx.request({
         
          url: 'https://kcal.applinzi.com/getID.php?code=res.code', //接口地址
          data: { code: res.code },
          header: {
            'content-type': 'application/json' //默认值
          },
          success: function (res){
      
              console.log("zheshi ",res.data.openid)
             app.aData.openid=res.data.openid.toString()
             app.aData.openid=String(app.aData.openid)
            var j=0
            while(j<15){
              app.aData.openid=String(app.aData.openid).replace('-','')
              j++
            }
            
            console.log("888",app.aData)
            console.log("open",res.data)
            //向数据库注册用户，验证用户
            var that = this;
            wx.request({
              url: 'https://kcal.applinzi.com/checkUserInfo1.php?nickname=' + e.detail.userInfo.nickName + '&head=' + e.detail.userInfo.avatarUrl + '&openid=' + app.aData.openid,
              
              data: {
  
              },
              header: {
                'content-type': 'application/json'
              },
              success: function (res) {
                //打印用户信息
                console.log(res)
                i=String(res.data)
                console.log("jkjk",i)
              },
            
      
             
            })
            
          }
        })
        
      }
    })
  
    
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })

  } ,
  loginCc:function(event){
    if(i=='666'){
      wx.navigateTo({
        url: '../new/new',
      })
     
    }
    else{
      
     console.log("jjj",i)

      
      wx.request({
        url: 'https://kcal.applinzi.com/getUserInfo.php?openid='+app.aData.openid,
        data: {
  
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          //打印用户信息
          app.aData.nickName=res.data[0].nickname
          app.aData.sex=res.data[0].sex
          app.aData.age=res.data[0].age
          app.aData.tall=res.data[0].tall
          app.aData.weight=res.data[0].weight
          app.aData.DBweight=(23*(app.aData.tall*app.aData.tall)/10000).toFixed(2)
          app.aData.BMI=app.aData.weight/(app.aData.tall*app.aData.tall/10000)
          if(app.aData.sex=="男"){
          app.aData.BFR=(1.2*app.aData.BMI+0.23*app.aData.age-5.4-10.8*1).toFixed(2)
          app.aData.BMR=(app.aData.weight*10+app.aData.tall*6.25-app.aData.age*5+5).toFixed(2)
          app.aData.DBM=(661+app.aData.weight*9.6+app.aData.tall*1.72-app.aData.age*4.7).toFixed(0)
         }
        else{
          app.aData.BFR=(1.2*app.aData.BMI+0.23*app.aData.age-5.4).toFixed(2)
          app.aData.BMR=(app.aData.weight*10+app.aData.tall*6.25-app.aData.age*5-161).toFixed(2);
          app.aData.DBM=(67+app.aData.weight*13.73+app.aData.tall*5-app.aData.age*4.7).toFixed(0)
         }
                console.log("shuchu",app.aData)
       
        },
      
      })
    var that=this
      wx.request({
        url: 'https://kcal.applinzi.com/getChart.php?openid=' + app.aData.openid,
        
        data: {

        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          //打印用户信息
          console.log("zheshi表",res)
        //  console.log("这是表",res.data)
        var timestamp=Date.parse(new Date());
        var date=new Date(timestamp);
        var Y=date.getFullYear();
        var M=(date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1)
        var  D=date.getDate()<10?'0'+date.getDate():date.getDate();
        var da=Y+'-'+M+'-'+D;
        var j=res.data.length-1;
        var temper=[];
        var temper2=[];
        var temper3=[];
        
        if(res.data.length!=0&&res.data[0].recordedDate!=da){
          app.globalData.Pagelineflag=1
        }
        if(app.globalData.DateArray.length==1){
           while(j>=res.data.length-7){
         if(res.data[j].recordedDate==da){
           j--;         }
         else{
           if(res.data[j].recordedDate==res.data[j+1].recordedDate){
             j--;
           }
           else{
             temper.push(res.data[j].recordedDate)
          temper2.push(res.data[j].consume)
          temper3.push(res.data[j].intake)
          app.aData.totalPro+=res.data[j].intakePro
          app.aData.totalFat+=res.data[j].intakeFat
          app.aData.totalCarbe+=res.data[j].intakeCarbe
          app.aData.totalIntake+=res.data[j].intake
          app.aData.totalCarbe2+=25
          j--;
           }
         }
         if(j<0)
         break;
        }
        var k=temper.length-1
        while(k>=0){
          app.globalData.DateArray.push(temper[k]);
          app.globalData.ConcalArray.push(temper2[k]);
          app.globalData.IncalArray.push(temper3[k]);

          k--;
        }
        }
       
        console.log("看这里",app.globalData.IncalArray)



        },
      
      

       
      })



        if(  app.aData.DBM!=0)
          wx.switchTab({
        url: '../home/home',
      })
     


    }
  }
})
