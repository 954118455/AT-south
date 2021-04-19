// pages/home/home.js
const app = getApp();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    banner_List: []
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
  
  //点击筛选
  toFilterPage: function(e) {
    var that = this;
    var filterId = e.currentTarget.dataset.filterid;
    //console.log('filterId:' + filterId);
    if (filterId==0) {
      wx.navigateTo({
        url: '../../pages/home/information-filter/information-filter'
      }) 
    } else {
      wx.navigateTo({
        url: '../../pages/home/question-filter/question-filter'
      }) 
    }    
  },

  gotop: function(e) {
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  },
  
  /**
   * 监听页面滚动
   */
  onPageScroll:function(e){
    //console.log(e.scrollTop);
    this.setData({
        scrollTop: e.scrollTop
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    let that = this
    wx.getSystemInfo({
      success: (result) => {
        console.log(result.windowHeight)
        let navHeight = result.windowHeight
        that.setData({
          navHeight: navHeight*2
        })
      }
    })
    var _this = this;
    //查询数据  banner对应的是集合的名称   
    db.collection("banner").get({
      //如果查询成功的话    
      success: res => {
        console.log(res.data)
        //这一步很重要，给banner_List赋值，没有这一步的话，前台就不会显示值      
        _this.setData({
          banner_List: res.data
        })
      }
    })
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