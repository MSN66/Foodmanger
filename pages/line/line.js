import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    title: {
   
      left: 'center'
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    legend: {
      data: ['A', 'B'],
      top: 20,
      left: 'center',
      backgroundColor: 'red',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: app.globalData.DateArray,
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: "A",
      type: 'line',
      smooth: true,
      data: app.globalData.IncalArray
    },  {
      name: 'B',
      type: 'line',
      smooth: true,
      data: app.globalData.ConcalArray
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      tiit: '摄入及消耗热量变化折线图',
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    flag:0,
    DateArray:[],
    IncalArray:[],
    ConcalArray:[],
    ec: {
      onInit: initChart
    }
  },
   
  onReady() {
    
  },
  predict:function(){
    var intakeAll=app.aData.totalIntake
    var intakePro=app.aData.totalPro
    var intakeFat=app.aData.totalFat
    var intakeCarbe=app.aData.totalCarbe
    var intakeCarbe2=app.aData.totalCarbe2
    var advice=""
    if(intakePro < intakeAll*0.15 ){
      advice="近期蛋白质摄入不足，有心脱毛、贫血、腹泻和浮肿等风险！"
    }
    else if(intakeFat > intakeAll*0.35){
      advice="近期脂肪摄入过量，有肥胖症风险！"
    }
    else if(intakeCarbe < intakeCarbe2){
      advice="近期蔬菜水果摄入不足，有缺乏维生素的风险！"
    }
    else {
      advice="最近饮食健康，请继续保持！"
    }
    console.log("advice:",advice)
    this.setData({
      advice:advice
    })
  },
  onLoad:function(){
    this.predict()
     this.setData({ DateArray:app.globalData.DateArray,
      IncalArray:app.globalData.IncalArray,
      ConcalArray:app.globalData.ConcalArray,
      flag:app.globalData.Pagelineflag
    })
     }
});
