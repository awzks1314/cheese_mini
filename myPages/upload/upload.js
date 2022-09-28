var startPoint;
const min = 0; // 最小宽度 单位px
const max = 330; // 最大宽度  单位px
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList:[],
    arraySession:['May 2022','Sep 2022'],
    sessionIndex:0,
    session:'',
    noteShow:false,
    categoryIndex:0,

    buttonLeft: 0,
    progress: 0, // 进度条的宽度，这里的单位是px，所以在wxml文件中要改为rpx
    precent:0 // 这个是百分比
  },
  buttonStart: function (e) {
    startPoint = e.touches[0]
  },
  moveTo(e) {
    var endPoint = e.touches[e.touches.length - 1]
    var translateX = endPoint.clientX - startPoint.clientX
    startPoint = endPoint;
    var buttonLeft = this.data.buttonLeft + translateX;
    if (buttonLeft > max) {
      // 滑动位置大于进度条最大宽度的时候让它为最大宽度
      buttonLeft = max
    }
    if (buttonLeft < min) {
      // 滑动位置小于进度条最大宽度的时候让它为最小宽度
      buttonLeft = min
    }
    // console.log(buttonLeft,max)
    this.setData({
      buttonLeft: buttonLeft,
      progress: buttonLeft,
      precent:parseInt((buttonLeft/max)*100/14.28)
    })
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