// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:'每日任务',
        number:13,
        icon:'ziliao',
        url:'/myPages/task/task',
        sub:'赚芝士值兑换会员'
      },
      {
        name:'我的购买',
        icon:'biji',
        url:'/myPages/info/info',
        sub:'资料下载看这里'
      },
      {
        name:'个人设置',
        icon:'gengduo',
        url:'/myPages/info/info',
        sub:'资料下载看这里'
      }
    ],
    isSwiper:true,
    swiperHeight:300,
    col:4,
    row:2,
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