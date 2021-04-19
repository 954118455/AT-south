// components/community-card/lose-found-card/lose-found-card.js
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
    isshow: true,
    loseFound_List: []
  },

  /**
   * 组件生命周期
   */
  lifetimes: {
    attached: function () {
      var _this = this;
      //查询数据  loseFound对应的是集合的名称   
      db.collection("loseFound").get({
        //如果查询成功的话    
        success: res => {
          console.log(res.data)
          //这一步很重要，给loseFound_List赋值，没有这一步的话，前台就不会显示值      
          _this.setData({
            loseFound_List: res.data
          })
        }
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tochat: function(e) {
      wx.navigateTo({
        url: '../../pages/community/chat/chat',
      })
    }
  }
})
