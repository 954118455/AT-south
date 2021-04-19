// miniprogram/pages/message/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    set_1:[{
      title:'一键已读'
    },{
      title:'清除全部消息'
    }]

  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  
  switch1Change: function (e) {
    console.log(e.detail.value);
    wx.setStorageSync('switch1Change', e.detail.value);
  },
  switch2Change: function (e) {
    console.log(e.detail.value);
    wx.setStorageSync('switch2Change', e.detail.value);
  },
  switch3Change: function (e) {
    console.log(e.detail.value);
    wx.setStorageSync('switch3Change', e.detail.value);
  },
  switch4Change: function (e) {
    console.log(e.detail.value);
    wx.setStorageSync('switch4Change', e.detail.value);
  },
  onLoad: function (options) {
    this.setData({
      switch1Checked: wx.getStorageSync('switch1Change')
    }),
    this.setData({
      switch2Checked: wx.getStorageSync('switch2Change')
    }),
    this.setData({
      switch3Checked: wx.getStorageSync('switch3Change')
    }),
    this.setData({
      switch4Checked: wx.getStorageSync('switch4Change')
    })
    
  },
  navigateTo: function(e) {
    wx.navigateBack({
      delta: 0,
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

