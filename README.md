# chuxin_wx

> chuxin_wx

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 配置说明
- config/index.js dev.proxyTable 配置本地开发时所需的接口前缀代理
- config/index.js dev.port 本地开发监听端口 9300
- 首页地址http://localhost:9300

## 代码规范
- 项目已引用 [vux](https://github.com/airyland/vux)组件库，可参考[vux demo](https://vux.li/#!/)使用, 样式基于[weui](https://github.com/weui/weui)；
- src/vuex/store.js为状态仓库，参见[vuex](https://github.com/vuejs/vuex) & [doc](http://vuex.vuejs.org/zh-cn/index.html) & [jackblog-vue](https://github.com/jackhutu/jackblog-vue)
- 公有样式写在src/assets/scss下，使用scss语法；
- 可重用组件写在src/components目录下；
- 插件写在src/plugins目录下，参考device;
- 项目需引用第三方api时（如WeChat、qiniu），需在src/services写成service供其他地方调用；
- 所有页面写在src/views下，以demo.vue为参考（复制demo.vue并修改即可），注意按模块创建文件夹。
- src/App.vue
- src/index.html
- src/main.js 
- src/routers.js
- src/config.js
