const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:app.globalData.list,
    time:0,
    animation:true,
    bgColor:'#f1f1f1', 
    color:"#919293",
    close:false,
    list:[
      {name:'今日热门'},
      {name:'随机推荐'}
    ], 
    currentTab:0,
    swiperList:[
      {id:0,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84003.jpg'},
      {id:1,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84004.jpg'},
      {id:2,type:'image',url:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84005.jpg'}
    ],
    cardCur:0,
    tabCurrentTab:0,
    tabTab:0,//树洞、申请、补习
    commitShow:false,//评论
    AllCategory:['全部','树洞','帮助','其他'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 打开评论
  openCommit() {
    this.setData({
      commitShow:!this.data.commitShow
    })
  },
  // 关闭评论
  closeCommit() {
    this.setData({
      commitShow:!this.data.commitShow
    })
  },
  change(e) {
    console.log(e)
    this.setData({
      currentTab:e.detail.index
    })
  },
  changeTab(e) {
    this.setData({
      [e.currentTarget.dataset.name]:e.currentTarget.dataset.index
    })
  },
  goUrl(e) {
    console.log(e)
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
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