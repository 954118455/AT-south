// components/community-card/tutor-card/tutor-card.js
const db = wx.cloud.database();
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
    tutor_List: []
  },

  /**
   * 组件生命周期
   */
  lifetimes: {
    attached: function () {
      var _this = this;
      //查询数据  tutor对应的是集合的名称   
      db.collection("tutor").orderBy('time', 'desc').get({
        //如果查询成功的话    
        success: res => {
          console.log(res.data)
          //这一步很重要，给tutor_List赋值，没有这一步的话，前台就不会显示值      
          _this.setData({
            tutor_List: res.data
          })
        }
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 预览图片
    previewImg: function(e) {
      let imgData = e.currentTarget.dataset.img;
      wx.previewImage({
        //当前显示图片
        current: imgData[0],
        //所有图片
        urls: imgData[1]
      })
    },
  }
})
