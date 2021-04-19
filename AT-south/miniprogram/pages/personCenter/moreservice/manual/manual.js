// moreservice/manual/manual.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/personCenter/moreservice/icon-servicemanua-wenda@2x.png',
      id: '0',
      name: '常见问题篇',
      open: false,
      pages: ['宿舍用电指南', '怎么在网上选宿舍？', '宿舍有问题应该怎么进行保修？', '怎么定生活用水？', '电脑出现故障应该怎么维修？','饭卡丢了怎么办？']
    }, {
      src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/personCenter/moreservice/icon-servicemanua-traffic@2x.png',
      id: '1',
      name: '生活出行篇',
      open: false,
      pages: ['video-swiper', 'emoji', 'index-list', 'tabs', 'vtabs']
    }, {
      src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/personCenter/moreservice/icon-servicemanua-waimai@2x.png',
      id: '2',
      name: '吃货外卖篇',
      open: false,
      pages: ['video-swiper', 'emoji', 'index-list', 'tabs', 'vtabs']
    }, {
      src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/personCenter/moreservice/icon-servicemanua-accomodation@2x.png',
      id: '3',
      name: '公寓别墅篇',
      open: false,
      pages: ['video-swiper', 'emoji', 'index-list', 'tabs', 'vtabs']
    }, {
      src: 'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/personCenter/moreservice/icon-servicemanua-mall@2x.png',
      id: '4',
      name: '综合商店篇',
      open: false,
      pages: ['video-swiper', 'emoji', 'index-list', 'tabs', 'vtabs']
    }]


  },
  kindToggle: function (e) {
    var id = e.currentTarget.id,
      list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
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