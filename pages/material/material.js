const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:app.globalData.list,
    swiperList:[
      {id:0,type:'image',url:'https://cheese-ninja.oss-cn-shenzhen.aliyuncs.com/banner/12.png?x-oss-process=style/img-sm'},
      {id:1,type:'image',url:'https://cheese-ninja.oss-cn-shenzhen.aliyuncs.com/banner/16.png?x-oss-process=style/img-sm'},
      {id:2,type:'image',url:'https://cheese-ninja.oss-cn-shenzhen.aliyuncs.com/banner/14.png?x-oss-process=style/img-sm'},
      {id:3,type:'image',url:'https://cheese-ninja.oss-cn-shenzhen.aliyuncs.com/banner/15.png?x-oss-process=style/img-sm'}
    ],
    cardCur:0,
    currentTab:0,
    show:false,
    bottomShare:false,
    category:'IA',
    level:'HL',
    sessionIndex:0,
    seeionArray:['A','B','C'],
    AllCategory:['All','Books','Notes','Paper','Thesis','Thesis','Thesis']
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getAll()
  },
  getAll() {
    app.axios({
      url:'document/show',
      method:'get'
    }).then(res => {
      console.log(res)
    })
  },
  // 打开筛选
  openShow() {
    this.setData({
      show:true
    })
  },
  // 阻止筛选
  closeClose() {

  },
  openBottomShare(){
    this.setData({
      bottomShare:false
    })
  },
  close() {
    this.setData({
      bottomShare:false
    })
  },
  // 滑动轮播
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  swicthTab (e) {
    wx.switchTab({
      url: e.currentTarget.dataset.url
    })
  },
  toUrl(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },
  // 全部、书籍
  changeTab(e) {
    this.setData({
      currentTab:e.currentTarget.dataset.index
    })
  },
  detailPage(e) {
    wx.navigateTo({
      url: '/materialPages/bookDetail/bookDetail'
    })
  },
  // 切换category
  changeCategory(e) {
    this.setData({
      category:e.currentTarget.dataset.type
    })
  },
  // 切换level/seesion
  changeName(e) {
    this.setData({
      [e.currentTarget.dataset.name]:e.currentTarget.dataset.type ,
      [e.currentTarget.dataset.indexname]:e.currentTarget.dataset.index  
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})