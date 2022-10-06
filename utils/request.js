//接口请求封装
let config = require('./config.js');
let app = getApp()
function request_fn(params) {
  wx.showNavigationBarLoading()
  const url = `${config.config.url}${params.url}`
  var header = {
    // 'content-type': 'application/x-www-form-urlencoded',
  }
  if (wx.getStorageSync('token')) {
    header["Authorization"] = wx.getStorageSync('token')
  }
  if (params.typesss == 'form') {
    header['content-type']= 'application/x-www-form-urlencoded'
  }
  if(params.method == 'PUT') {
    header['content-type']= 'application/x-www-form-urlencoded'
  }
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      method: params.method || "post",
      data: params.data || {},
      header: header,
      success: (res) => {
        if(res.data.msg  == 'success'){
          resolve(res)
        } else{
          
          wx.navigateTo({
            url: '/pages/login/login'
          })
          return
          // reject(res)
        }
      },
      fail: function (res) {  
        wx.showToast({
          title: '网络异常，请稍后再试！gdefail2',
          icon: 'none',
          duration: 2000,
          mask: true
        })
        // reject(res)
      },
      complete: function () {
        wx.hideLoading()
        wx.hideNavigationBarLoading()
      }
    })

  }).catch(res => {
    // reject(res)
  })
}
/* ajax防抖 */
var timeOut = null
function request(params) {
  let shake = params.shake || false // 是否防抖
  let shakeTime = params.shakeTime || 300 //默认防抖时间300毫秒
  if (shake) {
    return new Promise((resolve, reject) => {
      timeOut && clearTimeout(timeOut)
      /* 第一种防抖效果：防抖时间内只执行第一次 */
      let timer = !timeOut
      if (timer) {
          request_fn(params).then(res => {
              resolve(res)
          })
      }
      timeOut = setTimeout(() => {
          timeOut = null
      }, shakeTime)

      /* 第二种防抖效果：防抖时间内停止触发后执行 */
      // timeOut = setTimeout(() => {
      //   request_fn(params).then(res => {
      //     resolve(res)
      //   })
      // }, shakeTime)
    })
  } else {
    return new Promise((resolve, reject) => {
      request_fn(params).then(res => {
        resolve(res)
      })
    })
  }
}
// 消息提醒
function toast(text, duration, success) {
  wx.showToast({
    title: text,
    icon: success ? 'success' : 'none',
    mask:true,
    duration: duration || 1000
  })
}
function getUrl(){
  var pages = getCurrentPages()//获取加载的页面
  var currentPage = pages[pages.length - 1] //获取当前页面的对象
  var url = currentPage.route//当前页面的url

  var options = currentPage.options //获取url中的参数


  var urlWithAges = url + '?'
  for (var key in options){
    var value = options[key]
    urlWithAges += key+'='+value+'&'
  }
  urlWithAges = urlWithAges.substring(0,urlWithAges.length - 1)
  wx.setStorageSync('url', `/${urlWithAges}`)
}
module.exports = {
  axios: request,
  toast: toast,
  getUrl
}