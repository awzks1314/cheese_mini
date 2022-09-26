// myPages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList:[],
    arraySession:['May 2022','Sep 2022'],
    sessionIndex:0,
    session:'',
    arrayScore:[1,2,3,4,5,6,7],
    scoreIndex:0,
    score:'',
    noteShow:false,
    categoryIndex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  changeType(e) {
    this.setData({
      categoryIndex:e.currentTarget.dataset.index
    })
  },
  openNote() {
    this.setData({
      noteShow:!this.data.noteShow
    })
  },
  close() {
    this.setData({
      noteShow:false
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