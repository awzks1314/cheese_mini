// pages/material/material.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[
      {id:0,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84003.jpg'},
      {id:1,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84004.jpg'},
      {id:2,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84005.jpg'},
      {id:3,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84006.jpg'},
      {id:4,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84007.jpg'},
      {id:5,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84008.jpg'}
    ],
    cardCur:0,
    currentTab:0,
    show:false,
    bottomShare:false
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  // 打开筛选
  openShow() {
    this.setData({
      show:true
    })
  },
  openBottomShare(){
    this.setData({
      bottomShare:true
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