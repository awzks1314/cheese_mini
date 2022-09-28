// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1,
    show_swiper_item:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  nextSwiper() {
    this.setData({
      show_swiper_item:true,
      
    }, () => {
      this.setData({
        current:1
      })
    })
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