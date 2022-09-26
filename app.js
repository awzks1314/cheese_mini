// app.js
App({
  onLaunch() {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;  
        this.globalData.sysInfo = e
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
  globalData: {
    StatusBar: null,
    CustomBar:null,
    Custom:null,
    sysInfo:null,//可视化窗口高度

  }
})
