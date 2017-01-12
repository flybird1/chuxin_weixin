'use strict'

import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import configRouter from './routers'

// plugins
import Device from './plugins/device'

// services
// import './services/webim'
import './services/wechat'

// $device
Vue.use(Device)

/**
 * vue router
 */
Vue.use(Router)
const router = new Router({
  el: '#app',
  router: router,
  // template: '<router-view></router-view>'
  mode: 'history', // 启用 HTML5 history 模式。利用 history.pushState() 和 history.replaceState() 来管理浏览历史记录。
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  } // 当用户点击后退按钮时，借助 HTML5 history 中的 popstate 事件对应的 state 来重置页面的滚动位置
})

configRouter(router)
