// pages/personCenter/personCenter.js
var app = getApp();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseOpenData: false, // 如需尝试获取用户信息可改为false
    hasRenZheng: false,
    a1src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/personCenter/icon-collect-per-frame@2x.png',
    a2src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/personCenter/icon-like-frame@2x.png',
    a3src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/personCenter/icon-history-frame@2x.png',
    a4src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/personCenter/icon-personcenterpubilsh-frame@2x.png',
    a5src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/personCenter/icon-trade-frame@2x.png',
    a6src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/personCenter/icon-application-frame@2x.png',
    a7src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/personCenter/icon-leave-frame@2x.png',
    a8src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/personCenter/icon-morefunction-frame@2x.png',

    "class": [{
        title: "APP设计与制作",
        place: "1教401",
        time_1: "08:00",
        time_2: "09:30"
      },
      {
        title: "人工智能产品经理",
        place: "3实304",
        time_1: "09:45",
        time_2: "12:00"

      },
      {
        title: "大数据",
        place: "1教105",
        time_1: "14:30",
        time_2: "16:50"
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    this.openid = await app.getOpenid()
    if (await app.hasUserInfo()) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else return
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        this.onSaveUserInfo(res.userInfo)
      }
    })
  },
  // 保存userInfo到云数据库
  onSaveUserInfo: function (userInfo) {
    console.log(app.globalData.userInfo = userInfo)
    db.collection('user').where({
      _id: this.openid
    }).count().then(res => {
      if (res.total > 0) {
        //doc.update
        db.collection('user').doc(this.openid).update({
          data: {
            nickName: userInfo.nickName,
            avatarUrl: userInfo.avatarUrl
          }
        }).then(res => console.log(res))
      } else {
        //doc.add
        db.collection('user').add({
          data: {
            _id: this.openid,
            nickName: userInfo.nickName,
            avatarUrl: userInfo.avatarUrl
          }
        }).then(res => console.log(res))
      }
    })
  },

  /* 
  // 点击授权
  getUserInfo: function (e) {
    console.log(e.detail)   //userInfo登录人微信信息
    // 存储全局变量
    app.globalData.userInfo = e.detail.userInfo;   //存全局的账号信息
    if (app.globalData.userInfo) {
      wx.cloud.callFunction({
        name: 'getOpenid',
        complete: res => {
          if (res.result.data.length == 0) {
            
          }
        }
      })
    }
    this.setData({
      userInfo: e.detail.userInfo,
      isShow: false
    })
  },
  */

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