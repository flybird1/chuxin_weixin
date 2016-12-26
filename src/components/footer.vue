<template>
  <!--bottom slot-->
  <tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="!isTabbarDemo" slot="bottom">
    <tabbar-item v-link="{path:'/'}" :selected="route.path === '/'">
      <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon">&#xe637;</span>
      <span slot="label">Home</span>
    </tabbar-item>
    <tabbar-item v-link="{path:'/hello'}" :selected="route.path === '/hello'">
      <span class="demo-icon-22" slot="icon">&#xe633;</span>
      <span slot="label"><span v-if="componentName" class="vux-demo-tabbar-component">{{componentName}}</span><span v-else>Hello</span></span>
    </tabbar-item>
    <tabbar-item v-link="{path:'/project/donate'}" :selected="route.path === '/project/donate'">
      <span class="demo-icon-22" slot="icon">&#xe630;</span>
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
  import Tabbar from 'vux/dist/components/tabbar'
  import TabbarItem from 'vux/dist/components/tabbar-item'

  export default {
    components: {
      Tabbar,
      TabbarItem
    },
    vuex: {
      getters: {
        route: (state) => state.route
      }
    }
  }
</script>

<style>
  @import '~vux/dist/vux.css';
</style>