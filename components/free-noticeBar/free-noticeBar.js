// components/module/free-noticeBar/free-noticeBar.js
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
Component({
  /**
   * 组件的属性列表 
   */
  properties: {
    // 初始化notice，判断是列表还是对象
    notice:{
      type:[Array,String],
      value:null,
      observer(val){
        this.onlo()
      }
    },
    isLeft:{
      type:Boolean,
      value:true
    },
    leftIcon:{
      type:String, 
      value:'notificationfill'
    },
    iconColor:{
      type:String,
      value:'#fff'
    },
    // 背景色
    backgroundColor:{
      type:String,
      value:'#436FC4'
    },
    // 动画,type == 1下有效
    animation:{
      type:Boolean,
      value:true
    },
    // 是否固定位置
    isFixed:{
      type:Boolean,
      value:false
    },
    // 是否有右图标
    isRight:{ 
      type:Boolean,
      value:false
    },
    //  
    // 竖向滚动还是横向滚动
    vertical:{
      type:Boolean,
      value:true
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    type:1,
    show:true
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭
    closeNotice(){
      this.setData({
        show:false
      })
    },
    onlo(){
      console.log(this.data.notice instanceof Array)
      if(this.data.notice instanceof Array){
        this.setData({
          type:2
        })
      }else{ 
        this.setData({
          type:1
        })
      }
    },
    details(e){
      if (!e.currentTarget.dataset.url) {
        return
      }
      if(e.currentTarget.dataset.type == 'tab'){
        wx.switchTab({
          url: e.currentTarget.dataset.url
        })
      }else{
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
      }
    }
  }
})
