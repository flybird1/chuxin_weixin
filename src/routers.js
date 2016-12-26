'use strict'

import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import { UPDATE_LOADING, UPDATE_DIRECTION } from './vuex/types'

import Home from './views//Home'
import Hello from './views/Hello'

export default (router) => {

  let history = window.sessionStorage
  history.clear()
  let historyCount = history.getItem('count') * 1 || 0
  history.setItem('/', 0)

  /**
  * sync router loading status
  */
  const commit = store.commit || store.dispatch
  router.beforeEach(({ to, from, next }) => {
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)
    if (toIndex) {
      if (toIndex > fromIndex) {
        commit(UPDATE_DIRECTION, 'forward')
      } else {
        commit(UPDATE_DIRECTION, 'reverse')
      }
    } else {
      ++historyCount
      history.setItem('count', historyCount)
      to.path !== '/' && history.setItem(to.path, historyCount)
      commit(UPDATE_DIRECTION, 'forward')
    }
    commit(UPDATE_LOADING, true)
    setTimeout(next, 50)
  })

  router.afterEach(() => {
    commit(UPDATE_LOADING, false)
  })

  sync(store, router)

  router.map({
    '/': {
      component: Home
    },
    '/hello': {
      component: Hello
    }
  })

  router.redirect({
    '*': '/'    // 重定向任意未匹配路径到 /
  })
}