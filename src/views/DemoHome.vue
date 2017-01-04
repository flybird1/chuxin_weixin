<template>
  <div>
    <swiper :list="demo03_list" auto height="110px" dots-class="custom-bottom" dots-position="center"></swiper>
  </div>
</template>
<script>
import Swiper from 'vux/dist/components/swiper'
// import Swiper-  from 'vux/dist/components/swiper'

const baseList = [{
  url: 'javascript:',
  img: 'http://ogf0xbf8w.bkt.clouddn.com/demo1-01.png'
}, {
  url: 'javascript:',
  img: 'http://ogf0xbf8w.bkt.clouddn.com/demo1-01.png'
}, {
  url: 'javascript:',
  img: 'http://ogf0xbf8w.bkt.clouddn.com/demo1-01.png'
}]

export default {
  components: {
    Swiper
  },
  ready() {},
  methods: {
    
  },
  data() {
    return {
      demo03_list: baseList
    }
  }
}
</script>
<style lang='scss'>
p.vux-swiper-desc {
    background: none !important;
}
</style>
