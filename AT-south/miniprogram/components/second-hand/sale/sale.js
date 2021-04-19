// components/second-hand/sale/sale.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    /**
     * 当textarea获取焦点时自适应高度，失去焦点时不自适应高度
     * 自适应高度时，style中的height无效
     */
    auto_height: true,

    min: 0,
    max1: 16,
    max2: 300,

    tagState: 0,

    imgList: [],

    showModalStatus: false,   //弹窗显示控制
    title: '',
    inputValue: '',
    isclearShow: false,
    price: '0',
    phone: '选填',
    weixin: '选填'
  },

  /**
   * 组件的方法列表
   */
  methods: {

    inputs1: function (e) {
      var value = e.detail.value;
      var len = parseInt(value.length);
      if (len > this.data.max1)
        return;

      this.setData({
        currentWordNumber1: len
      });
      if (this.data.currentWordNumber1 == 16) {
        wx.showModal({
          title: '提示',
          content: '输入字数已达上限',
        })
      }
    },

    areablur: function () {
      this.setData({
        auto_height: false
      })
    },
    areafocus: function () {
      this.setData({
        auto_height: true
      })
    },

    inputs2: function (e) {
      var value = e.detail.value;
      var len = parseInt(value.length);
      if (len > this.data.max2)
        return;

      this.setData({
        currentWordNumber2: len
      });
      if (this.data.currentWordNumber2 == 300) {
        wx.showModal({
          title: '提示',
          content: '输入字数已达上限',
        })
      }
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

    selectTag: function (e) {
      let index = e.currentTarget.dataset.index;
      this.setData({
        tagState: index
      })
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
        title: "价格",
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
        if (this.data.title=='价格') {
          this.setData({
            isclearShow: false,
            price: this.data.inputValue,
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
    }

  }
})
