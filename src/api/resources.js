import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'

/**
 * vue http config
 */
Vue.use(VueResource);
Vue.http.options.root = API_ROOT;
Vue.http.options.emulateJSON = true;
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

Vue.http.interceptors.push((request, next)=>{
  // 这里对请求体进行处理
  // request.headers = request.headers || {}
  // if (getCookie('token')) {
  //   request.headers.Authorization = 'Bearer ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
  // }
  next((response) => {
    // 这里可以对响应的结果进行处理
    if (response.status === 401) {
      // 登出
      // 路由跳转到登录页面
    }
  })
})

export const UserResource = Vue.resource(API_ROOT + 'users{/id}')
export const AuthResource = Vue.resource(API_ROOT + 'wechat/authorize')