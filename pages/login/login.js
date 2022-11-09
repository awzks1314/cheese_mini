const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow(){

  },
  
  //点此登陆，直接获取手机号，并判断是否是会员
  login() {
    wx.login({
      success: (res) => {
        app.axios({
          url:'api/user/login',
          data: {
            loginCode:res.code
          },
          method: 'post'
        }).then(result => {
          console.log(result)
        })
      },
    })
  },
  
})