// pages/new/new.js
const app=getApp()

Page({

 
  
    data: {
      i:0,
      tit:'注册信息',
      array: ['男','女'],
      objectarray:[
      {
        id:0,
        name:'男'
      },
      {
        id:1,
        name:'女'
      }
      ],
      



      inputValue: 0,
      age: 0,
      sex:'',
      tall:0,
      weight:0,
      dbweight:0
    },
    bindPickerChange:function(e){
      this.setData({
        inputValue:e.detail.value
        
      })
    },
      bindKeyInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
   x:function(e){
    var id =null;
    var i = null; 
    if(e.detail.value.age<10||e.detail.value.age>100){
      wx.showToast({
        title: '请输入年龄',
        icon: 'none',
        image:'',
        duration: 2000
      })
    }
 
    else if (e.detail.value.tall<100||e.detail.value.tall>250) {
      wx.showToast({
        title: '请输入身高',
        icon: 'none',
        duration: 2000
      })
    } 
    else if (e.detail.value.weight < 30||e.detail.value.weight > 150) {
      wx.showToast({
        title: '请输入体重',
        icon: 'none',
        duration: 2000
      })
    } 
    else{
      console.log(e)
      i=1;
      app.aData.DBweight=(23*(e.detail.value.tall*e.detail.value.tall)/10000).toFixed(2)
      app.aData.age=e.detail.value.age
      app.aData.tall=e.detail.value.tall
      app.aData.weight=e.detail.value.weight
      app.aData.sex=this.data.array[e.detail.value.sex]
 
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

      
      
      
      wx.request({
        url: 'https://kcal.applinzi.com/test.php?nickname=' + app.globalData.userInfo.nickName + '&head=' + app.globalData.userInfo.avatarUrl + '&openid=' + app.aData.openid +'&'+'tall='+app.aData.tall+'&'+'age='+app.aData.age+'&'+'DBweight='+app.aData.DBweight+'&'+'sex='+app.aData.sex+'&weight=' + app.aData.weight ,
        
        data: {

        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          //打印用户信息
          console.log(res.data)
     
          
        },

        
      })
      wx.request({
        url: 'https://kcal.applinzi.com/test2.php?nickname=' + app.aData.nickName + '&head=' +app.aData.avatarUrl + '&openid=' + app.aData.openid,
        data: {

        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          //打印用户信息
          console.log(res.data)
          console.log(app.aData.sex)
        },
      })
      if(i==1){
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000

      }),
      
      
      wx.switchTab({
        url:'../home/home?id='+id,
        }) 
          
     
     
    }
  
 
 
 





    }
    

    }

   }
  
   
  ,
)