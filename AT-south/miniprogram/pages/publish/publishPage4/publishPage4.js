// miniprogram/pages/publish/publishPage4/publishPage4.js
var app = getApp();
const db = wx.cloud.database();
var util = require('../../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
     * 当textarea获取焦点时自适应高度，失去焦点时不自适应高度
     * 自适应高度时，style中的height无效
     */
    auto_height:true,

    min: 0,
    max: 300,

    content: '',
    imgList: [],
    fileIDs: [],

    showSelectModalStatus: false,   //选择弹窗显示控制
    ismoneyShow: false,    

    showModalStatus: false,   //输入弹窗显示控制
    title: '',
    inputValue: '',
    isclearShow: false,
    way: '',
    money: '',
    phone: '',
    weixin: ''
  },

  inputs: function (e) {
    var value = e.detail.value;
    var len = parseInt(value.length);
    if (len > this.data.max) 
      return;

    this.setData({
      currentWordNumber: len,
      content: value
    });
    if(this.data.currentWordNumber == 300){
      wx.showModal({
        title: '提示',
        content: '输入字数已达上限',
      })
    }
  },

  areablur: function() {
    this.setData({
      auto_height:false
    })
  },
  areafocus: function() {
    this.setData({
      auto_height: true
    })
  },

  ChooseImage() {
    wx.chooseImage({
      count: 9, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      content: '确定要删除这张照片吗？',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },

  //底部弹出框（选择）
  showModal: function () {
    // 背景遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    //this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      title: "请选择提问方式",
      showSelectModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //点击关闭图标，弹出框隐藏（选择）
  hideSelectModal: function () {
    //弹出框消失动画
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    //this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showSelectModalStatus: false
      })
    }.bind(this), 200)
  },
  /**
  * 获取选项值value
  */
  getoptionValue: function (e) {
    var that = this;
    var option = e.target.dataset.optionvalue;
    if (option=='免费') {
      that.setData({
        way: '免费',
        ismoneyShow: false,
        showSelectModalStatus: false
      })
    }
    if (option=='奖励') {
      that.setData({
        way: '奖励',
        ismoneyShow: true,
        showSelectModalStatus: false
      })
    }
  },

  //底部弹出框
  showModal1: function () {
    // 背景遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    //this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      title: "奖励金额",
      inputValue: '',
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //底部弹出框
  showModal2: function () {
    // 背景遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    //this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      title: "手机号码",
      inputValue: '',
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //底部弹出框
  showModal3: function () {
    // 背景遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    //this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      title: "微信",
      inputValue: '',
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },

  //点击关闭图标，弹出框隐藏
  hideModal: function () {
    //弹出框消失动画
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    //this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        isclearShow: false,
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  /**
  * 获取input输入值
  */
  getInput: function (e) {
    let that = this;
    let value = e.detail.value;
    if (value.length > 0 && !that.data.clearShow) {
      that.setData({
        isclearShow: true
      })
    } else if (value.length == 0) {
      that.setData({
        isclearShow: false
      })
    }
    this.setData({
      inputValue: value
    })
  },
  /**
   * 清除input输入值
   */
  cancel: function (e) {
    this.setData({
      isclearShow: false,
      inputValue: ''
    })
  },
  /**
  * 点击确定按钮获取input值并且关闭弹窗
  */
  ok: function () {
    //console.log(this.data.inputValue)
    if (this.data.inputValue != '') {
      if (this.data.title=='奖励金额') {
        this.setData({
          isclearShow: false,
          money: this.data.inputValue,
          showModalStatus: false
        })
      } 
      if (this.data.title=='手机号码') {
        this.setData({
          isclearShow: false,
          phone: this.data.inputValue,
          showModalStatus: false
        })
      }
      if (this.data.title=='微信') {
        this.setData({
          isclearShow: false,
          weixin: this.data.inputValue,
          showModalStatus: false
        })
      }
    } else {
      wx.showToast({
        title: '输入内容为空',
        icon: 'none',
        duration: 1500
      })
    }
  },

  /**
   * 发布
   */
  onsubmit: function () {
    if (!this.data.content) {
      wx.showToast({
        title: '请填写问题描述',
        icon: 'none'
      })
      return
    }
    wx.showLoading({
      title: '发布中...',
    })
    const promiseArr = []
    //只能一张张上传 遍历临时的图片数组
    for (let index = 0; index < this.data.imgList.length; index++) {
      //在每次上传的时候，就往promiseArr里存一个promise，只有当所有的都返回结果时，才可以继续往下执行
      promiseArr.push(new Promise((reslove, reject) => {
        wx.cloud.uploadFile({
          cloudPath: 'images/问答广场/' + new Date().getTime() + index + '.png',   //上传至云端的路径
          filePath: this.data.imgList[index],   //文件路径
        }).then(res => {
          // 返回文件 ID
          console.log("上传成功" + res.fileID)
          this.setData({
            fileIDs: this.data.fileIDs.concat(res.fileID)
          })
          reslove()
        }).catch(error => {
          console.log("上传失败", error)
        })
      }))
    }
    var Time = util.formatTime(new Date());
    this.setData({
      time: Time
    })
    //保证所有图片都上传成功
    Promise.all(promiseArr).then(res => {
      db.collection('question').add({
        data: {
          nickName: app.globalData.userInfo.nickName,
          avatarUrl: app.globalData.userInfo.avatarUrl,
          content: this.data.content,
          imgList: this.data.imgList,
          fileIDs: this.data.fileIDs,
          way: this.data.way,
          money: this.data.money,
          phone: this.data.phone,
          weixin: this.data.weixin,
          thumbsupNum: 0,
          commentNum: 0,
          collectNum: 0,
          time: Time,
          commentList: []
        },
        success: res => {
          wx.hideLoading()
          console.log('发布成功', res)
          wx.navigateTo({
            url: '../../unility/publishSeccess/publishSeccess',
          })
        },
        fail: err => {
          wx.hideLoading()
          wx.navigateTo({
            url: '../../unility/networkError/networkError',
          })
          console.error('发布失败', err)
        }
      })
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