const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:app.globalData.list,
    banner:[
      {
        url:"https://cheese-ninja.oss-cn-shenzhen.aliyuncs.com/banner/1.png?x-oss-process=style/img-sm"
      }
    ],
    showLogin:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    setTimeout(() => {
      this.setData({
        showLogin:true
      })
    }, 200);
  },
  goUrl(e) {
    console.log(e)
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },
  swicthPage(e) {
    wx.switchTab({
      url: e.currentTarget.dataset.url,
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