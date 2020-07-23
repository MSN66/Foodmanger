var list=[];
var jishi=[]
var app=getApp();
var consume=0
const addPreceedingZero = (t) => {
  return ('0' + Math.floor(t)).slice(-2);
}
Component({
  properties: {
    options: {
      type: Array,
      value: []
    },
    defaultOption: {
      type: Object,
      value: {
        id: '000',
        name: '走路',
        maleKeyKcal:0.04166,
        femakeyKacl:0.04161
      }
    },
    UdefaultOption: {
      type: Object,
      value: {
        id: '000',
        name: '分钟'
      }
    },
    key: {
      type: String,
      value: 'id'
    },
    text: {
      type: String,
      value: 'name'
    }
  },
  data: {
    isTiming: false,
    curren: 0,
    minutes: '00',
    seconds: '00',
    millseconds: '00',
    times: [],
    scrollTop:0,
    SportTime:null,
    count:0,
    timeCount:[],
    load:[],
    result: [
      {
        id: '000',
        name: '走路',
        maleKeyKcal:0.04166,
        femakeyKacl:0.04161
      },{
      id: '001',
      name: '慢跑',
      maleKeyKcal:0.11667,
      femakeyKacl:0.11661
    }, {
      id: '002',
      name: '快跑',
      maleKeyKcal:0.13333,
      femakeyKacl:0.13333
    },{
      id: '003',
      name: '走跑结合',
      maleKeyKcal:0.1,
      femakeyKacl:0.1
    },{
      id: '004',
      name: '篮球(一般)',
      maleKeyKcal:0.1,
      femakeyKacl:0.1
    }, {
      id: '005',
      name: '篮球(比赛)',
      maleKeyKcal:0.11667,
      femakeyKacl:0.11661
    },{
      id: '006',
      name: '羽毛球(一般)',
      maleKeyKcal:0.075,
      femakeyKacl:0.075
    },{
      id: '007',
      name: '羽毛球(比赛)',
      maleKeyKcal:0.11667,
      femakeyKacl:0.11661
    },
    {
      id: '008',
      name: '足球(一般)',
      maleKeyKcal:0.11667,
      femakeyKacl:0.11661
    },{
      id: '009',
      name: '足球(比赛)',
      maleKeyKcal:0.16667,
      femakeyKacl:0.16661
    },{
      id: '010',
      name: '跳绳(慢速)',
      maleKeyKcal:0.13333,
      femakeyKacl:0.13339
    },{
      id: '011',
      name: '跳绳(中速)',
      maleKeyKcal:0.16667,
      femakeyKacl:0.16661
    },{
      id: '012',
      name: '游泳',
      maleKeyKcal:0.16667,
      femakeyKacl:0.16661
    },{
      id: '013',
      name: '俯卧撑',
      maleKeyKcal:0.07475,
      femakeyKacl:0.075
    },{
      id: '014',
      name: '瑜伽',
      maleKeyKcal:0.06667,
      femakeyKacl:0.06661
    },
    {
      id: '015',
      name: '自行车',
      maleKeyKcal:0.06667,
      femakeyKacl:0.06661
    },],
    isShow: false,
    current: {}
  },
  Udata: {
    Uresult: [],
    unitShow: false,
    Ucurrent: {}
  },
  methods: {
    optionTap(e) {
      console.log(e);
      let dataset = e.target.dataset
      this.setData({
        current: dataset,
        isShow: false
      });

      // 调用父组件方法，并传参
      this.triggerEvent("change", { ...dataset })
    },
    startOrPauseTimer: function() {
      var that=this
      const {
        isTiming,
      } = that.data;
      if (isTiming) {
        that.pauseTimer();
      } else {
        that.startTimer();
      }
    },
  
    pauseTimer: function() {
      var that=this
      const {
        timer,
      } = that.data;
      clearInterval(timer);
      that.setData({
        isTiming: false,
      });
    },
  
  
    startTimer: function() {
      var that=this
      const start = +new Date();
      const previous = that.data.curren;
      console.log("nihao",previous)
      const timer =that.data.timer;
      if (timer) {
        clearInterval(timer);
      }
      const t = setInterval(() => {
        const curren = +new Date() - that.data.start + previous;
        console.log(curren)
        that.setData({
          curren: curren,
          minutes: addPreceedingZero(curren / 1000 / 60),
          seconds: addPreceedingZero(curren / 1000 % 60),
          millseconds: addPreceedingZero(curren % 1000 / 10),
        });
      }, 130);
  
      that.setData({
        start: start,
        timer: t,
        isTiming: true,
      });
    },
  
    resetTimerOrRecordTime: function() {
      var that=this
      const {
        isTiming,
      } = that.data;
      if (isTiming) {
        that.recordTime();
      } else {
        that.resetTimer();
      }
      ``
    },
  
    resetTimer: function() {
      var that=this
      const {
        start,
        timer,
      } = that.data;
      const end = +new Date();
      if (timer) {
        clearInterval(timer);
      }
      that.setData({
        isTiming: false,
        curren: 0,
        minutes: '00',
        seconds: '00',
        millseconds: '00',
        end: end,
        times: [],
      });
    },
  
    recordTime: function() {
      var that=this
      const {
        times,
        curren
      } = that.data;
      times.push({
        curren: curren,
        text: addPreceedingZero(curren / 1000 / 60) + ':' + addPreceedingZero(curren / 1000 % 60) + ':' + addPreceedingZero(curren % 1000 / 10),
      });
      jishi=times
      that.pauseTimer();
      that.setData({
        times: times
      });
    },
    UoptionTap(e) {
      console.log(e);
      let Udataset = e.target.dataset
      this.setData({
        Ucurrent: Udataset,
  
        unitShow:false
      });

      // 调用父组件方法，并传参
      this.triggerEvent("change", { ...Udataset })
    },
    openClose() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    unitOpenClose(){
      this.setData({
        unitShow: !this.data.unitShow
      })
    },
    // 此方法供父组件调用
    close() {
      this.setData({
        isShow: false
      })
    },
    Uclose() {
      this.setData({
        unitShow: false
      })
    },
    load(){
      var temp={};
      var heat=null
      var index=parseInt(this.data.current.id)
      console.log("sbbbbb",index)
      temp.oid=this.data.load.length+1;
      temp.Sport=this.data.current.name;
      temp.Count=this.data.count;
      temp.Unit=this.data.Ucurrent.name;
      //console.log(this.data)
      
      if(temp.Sport==null){
        wx.showToast({
          title: '请选择运动项目~',
          icon:'none'
        })
      }
      else if (temp.Count==0){
        wx.showToast({
          title: '请输入运动数据~',
          icon:'none'
        })
      }
      else{
        if(app.aData.sex=='男'){
          heat=(this.data.result[index].maleKeyKcal*app.aData.weight*temp.Count).toFixed(2)
        }
        else{
          console.log(this.data.result)
          heat=(this.data.result[index].femakeyKacl*app.aData.weight*temp.Count).toFixed(2)
        }
        temp.heat=heat
        consume += parseInt(heat)
        console.log(this.data.result[index].femakeyKacl)
        list.push(temp)
      }

      console.log(list); 
      this.data.count=0;
      var len=list.length
      this.setData({
        list:list,
        SportTime:null,
        scrollTop:1000*len
      })
     

    },
    writeToDB(){
      
      var minute=String(jishi[0].text)
      
      var cnt=(parseFloat(minute.split(":")[0])+parseFloat(minute.split(":")[1])/60).toFixed(2)
      console.log("计时时间",cnt)
      if(cnt>0){
        var index=parseInt(this.data.current.id)
        if(app.aData.sex=='男'){
          consume=(this.data.result[index].maleKeyKcal*app.aData.weight*cnt).toFixed(2)
        }
        else{
          console.log(this.data.result)
          consume=(this.data.result[index].femakeyKacl*app.aData.weight*cnt).toFixed(2)
        }
        console.log("计算热量",consume)
      }
      
      if(consume==0){
        wx.showToast({
          title: '请添加数据',
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
        //向数据库中对应的openid表插入数据，包括年-月-日
      //滚去写php
      var that=this
      console.log("consume",consume)
      var timestamp=Date.parse(new Date());
      var date=new Date(timestamp);
      var Y=date.getFullYear();
      var M=(date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1)
      var  D=date.getDate()<10?'0'+date.getDate():date.getDate();
      var da=Y+'-'+M+'-'+D;
      wx.request({
       url: 'https://kcal.applinzi.com/UpsetConsume.php?IN=' + consume+'&date='+da+'&openid='+app.aData.openid  ,
       
       data: {
       
       },
       header: {
         'content-type': 'application/json'
       },
       success: function (res) {
        wx.showToast({
          title: '提交成功',
          icon: '',
          image: '',
          duration: 1000,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
         //打印用户信息
         console.log("2",consume)
         console.log(res)
         app.aData.consumecal=res.data
       },
     
       
     })
      that.clear()
      }
      
    },
    getCount(e){
      console.log(parseInt(e.detail.value));
      this.data.count=parseInt(e.detail.value);
      this.data.timeCount.push(this.data.count);
     //console.log("huoqu",this.data.count)
    },
    clear(){
    list=[];
    consume=0;
    this.setData({
      list:[],
     load:[]
    })

    
    }

  },
  lifetimes: {
    attached() {
      // 属性名称转换, 如果不是 { id: '', name:'' } 格式，则转为 { id: '', name:'' } 格式
      let result = [{
        id: '000',
        name: '走路',
        maleKeyKcal:0.04166,
        femakeyKacl:0.04161
      },{
        id: '001',
        name: '慢跑',
        maleKeyKcal:0.11667,
        femakeyKacl:0.11661
      }, {
        id: '002',
        name: '快跑',
        maleKeyKcal:0.13333,
        femakeyKacl:0.13333
      },{
        id: '003',
        name: '走跑结合',
        maleKeyKcal:0.1,
        femakeyKacl:0.1
      },{
        id: '004',
        name: '篮球(一般)',
        maleKeyKcal:0.1,
        femakeyKacl:0.1
      }, {
        id: '005',
        name: '篮球(比赛)',
        maleKeyKcal:0.11667,
        femakeyKacl:0.11661
      },{
        id: '006',
        name: '羽毛球(一般)',
        maleKeyKcal:0.075,
        femakeyKacl:0.075
      },{
        id: '007',
        name: '羽毛球(比赛)',
        maleKeyKcal:0.11667,
        femakeyKacl:0.11661
      },
      {
        id: '008',
        name: '足球(一般)',
        maleKeyKcal:0.11667,
        femakeyKacl:0.11661
      },{
        id: '009',
        name: '足球(比赛)',
        maleKeyKcal:0.16667,
        femakeyKacl:0.16661
      },{
        id: '010',
        name: '跳绳(慢速)',
        maleKeyKcal:0.13333,
        femakeyKacl:0.13339
      },{
        id: '011',
        name: '跳绳(中速)',
        maleKeyKcal:0.16667,
        femakeyKacl:0.16661
      },{
        id: '012',
        name: '游泳',
        maleKeyKcal:0.16667,
        femakeyKacl:0.16661
      },{
        id: '013',
        name: '俯卧撑',
        maleKeyKcal:0.07475,
        femakeyKacl:0.075
      },{
        id: '014',
        name: '瑜伽',
        maleKeyKcal:0.06667,
        femakeyKacl:0.06661
      },
      {
        id: '015',
        name: '自行车',
        maleKeyKcal:0.06667,
        femakeyKacl:0.06661
      },]
  let Uresult = [{
    id: '002',
    name: 'KM'
  }, {
    id: '003',
    name: '个'
}]
      if (this.data.key !== 'id' || this.data.text !== 'name') {       
        for (let item of this.data.options) {
          let { [this.data.key]: id, [this.data.text]: name } = item
          result.push({ id, name })
        }
      }
      if (this.data.key !== 'id' || this.data.text !== 'name') {       
        for (let item of this.data.options) {
          let { [this.data.key]: id, [this.data.text]: name } = item
          Uresult.push({ id, name })
        }
      }
      this.setData({
        Ucurrent:Object.assign({}, this.data.UdefaultOption),
        current: Object.assign({}, this.data.defaultOption),
        result: result,
        Uresult:Uresult
      })
    }
  }
})