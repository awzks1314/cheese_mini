// app.js
let reque = require('utils/request.js')
App({
  axios: reque.axios,//请求
  toast: reque.toast,//消息提醒
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
    list:[
      {
        "pagePath": "/pages/community/community",
        "text": "Discovery",
        "iconPath": "/static/img/tabbarIcon/Discovery.png",
        "selectedIconPath": "/static/img/tabbarIcon/Discovery1.png"
      },
      {
        "pagePath": "/pages/material/material",
        "text": "Resource",
        "iconPath": "/static/img/tabbarIcon/find.png",
        "selectedIconPath": "/static/img/tabbarIcon/find1.png"
      },
      {
        text:"",
        iconPath:"/static/img/tabbarIcon/add.png",
        selectedIconPath:"/static/img/tabbarIcon/add.png",
        number:0,//角标
        pagePath:"/Pages/upload/upload"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "Notifications",
        "iconPath": "/static/img/tabbarIcon/Notifications.png",
        "selectedIconPath": "/static/img/tabbarIcon/Notifications1.png"
      },
      {
        "pagePath": "/pages/my/my",
        "text": "Profile",
        "iconPath": "/static/img/tabbarIcon/Profile.png",
        "selectedIconPath": "/static/img/tabbarIcon/Profile1.png"
      }
      
    ],
  }
})
// {
  //   "pagePath": "/pages/message/message",
  //   "text": "消息",
  //   "iconPath": "/static/img/tabbarIcon/t11.png",
  //   "selectedIconPath": "/static/img/tabbarIcon/t12.png"
  // },
