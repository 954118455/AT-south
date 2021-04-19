// components/message-comments/comments.js
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
    commentsCurrent: 0,
    comments_1: [{
      name: '邵家志',
      text: '哈哈哈哈哈，我也是！',
      time: '1小时前',
      src:  'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/message/avatar2.png',
    }, {
      name: '邱瑶',
      text: '好巧啊，我居然和你遇到过一样的事！！',
      time: '3小时前',
      src:  'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/message/avatar6.png',

    }, {
      name: '刘雅海',
      text: '对啊呜呜呜呜，东饭的口水鸡超级好吃，无比想念他家的口水鸡！！！',
      time: '1天前',
      src:  'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/message/avatar5.png',
  
    }, {
      name: '阎世瑶',
      text: '对啊，中饭那家烧腊的口水鸡，有点一言难尽。嗯，懂得都懂......',
      time: '1天前',
      src:  'cloud://zjxy-lusmb.7a6a-zjxy-lusmb-1302377032/images/message/avatar3.png',
    }],
    comments_2: [{
      time: '1小时前',
      text: '耶！！终于要放假了！'
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    comments: function (e) {
      var current = e.currentTarget.dataset.current; //获取到绑定的数据
      //改变menuTapCurrent的值为当前选中的menu所绑定的数据
      this.setData({
        commentsCurrent: current
      });
    },
  }
})
