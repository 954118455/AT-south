// myservice/public/public.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuTapCurrent: 0,
    card_2: [{
      name: "中大南院文学与传媒学系团总支学生会"
    }, {
      name: "中大南方外文团学"
    }, {
      name: "中南继教院"
    }, {
      name: "政商研究院"
    }, {
      name: "中大南方健康与护理系"
    }, {
      name: "中大南方会｜计｜学｜院｜团学"
    }, {
      name: "电气与计算机工程XUEYUAN团委"
    }, {
      name: "中大南方音乐系团学"
    }, {
      name: "NFSYSU商"
    }, {
      name: "公共卫生与预防医学"
    }, {
      name: "中大南方艺创系"
    }, {
      name: "教务与科研部"
    }, {
      name: "中大南方文传系悬河辩论队"
    }, {
      name: "中大南方文学与传媒系"
    }],
    card_1: [{
      name: "南苑知新"
    }, {
      name: "中大南方学工部"
    }, {
      name: "中山大学南方学院团委"
    }, {
      name: "纵梦南苑"
    }, {
      name: "中山大学南方学院图书馆"
    }, {
      name: "中山大学南方学院"
    }, {
      name: "中山大学南方学院招生办公室"
    }, {
      name: "中大南方大学英语教学中心"
    }, {
      name: "中大南方普通话测试站"
    }, {
      name: "中大南方院学生会"
    }, {
      name: "南方之声"
    }, {
      name: "中大南方红会"
    }, {
      name: "南苑书舍"
    }, {
      name: "中大南院辩论队"
    }],
    card_3: [{
      name: "立领工作室"
    }, {
      name: "中大南方PC服务队"
    }, {
      name: "中大南方社团联合会"
    }, {
      name: "文传影视工作室"
    }, {
      name: "蓝鸟通讯社"
    }, {
      name: "中山大学南方学院学生记者团"
    }, {
      name: "中大南方学院网络一站式服务中心"
    }, {
      name: "中大南方就业指导中心"
    }, {
      name: "中大南方财务部"
    }, {
      name: "广东青年之声"
    }, {
      name: "流海云印"
    }, {
      name: "体适能"
    }, {
      name: "舍购"
    }, {
      name: "中大南方综合素养学部"
    }]
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