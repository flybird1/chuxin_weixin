'use strict'
// import wx from "jweixin-1.1.0.js"

export default {
  mounted: function() {
    this.$nextTick(function() {
      // code that assumes this.$el is in-document
      wx.ready(() => {
        fun();
      })
    })
  }
}
