'use strict'
// import wx from "jweixin-1.1.0.js"

export default {
  ready(fun) {
    wx.ready(() => {
      fun();
    })
  }
}