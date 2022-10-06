const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex:0,
    tableft:40,
    modal:false,
    swiperHeight:'300px',
    background:'rgba(0,0,0,0)',
    color:'#fff',
    isFixed:false,
    top:0,
    gyyTop:0,
    cheeseShow:false,//芝士弹窗
    bottomShare:false,//更多
    uploadList:[],
    current:0,
    infoShow:false,//个人资料
  },
  onPageScroll(e) {
    let opciaty = e.scrollTop / 130;
    if (e.scrollTop >= this.data.gyyHeight) {
      this.setData({
        isFixed:true,
        top:this.data.gyyTop
      })
    }else {
      this.setData({
        isFixed:false,
        top:0
      })
    }
    if (opciaty >= 1) {
      opciaty = 1;
      this.setData({ 
        background: `rgba(255,255,255)` ,
        color:"#436FC4"
      });
    } else if (opciaty <= 0) {
      opciaty = 0;
      this.setData({ background: `rgba(0,0,0,${opciaty})` 
      ,
      color:"#fff"});
    }
    
  },
  onLoad() {
    // this.getSwiperHeight(this,'.swiper-item9')
    this.getTopHeight()
  },
  // 上传、个人、收藏、下载
  changeTab(e) {
    this.setData({
      tabIndex:e.currentTarget.dataset.index,
      tableft:e.currentTarget.dataset.index*167.5 + 40,
      current:e.currentTarget.dataset.index
    },() => {
      this.getSwiperHeight(this,'.swiper-item'+e.currentTarget.dataset.index +'4')
    })
  },
  // 滑动
  changeSwiper(e) {
    this.setData({
      current:e.detail.current,
      tabIndex:e.detail.current,
      tableft:e.detail.current*167.5 + 40
    },() => {
      this.getSwiperHeight(this,'.swiper-item'+e.detail.current +'4')
    })
  },
  // 开始签到
  sign() {
    this.setData({
      modal:true
    })
  },
  // 打开cheese
  openCheese() {
    this.setData({
      cheeseShow:true
    })
  },
  close() {
    this.setData({
      cheeseShow:false
    })
  },
  // 打开资料更多
  openBottomShare(){
    this.setData({
      bottomShare:true
    })
  },
  closeBottomShare() {
    this.setData({
      bottomShare:false
    })
  },
  // 阻止个人信息
  closeClose() {

  },
  toUrl(e) {
    let data = e.currentTarget.dataset
    wx.navigateTo({
      url: data.url,
    })
  },
  getSwiperHeight(p, element){
    //创建节点选择器
    let query = wx.createSelectorQuery();
    //选择id
    let that = p;
    query.select(element).boundingClientRect(
      function (e) {
        console.log(e);
        that.setData({
          swiperHeight: (e.height + 40 )*5+ 'px'
        })
      }).exec();
  },
  getTopHeight() {
    //创建节点选择器
    let query = wx.createSelectorQuery();
    let that = this
    query.select('.gyy').boundingClientRect(
      function (s) {
        that.setData({
          gyyHeight: s.top - app.globalData.CustomBar,
          gyyTop:app.globalData.CustomBar
        })
      }).exec();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return{
      title:'芝士忍者'
    }
  }
})