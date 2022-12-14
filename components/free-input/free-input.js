
/*
  freeUi for MP-weixin  | by 搞文艺的猿 
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
  使用freeUi开发扩展与插件时，请注明基于freeUi开发
  
  （作者QQ：664423077 | 微信：creater8888）
*/
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 整个背景颜色
    bgColor:{
      type:String,
      value:'#fff'
    },
    value:{
      type:String,
      value:'' 
    },
    // 输入框样式
    inputStyle:{
      type:String,
      value:'0'
    },
    color:{
      type:String,
      value:''
    },
    // 最大字数
    max:{
      type:[String,Number],
      value:'18'
    },
    // 输入框背景颜色
    inputBg:{
      type:String,
      value:''
    },
    // 输入框圆角
    radius:{
      type:String,
      value:'8000rpx'
    },
    password:{
      type:Boolean,
      value:false
    },
    // text、number、idcard、digit
    type:{
      type:String,
      value:'text'
    },
    // 头部icon
    prefixIcon:{
      type:String,
      value:'search'
    },
    // 尾部icon
    suffixIcon:{
      type:String,
      value:''
    },
    // 输入框定位
    position:{
      type:String,
      value:''
    },
    // 键盘右下角文本
    // send、search、next、go、done
    confirmType:{
      type:String,
      value:'done'
    },
    // 提示词
    placeholder:{
      type:String,
      value:'请输入内容'
    },
    // 是否显示关闭按钮
    close:{
      type:Boolean, 
      value:false
    },
    // 是否自动聚焦
    focus:{
      type:Boolean, 
      value:false
    },
    // 是否禁用
    disabled:{
      type:Boolean,
      value:false
    },
    // 额外按钮
    extreaWord:{
      type:String,
      value:''
    },
    // 额外按钮颜色
    extreaColor:{
      type:String,
      value:'#436FC4'
    },
    height:{
      type:String,
      value:'100'
    },
    // 左右边距
    margin:{
      type:String,
      value:'0 30rpx'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 输入变化
    getInput(e){
      // console.log(e)
      this.setData({
        value:e.detail.value
      })
      
      this.triggerEvent("input", {
        value: e.detail.value.replace(/\s+/g,""),
        cursor:e.detail.cursor,
        keyCode:e.detail.keyCode
      })
    },
    // 聚焦输入框变化
    getFocus(e){
      this.data.value = e.detail.value
      this.setData({
        value:e.detail.value.replace(/\s+/g,"")
      })
      this.triggerEvent("focus", {
        value: e.detail.value.replace(/\s+/g,""),
        height:e.detail.height,
      })
    },
    // 失焦
    getBlur(e){
      this.data.value = e.detail.value
      this.setData({
        value:e.detail.value.replace(/\s+/g,"")
      })
      this.triggerEvent("blur", {
        value: e.detail.value.replace(/\s+/g,"")
      },{})
    },
    // 聚焦输入框变化
    getConfirm(e){
      this.data.value = e.detail.value
      this.setData({
        value:e.detail.value.replace(/\s+/g,"")
      })
      this.triggerEvent("confirm", {
        value: e.detail.value.replace(/\s+/g,"")
      })
    },
    // 额外按钮
    extreaBtn(){
      this.triggerEvent("confirm", {
        value: this.data.value.replace(/\s+/g,"")
      },{})
    },
    // 关闭
    close(){
      this.setData({
        value:''
      })
      this.triggerEvent("close", {
        value: ''
      })
    }
  }
})
