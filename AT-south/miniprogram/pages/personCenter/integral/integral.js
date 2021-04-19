// integral/integral.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    integral: [{
      name: '上传头像',
      text: '新用户上传头像'
    }, {
      name: '完善个人资料',
      text: '个人中心完善个人资料'
    }, {
      name: '完成身份验证',
      text: '个人中心完成身份验证'
    }, {
      name: '每日签到',
      text: '每日进行签到任务'
    }, {
      name: '点赞',
      text: '点赞5次内容'
    }, {
      name: '分享',
      text: '分享2次内容'
    }, {
      name: '发表评论',
      text: '发表2次评论'
    }, {
      name: '查看校园信息',
      text: '查看3个校园信息'
    }, {
      name: '发布二手消息',
      text: '发布1个二手内容'
    }, {
      name: '发布失物招领信息',
      text: '发布1个失物招领内容'
    }, {
      name: '发布知识辅导',
      text: '发布1个知识辅导内容'
    }]

  },
  tapOneDialogButton: function () {
    wx.showToast({
      title: '请先完成任务',
      icon: 'none',
      duration: 1500
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