// pages/publish/publish.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: [
      {
        gotoPage:"gotoPage1",
        img:"https://7a6a-zjxy-lusmb-1302377032.tcb.qcloud.la/images/publish/icon_fabu_new_1.png",
        title:"二手闲置",
        text:"二手闲置"
      },
      {
        gotoPage:"gotoPage2",
        img:"https://7a6a-zjxy-lusmb-1302377032.tcb.qcloud.la/images/publish/icon_fabu_new_2.png",
        title:"失物招领",
        text:"失物招领"
      },
      {
        gotoPage:"gotoPage3",
        img:"https://7a6a-zjxy-lusmb-1302377032.tcb.qcloud.la/images/publish/icon_fabu_new_3.png",
        title:"知识辅导",
        text:"知识辅导"
      },
      {
        gotoPage:"gotoPage4",
        img:"https://7a6a-zjxy-lusmb-1302377032.tcb.qcloud.la/images/publish/icon_fabu_new_4.png",
        title:"问答广场",
        text:"问答广场"
      }
    ]
  },

  gotoPage1: function() { wx.navigateTo ({ url: "/pages/publish/publishPage1/publishPage1", }) },
  gotoPage2: function() { wx.navigateTo ({ url: "/pages/publish/publishPage2/publishPage2", }) },
  gotoPage3: function() { wx.navigateTo ({ url: "/pages/publish/publishPage3/publishPage3", }) },
  gotoPage4: function() { wx.navigateTo ({ url: "/pages/publish/publishPage4/publishPage4", }) }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    this.openid = await app.getOpenid()
    if (await app.hasUserInfo()) { } else return
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
    this.setData({
      navHeight:app.globalData.navHeight,
    })
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