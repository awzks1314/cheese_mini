// myPages/noticeDetail/noticeDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'commit',
    popupShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.type) {
      this.setData({
        type:options.type
      },() => {
        wx.setNavigationBarTitle({
          title: options.type == 'like'?'收到点赞':options.type == 'commit'?'我的评论':"系统通知",
        })
      })
    }
  },
  goUrl(e) {
    console.log(e)
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },
  openCommit() {
    this.setData({
      popupShow:true
    })
  },
  closeShow() {
    this.setData({
      popupShow:false
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