// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuTapCurrent: 0,
    message: [{
      url: '',
      src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/二手闲置/avatar4.png',
      name: '余梦宣',
      text: '这件衣服会不会起球？',
      time: '5分钟前'
    }, {
      url: '',
      src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/二手闲置/avatar4.png',
      name: '夏力星',
      text: '好喔，同学那我们明天五点下课1教见面可...',
      time: '45分钟前'
    }, {
      url: '',
      src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/二手闲置/avatar4.png',
      name: '李磊',
      text: '好的，谢谢！',
      time: '10小时前'
    }, {
      url: '',
      src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/二手闲置/avatar4.png',
      name: '史小星',
      text: '嗯嗯嗯！',
      time: '2021.1.6'
    }, {
      url: '',
      src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/二手闲置/avatar4.png',
      name: '夏伟',
      text: '那就这么说定了。',
      time: '2021.1.2'
    }],
    inform: [{
      name: '李洪宇',
      methods: '赞了你的',
      content: '评论'
    }, {
      name: '李洪宇',
      methods: '赞了你的',
      content: '评论'
    }, {
      name: '李洪宇',
      methods: '赞了你的',
      content: '评论'
    }, {
      name: '李洪宇',
      methods: '赞了你的',
      content: '评论'
    }, {
      name: '李洪宇',
      methods: '赞了你的',
      content: '评论'
    }, {
      name: '李洪宇',
      methods: '赞了你的',
      content: '评论'
    }, {
      name: '李洪宇',
      methods: '赞了你的',
      content: '评论'
    }],

  },
  menuTap: function (e) {
    var current = e.currentTarget.dataset.current; //获取到绑定的数据
    //改变menuTapCurrent的值为当前选中的menu所绑定的数据
    this.setData({
      menuTapCurrent: current
    });
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