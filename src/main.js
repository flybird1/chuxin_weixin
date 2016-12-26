'use strict'

import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import configRouter from './routers'

// plugins
import Device from './plugins/device'

// services
import './services/webim'
import './services/wechat'

// $device
Vue.use(Device)

/**
 * vue router
 */
Vue.use(Router)
const router = new Router({
  history: true,                    // 启用 HTML5 history 模式。利用 history.pushState() 和 history.replaceState() 来管理浏览历史记录。
  saveScrollPosition: true,         // 当用户点击后退按钮时，借助 HTML5 history 中的 popstate 事件对应的 state 来重置页面的滚动位置
  transitionOnLoad: false,          // 在初次加载时是否对 <router-view> 处理场景切换效果
  suppressTransitionError: true     // 当值为 true 时，在场景切换钩子函数中发生的异常会被吞掉。
})

configRouter(router)
router.start(App, '#app')
