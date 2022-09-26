// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex:0,
    tableft:0,
    modal:false
  },
  goUrl(e) {
    console.log(e)
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },
  // 开始签到
  sign() {
    this.setData({
      modal:true
    })
  },
  changeTab(e) {
    this.setData({
      tabIndex:e.currentTarget.dataset.index,
      tableft:e.currentTarget.dataset.index*120
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
  toUrl(e) {
    let data = e.currentTarget.dataset
    wx.navigateTo({
      url: data.url,
    })
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