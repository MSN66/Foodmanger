
//app.js
//const clo = require('wx-server-sdk')
//clo.init()
const that=this
const runtime=require("utils/regenrator-runtime/runtime.js")

App({

  
  onLaunch: function () {
   
   //this.globalData.Daitotal=10
    // console.log("qu")
    // console.log(this.globalData.Daitotal)

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
    
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    })
    
  },
 
 
  globalData: {
   Pagelineflag:0,
   DateArray:['日期'],
    IncalArray:['摄入热量'],
    ConcalArray:['运动消耗热量'],
    userInfo: null,
    selectedfood:'',
    foodgram:'',
    foodcal:''
  },
  aData:{   
      selectedfood:'',
    foodgram:'',
    foodcal:'',
    consumecal:0,
    intakecal:0,
    DBweight:0,
    age:0,
    sex:'',
    tall:0,
    weight:0,
    openid:0,
    nickName:'',
    avatarUrl:'',
    BMR:0,
    DBM:0,
    BFR:0,
    BMI:0,
    intakePro:0,
    intakeFat:0,
    intakeCarbe:0,
    intakeAdvice:"",
    totalPro:0,
    totalFat:0,
    totalCarbe:0,
    totalIntake:0,
    totalCarbe2:0,
    HPHF:['高蛋白小酥鱼', '鸡蛋', '低脂鸡胸肉肠', '鸡胸肉丝', '低脂鸡胸肉', '低脂鸡胸肉', '低脂鸡肉丸', '高蛋白小酥鱼', '低脂鸡胸肉肠', '猪小排',  '鸭肉', '猪蹄', '螃蟹（河蟹）', '猪肉', '鸡蛋白', '火腿肠', '鸡胸脯肉', '荷包蛋', '咸鸭蛋', '猪肉(肥瘦)', '瓦罐鸡汤', '猪小排', '猪肉(奶脯)', '猪大排', '低脂鸡胸肉肠', '松花蛋(鸭蛋)', '低脂鸡蛋干', '低脂鸡蛋干', '低脂蛋清鸡肉饼', '低脂鸡胸肉肠', '草鱼', '鸡蛋(土鸡)', '鸡蛋（白皮）', '鸡蛋(红皮)', '鸡腿', '酱牛肉', '鱼丸', '香肠', '肯德基 吮指原味鸡', '鲫鱼', '火腿', '牛肉干', '咸鸭蛋（煮）', '鸡翅', '烤鸡', '热狗肠', '鹌鹑蛋', '鲤鱼', '明虾', '北京烤鸭', '鱼片干', '鸡爪', '鸡蛋黄', '无油煎蛋', '叉烧肉', '广东香肠', '肯德基 新奥尔良烤翅', '黄鱼(小黄花鱼)', '青鱼', '鸭蛋', '猪肉松', '猪肉(里脊)', '麦当劳 麦香鱼', '猪血', '虾仁（红）', '猪肉(肋条肉)', '虾皮', '羊肉串(烤)', '基围虾', '猪肝', '鸭胸脯肉', '虾虎', '羊肉(肥瘦)', '花蛤蜊', '墨鱼丸', '黄鱼(大黄花鱼)', '带鱼', '脆皮肠', '酱鸭', '河虾', '鸭翅', '培根（熏肉）', '麦当劳 麦乐鸡', '虾米', '麦当劳 香骨鸡腿', '麦当劳 麦辣鸡翅'],
    HPLF:['酸奶', '牛奶', '无糖全脂拿铁', '奶酪', '酸奶（中脂）', '脱脂奶粉', '酸奶（调味）', '酸奶(果料)', '酸奶（果粒）', '蒙牛 高钙牛奶', '脱脂牛奶', '光明 e+益生菌酸牛奶', '低脂牛奶', '早餐奶', '酸奶（高蛋白）', '奶片', '纯牛奶', '高品质鲜牛奶', '高品质脱脂鲜牛奶', '巴士杀菌调制乳', '全鲜乳', '鲜牛奶', '牛奶(强化VA，VD)', '低脂牛奶', '木糖醇酸牛奶', '低脂奶酪', '伊利无蔗糖酸牛奶', '蒙牛酸牛奶', '光明减脂90%脱脂鲜牛奶', '伊利优品嘉人优酪乳（原味）', '光明畅优红枣燕麦低脂酸奶', '光明芦荟酸奶', '伊利酸牛奶(原味)', '伊利大果粒酸牛奶（红茶+草莓+椰果）', '奶酪', '伊利优品嘉人优酪乳酸牛奶', '光明优＋高品质牛奶(利乐枕）', '牛奶', '蒙牛冠益乳特品酸牛奶（原味）', '蒙牛酸牛奶（草莓味）', '味全优酪乳（原味）', '蒙牛冠益乳特品酸牛奶木糖醇味', '伊利优品嘉人优酪乳', '伊利畅轻酸奶（黄桃果粒', '蒙牛酸牛奶（原味） ', '牛奶', '低脂芝士片', '君乐宝东方知味红枣酸牛奶', '伊利畅轻酸奶', '牛奶', , '光明无蔗糖酸奶', '奶酪', '光明畅优优酪乳酸牛奶', '伊利大果粒酸牛奶', '光明减脂90%鲜牛奶', '君乐宝高钙无蔗糖酸牛奶', '学生奶', '银桥益生菌酸牛奶', '伊利ABLS益生菌酸牛奶', '光明畅优B+100活性益生菌果粒酸牛奶', '伊利妙芝新鲜奶酪', '光明纯牛奶', '牛奶', '蒙牛缔芝特低脂早餐奶酪', '牛奶', '伊利早餐奶酪（高钙）', '味全优酪乳酸牛奶健康粗粮', '卡士鲜酪乳调味酸牛乳', '光明健能草莓果粒酸牛奶', '光明红枣酸奶', '蒙牛酸牛奶', '伊利益生菌酸牛奶', '蒙牛冠益乳冠菌优酪乳酸牛奶', '光明 90%低脂鲜牛奶', '伊利早餐奶酪', '光明汉方草本酸牛奶', '达能原味酸牛奶', '卡士鲜酪乳果味酸牛乳'],
    LPHF:['意式阿拉棒', '卡果冻', '卡醉冻', '轻优蛋白质豆乳雪糕', '轻优低脂香草味雪糕', '饼干', '蛋糕', '巧克力爆米花', '坚果巧克力豆', '巧克力咖啡豆', '冻干草莓巧克力', '松仁粽子糖', '巧克力', '冰淇淋', '红薯干', '培根汉堡', '绿豆饼', '苏打饼干', '麻花', '奶油蛋糕', '真之话梅', '月饼(豆沙)', '山楂果丹皮', '蛋糕', '沙琪玛蛋酥', '高蛋白夹心卷', '单层汉堡', '绿豆糕', '西式蛋糕', '山楂球', '德芙香浓黑巧克力', '夹心酥饼', '月饼(五仁)', '锅巴（豆香）', '锅巴（小米）', '薯片（烧烤味）', '冰棍', '板油酥饼', '巧克力(维夫)', '奶糖', '曲奇饼', '蛋糕（巧克力）', '奶油饼干', '酥皮糕点', '和路雪绿豆妹妹冰棍', '面包条（白）', '肯德基薯条', '爆米花', '桃酥', '时兴隆鱿鱼丝', '百乐宝 巧克力雪糕', '大雪糕', '饼干（苏打夹心）', '好丽友蛋黄派', '和路雪红豆冰棍 ', '牛奶糖', '太平 梳打饼干海苔口味', '鸡汁味干脆面', '蚕豆(炸)', '巧克力（黑）', '曲奇饼（加奶油）', '酥香兰花豆', '金色传奇鱿鱼丝', '麦当劳薯条', '雪米饼', '蛋糕（水果）', '酥糖', '水晶糖', '海苔', '麦当劳脆薯饼', '维维嚼益嚼', '达能佳钙牛奶甜酥饼干牛奶口味', '牛奶饼干', '果冻条', '旺旺雪饼', '薯片（香辣味）', '冰淇凌（脆皮甜筒）', '饼干（咸）', '月饼(枣泥)', '怡口莲', '阿胶蜜枣', '蜜麻花', '混糖糕点', '冰淇凌', '纤麸高纤消化饼', '韩国爆米花', '乐事薯片鲜浓番茄味', '月饼（奶油连芸）', '花生芝麻糖', '德芙榛仁巧克力'],
    LPLF:['苹果', '大白菜', '小白菜', '香蕉', '番茄', '黄瓜','低脂魔芋爽', '低脂魔芋爽（香辣味）', '西瓜', '桃子', '上海青', '红富士苹果', '橙子', '菜心', '西兰花', '柚子', '白萝卜', '梨', '花菜', '甘蓝', '冬枣', '猕猴桃', '南瓜', '胡萝卜', '生菜', '橘子', '木瓜', '葡萄', '圣女果', '冬瓜', '胡萝卜', '卷心菜', '红枣', '红枣', '竹笋', '荸荠', '木耳', '桔子', '菠菜', '菠萝', '火龙果', '草莓', '芒果', '豆芽', '香菇', '茄子', '哈密瓜', '甜瓜', '李子', '海带', '芹菜', '通心菜', '西柚', '鱼腥草', '木耳', '豌豆苗', '小葱', '土耳其杏干', '葡萄干', '青椒', '洋葱', '金针菇', '莲藕', '红提子葡萄', '海带', '荔枝', '生菜', '结球甘蓝', '樱桃', '豆芽', '苦瓜', '小叶桔', '豆角', '芹菜茎', '鹅黄梨', '丝瓜', '巨峰葡萄', '白兰瓜', '马奶子葡萄', '桑葚', '紫菜', '国光苹果', '四季豆', '莴笋', '蘑菇', '长把梨', '银耳', '枣','杏']
  },
  
  suggestion:function(){
    var stdHeat=this.aData.DBM
    var stdPro=stdHeat*0.15/4.0    //计算每日摄入PRO的标准（g）
    var stdFat=stdHeat*0.25/9.0    //计算每日摄入Fat的标准
    var stdCarbe=35            //每日纤维素摄入标准
    var intakePro=this.aData.intakePro
    var intakeFat=this.aData.intakeFat
    var intakeCarbe=this.aData.intakeCarbe
    var intakeHeat=this.aData.intakecal
    var HPHF=this.aData.HPHF
    var HPLF=this.aData.HPLF
    var LPHF=this.aData.LPHF
    var LPLF=this.aData.LPLF
    var advice=""
    console.log("appjs成功",intakePro)
    if(intakeHeat < stdHeat){
      if(intakePro < stdPro && intakeFat < stdFat && intakeCarbe < stdCarbe){
        advice="已摄入蛋白质"+this.aData.intakePro.toFixed(1)+"克,脂肪"+this.aData.intakeFat.toFixed(1)+"克,纤维素"+intakeCarbe.toFixed(1)+"克\n"
        +"还需蛋白质"+(stdPro-this.aData.intakePro).toFixed(1)+"克,脂肪"+(stdFat-this.aData.intakeFat).toFixed(1)+"克,纤维素"+(stdCarbe-intakeCarbe).toFixed(1)+"克\n"+"建议吃些"+HPHF[Math.floor(Math.floor(Math.random()*HPHF.length))]+"、"+LPLF[Math.floor(Math.random()*LPLF.length)]
      }
      else if(this.aData.intakePro >= stdPro && this.aData.intakeFat < stdFat && intakeCarbe < stdCarbe){
        advice="已摄入蛋白质"+this.aData.intakePro.toFixed(1)+"克,脂肪"+this.aData.intakeFat.toFixed(1)+"克,纤维素"+intakeCarbe.toFixed(1)+"克\n"
        +"还需脂肪"+(stdFat-this.aData.intakeFat).toFixed(1)+"克,纤维素"+(stdCarbe-intakeCarbe).toFixed(1)+"克\n"+"建议吃些"+LPHF[Math.floor(Math.random()*LPHF.length)]+"、"+LPLF[Math.floor(Math.random()*LPLF.length)]
      }
      else if(intakePro < stdPro && this.aData.intakeFat >= stdFat && intakeCarbe < stdCarbe){
        advice="已摄入蛋白质"+this.aData.intakePro.toFixed(1)+"克,脂肪"+this.aData.intakeFat.toFixed(1)+"克,纤维素"+intakeCarbe.toFixed(1)+"克\n"
        +"还需蛋白质"+(stdPro-intakePro).toFixed(1)+"克,纤维素"+(stdCarbe-intakeCarbe).toFixed(1)+"克\n"+"建议吃些"+HPLF[Math.floor(Math.random()*HPLF.length)]+"、"+LPLF[Math.floor(Math.random()*LPLF.length)]
      }
      else if(intakePro < stdPro && this.aData.intakeFat < stdFat && intakeCarbe >= stdCarbe){
        advice="已摄入蛋白质"+this.aData.intakePro.toFixed(1)+"克,脂肪"+this.aData.intakeFat.toFixed(1)+"克,纤维素"+intakeCarbe.toFixed(1)+"克\n"
        +"还需蛋白质"+(stdPro-intakePro).toFixed(1)+"克,脂肪"+(stdFat-this.aData.intakeFat).toFixed(1)+"克\n"+"建议吃些"+HPHF[Math.floor(Math.random()*HPHF.length)]
      }
      else if(intakePro >= stdPro && this.aData.intakeFat >= stdFat && intakeCarbe < stdCarbe){
        advice="已摄入蛋白质"+this.aData.intakePro.toFixed(1)+"克,脂肪"+this.aData.intakeFat.toFixed(1)+"克,纤维素"+intakeCarbe.toFixed(1)+"克\n"
        +"还需纤维素"+(stdCarbe-intakeCarbe).toFixed(1)+"克\n"+"建议吃些"+LPLF[Math.floor(Math.random()*LPLF.length)]
      }
      else if(intakePro >= stdPro && this.aData.intakeFat >= stdFat && intakeCarbe >= stdCarbe){
        advice="已摄入蛋白质"+this.aData.intakePro.toFixed(1)+"克,脂肪"+this.aData.intakeFat.toFixed(1)+"克,纤维素"+intakeCarbe.toFixed(1)+"克\n"+
        "建议吃些"+LPLF[Math.floor(Math.random()*LPLF.length)]
      }
      else if(intakePro < stdPro && this.aData.intakeFat >= stdFat && intakeCarbe >= stdCarbe){
        advice="已摄入蛋白质"+this.aData.intakePro.toFixed(1)+"克,脂肪"+this.aData.intakeFat.toFixed(1)+"克,纤维素"+intakeCarbe.toFixed(1)+"克\n"
        +"还需蛋白质"+(stdPro-intakePro).toFixed(1)+"克\n"+"建议吃些"+LPHF[Math.floor(Math.random()*LPHF.length)]
      }
      else if(intakePro >= stdPro && this.aData.intakeFat < stdFat && intakeCarbe >= stdCarbe){
        advice="已摄入蛋白质"+this.aData.intakePro.toFixed(1)+"克,脂肪"+this.aData.intakeFat.toFixed(1)+"克,纤维素"+intakeCarbe.toFixed(1)+"克\n"
        +"还需脂肪"+(stdFat-this.aData.intakeFat).toFixed(1)+"克\n"+"建议吃些"+HPHF[Math.floor(Math.random()*HPHF.length)]+"、"+LPHF[Math.floor(Math.random()*LPLF.length)]
      }
    }
    else{
      advice="今日摄入热量已达标准"
    }
    console.log("建议",advice)
    this.aData.intakeAdvice=advice     //建议传值
  }
})