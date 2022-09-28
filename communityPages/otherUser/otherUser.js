// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex:0,
    tableft:40,
    modal:false
  },
  goUrl(e) {
    console.log(e)
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },
  
  changeTab(e) {
    this.setData({
      tabIndex:e.currentTarget.dataset.index,
      tableft:e.currentTarget.dataset.index*167.5 + 40
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
  handlerGobackClick(delta) {
    const pages = getCurrentPages();
    if (pages.length >= 2) {
      wx.navigateBack({
        delta: delta
      });
    } else {
      wx.navigateTo({
        url: '/pages/home/home'
      });
    }
  },
  handlerGohomeClick() {
    wx.switchTab({
      url: '/pages/home/home'
    });
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