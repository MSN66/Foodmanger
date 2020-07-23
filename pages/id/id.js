// pages/id/id.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    Nickname:"昵称:",
    Sex:"性别:",
    Age:"年龄:",
    Tall:"身高:",
    Weight:"体重:"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({

      nickName:app.aData.nickName,
      sex:app.aData.sex,
      age:app.aData.age,
      tall:app.aData.tall,
      weight:app.aData.weight

     
    });
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