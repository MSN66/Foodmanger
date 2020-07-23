// pages/select/select.js
var app=getApp()
const dat=require('../data')
const titlename=["抗癌","降血糖","降血脂","降血压","抗衰老","活血","安神","养肝","提高免疫力","止咳","清热"]
Page({

  /**
   * 页面的初始数据
   */
  data: {
     ind:0,
    ind1:0, 
    ind2:0,
    ind3:0,
    ind4:0,
    singal:1,
    activeKey:0,
    dalis:[],
    remind: '加载中',
    angle: 0,
    showvalue1:'怒',
    select:"食物热量查询",
    value:'',
  
      active: 1,
      title1:titlename[0],
      title2:titlename[1],
      title3:titlename[2],
      title4:titlename[3],
      title5:titlename[4],
      title6:titlename[5],
      title7:titlename[6],
      title8:titlename[7], 
      title9:titlename[8],
      title10:titlename[9],
      title11:titlename[10],
      index2:[],
      showfood:dat.dat["抗癌"]    
  },
  
  onLoad:function(){ 
    app.aData.Selectedfood
    var l1=this.data.showfood['fruit'].length-3
    var l2=this.data.showfood['meat'].length-3
    var l3=this.data.showfood['egg'].length-3
    var l4=this.data.showfood['menu'].length-3
   var that=this
    
     that.setData({
       ind1:Math.floor(Math.random()*l1),
       ind2:Math.floor(Math.random()*l2),
       ind3:Math.floor(Math.random()*l3),
       ind4:Math.floor(Math.random()*l4)
  
     })
  },
  cht1:function(){
    var c=dat.dat[titlename[0]]
  this.setData({showfood:c,  
  })
  
  var l1=this.data.showfood['fruit'].length-3
    var l2=this.data.showfood['meat'].length-3
    var l3=this.data.showfood['egg'].length-3
    var l4=this.data.showfood['menu'].length-3
    var that=this 
    
     that.setData({
       ind1:Math.floor(Math.random()*l1),
       ind2:Math.floor(Math.random()*l2),
       ind3:Math.floor(Math.random()*l3),
       ind4:Math.floor(Math.random()*l4)
  
     })
  
    
  },
  cht2:function(){
    var c=dat.dat[titlename[1]]
  this.setData({showfood:c})
 
  var l1=this.data.showfood['fruit'].length-3
    var l2=this.data.showfood['meat'].length-3
    var l3=this.data.showfood['egg'].length-3
    var l4=this.data.showfood['menu'].length-3
    var that=this 
    
     that.setData({
       ind1:Math.floor(Math.random()*l1),
       ind2:Math.floor(Math.random()*l2),
       ind3:Math.floor(Math.random()*l3),
       ind4:Math.floor(Math.random()*l4)
  
     })
    },
    cht3:function(){
      var c=dat.dat[titlename[2]]
  this.setData({showfood:c})
 
  var l1=this.data.showfood['fruit'].length-3
  var l2=this.data.showfood['meat'].length-3
  var l3=this.data.showfood['egg'].length-3
  var l4=this.data.showfood['menu'].length-3
  var that=this 
  
   that.setData({
     ind1:Math.floor(Math.random()*l1),
     ind2:Math.floor(Math.random()*l2),
     ind3:Math.floor(Math.random()*l3),
     ind4:Math.floor(Math.random()*l4)

   })
      },
      cht4:function(){
        var c=dat.dat[titlename[3]]
        this.setData({showfood:c})
       
        var l1=this.data.showfood['fruit'].length-3
        var l2=this.data.showfood['meat'].length-3
        var l3=this.data.showfood['egg'].length-3
        var l4=this.data.showfood['menu'].length-3
        var that=this 
        
         that.setData({
           ind1:Math.floor(Math.random()*l1),
           ind2:Math.floor(Math.random()*l2),
           ind3:Math.floor(Math.random()*l3),
           ind4:Math.floor(Math.random()*l4)
      
         })
        },
        cht5:function(){
          var c=dat.dat[titlename[4]]
          this.setData({showfood:c})
         
          var l1=this.data.showfood['fruit'].length-3
    var l2=this.data.showfood['meat'].length-3
    var l3=this.data.showfood['egg'].length-3
    var l4=this.data.showfood['menu'].length-3
    var that=this 
    
     that.setData({
       ind1:Math.floor(Math.random()*l1),
       ind2:Math.floor(Math.random()*l2),
       ind3:Math.floor(Math.random()*l3),
       ind4:Math.floor(Math.random()*l4)
  
     })
          },
          cht6:function(){
            var c=dat.dat[titlename[5]]
  this.setData({showfood:c})
  
  var l1=this.data.showfood['fruit'].length-3
  var l2=this.data.showfood['meat'].length-3
  var l3=this.data.showfood['egg'].length-3
  var l4=this.data.showfood['menu'].length-3
  var that=this 
  
   that.setData({
     ind1:Math.floor(Math.random()*l1),
     ind2:Math.floor(Math.random()*l2),
     ind3:Math.floor(Math.random()*l3),
     ind4:Math.floor(Math.random()*l4)

   })
            },
            cht7:function(){
              var c=dat.dat[titlename[6]]
  this.setData({showfood:c})
 
  var l1=this.data.showfood['fruit'].length-3
    var l2=this.data.showfood['meat'].length-3
    var l3=this.data.showfood['egg'].length-3
    var l4=this.data.showfood['menu'].length-3
    var that=this 
    
     that.setData({
       ind1:Math.floor(Math.random()*l1),
       ind2:Math.floor(Math.random()*l2),
       ind3:Math.floor(Math.random()*l3),
       ind4:Math.floor(Math.random()*l4)
  
     })
              },
              cht8:function(){
                var c=dat.dat[titlename[7]]
  this.setData({showfood:c})
  
  var l1=this.data.showfood['fruit'].length-3
  var l2=this.data.showfood['meat'].length-3
  var l3=this.data.showfood['egg'].length-3
  var l4=this.data.showfood['menu'].length-3
  var that=this 
  
   that.setData({
     ind1:Math.floor(Math.random()*l1),
     ind2:Math.floor(Math.random()*l2),
     ind3:Math.floor(Math.random()*l3),
     ind4:Math.floor(Math.random()*l4)

   })
                },
                cht9:function(){
                  var c=dat.dat[titlename[8]]
    this.setData({showfood:c})
    
    var l1=this.data.showfood['fruit'].length-3
    var l2=this.data.showfood['meat'].length-3
    var l3=this.data.showfood['egg'].length-3
    var l4=this.data.showfood['menu'].length-3
    var that=this 
    
     that.setData({
       ind1:Math.floor(Math.random()*l1),
       ind2:Math.floor(Math.random()*l2),
       ind3:Math.floor(Math.random()*l3),
       ind4:Math.floor(Math.random()*l4)
  
     })
                  },
                  cht10:function(){
                    var c=dat.dat[titlename[9]]
      this.setData({showfood:c})
     
      var l1=this.data.showfood['fruit'].length-3
      var l2=this.data.showfood['meat'].length-3
      var l3=this.data.showfood['egg'].length-3
      var l4=this.data.showfood['menu'].length-3
      var that=this 
      
       that.setData({
         ind1:Math.floor(Math.random()*l1),
         ind2:Math.floor(Math.random()*l2),
         ind3:Math.floor(Math.random()*l3),
         ind4:Math.floor(Math.random()*l4)
    
       })
                    },
                    cht11:function(){
                      var c=dat.dat[titlename[10]]
                      var l1=this.data.showfood['fruit'].length-3
                      var l2=this.data.showfood['meat'].length-3
                      var l3=this.data.showfood['egg'].length-3
                      var l4=this.data.showfood['menu'].length-3
                      var that=this 
                      
                       that.setData({
                         ind1:Math.floor(Math.random()*l1),
                         ind2:Math.floor(Math.random()*l2),
                         ind3:Math.floor(Math.random()*l3),
                         ind4:Math.floor(Math.random()*l4)
                    
                       })
                      },
  onShow:function(){
    this.setData({showvalue1:''})
    console.log(this.data.showfood["fruit"][0])
    var that=this
    wx.request({
      url: 'https://lzsjl.top:5000/getfood',
      
     success(res){
      that.setData({
        dalis:res.data
      })
      var ind=[]
      var k2
     for(k2=-1;k2<res.data.length/2;k2+=2){
        ind.push(k2)
     }
     that.setData({index2:ind})

     
     }
    })   
  },
  onReady: function(){
    var _this = this;
    setTimeout(function(){
      _this.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function(res) {
      var angle = -(res.x*30).toFixed(1);
      if(angle>14){ angle=14; }
      else if(angle<-14){ angle=-14; }
      if(_this.data.angle !== angle){
        _this.setData({
          angle: angle
        });
      }
    });
  },
  
  btn:function(e){ 
    var that=this
    wx.showLoading({
      title: '加载中',
      complete: (res) => {},
      fail: (res) => {},
      mask: true,
      success: (res) => {},
    })
    wx.request({
      url: 'https://lzsjl.top:5000/?name='+that.data.showvalue1,
      
      success(res){
        console.log(res)
       
      if(that.data.showvalue1!=''){
         if(res.statusCode==200){
           
            app.aData.Selectedfood=res.data
             console.log("dddddd",res)
            
          wx.navigateTo({
          url: '../foodshow/foodshow'
         })
         wx.hideLoading()
      }
      else{
        console.log("失败")
        wx.showToast({
          title: '该美食暂未收录',
          icon: '',
          image: '../image/baocuo.png',
          duration: 1000,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        that.cler()
      
      }
      }
      else{
        wx.showToast({
          title: '请输入食物名称',
          icon: '',
          image: '../image/baocuo.png',
          duration: 1000,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        
   
      }
     
   
      }
    })
  
  },
  inputone:function(e){
    console.log(e)
    this.setData({
      showvalue1:e.detail,
    
    })
    
  },
  cler:function(){
    this.setData({
      showvalue1:''
    })
  },
 
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    Toast('搜索' + this.data.value);
  },
  onClick() {
   
    wx.navigateTo({
      url: '../selem/selem'
    })
  },
  


  /**
   * 生命周期函数--监听页面加载
   */
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  

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