// pages/community/community.js
const app = getApp();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
  },

  //监听滑块
  swiperChange: function (e) {
    //console.log(e.detail.current);
    this.setData({
      currentTab: e.detail.current,
    })
  },
  //点击导航
  swichNav: function (e) {
    //console.log(e.target.dataset.current);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    let navHeight = wx.getSystemInfoSync().windowHeight
    this.setData({
      navHeight: navHeight*2
    })
    this.openid = await app.getOpenid()
    if (await app.hasUserInfo()) { } else return
    this.setData({
      navHeight:app.globalData.navHeight,
    })
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