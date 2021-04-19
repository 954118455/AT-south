// miniprogram/pages/community/chat/chat.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},   //自己的数据
    with_info: {}, //关系数据
    msgList: [],
    toolbarBottom: 0,
    emojiStatus: false,
    emojiShow: false,
    emojiList: [
      {
			  name: '[微笑]',
			  imgSrc: '../../../images/emoji/emoji1.png'
      },
      {
			  name: '[大哭]',
			  imgSrc: '../../../images/emoji/emoji2.png'
      },
      {
			  name: '[开心]',
			  imgSrc: '../../../images/emoji/emoji3.png'
      },
      {
			  name: '[可爱]',
			  imgSrc: '../../../images/emoji/emoji4.png'
      },
      {
			  name: '[面无表情]',
			  imgSrc: '../../../images/emoji/emoji5.png'
      },
      {
			  name: '[难过]',
			  imgSrc: '../../../images/emoji/emoji6.png'
      }
    ],
    inputValue: '',
    addShow: false,
    addStatus: false,
    sendStatus: false,
    
  },

  emoji: function(e) {
    this.setData({
      addStatus: false,
      addShow: false,
      emojiStatus: true,
      emojiShow: true,
      toolbarBottom: 200,
    })
  },

  send: function(e) {
    this.setData({
      
    })
  },

  add: function(e) {
    this.setData({
      emojiStatus: false,
      emojiShow: false,
      addStatus: true,
      addShow: true,
      toolbarBottom: 96,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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