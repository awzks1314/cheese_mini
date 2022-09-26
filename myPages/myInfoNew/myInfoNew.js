// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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