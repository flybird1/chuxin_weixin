<template>
  <div>
    <swiper :list="demo03_list" auto height="110px" dots-class="custom-bottom" dots-position="center"></swiper>
    <flexbox class="section-1">
      <flexbox-item>
        <div class=" iconfont icon-label label-red ">新秀</div>
        <div class="wrapper"><img src="http://ogf0xbf8w.bkt.clouddn.com/demo2-02.png" class="circle">
          <div class="skillTag">技能标签</div>
        </div>
        <div class="userName">女神昵称</div>
      </flexbox-item>
      <flexbox-item>
        <div class=" iconfont icon-label label-orange ">热门</div>
        <div class="wrapper"><img src="http://ogf0xbf8w.bkt.clouddn.com/demo2-01.png" class="circle"></div>
        <div class="userName">女神昵称</div>
      </flexbox-item>
      <flexbox-item>
        <div class=" iconfont icon-label label-red ">新秀</div>
        <div class="wrapper"><img src="http://ogf0xbf8w.bkt.clouddn.com/demo2-01.png" class="circle"></div>
        <div class="userName">女神昵称</div>
      </flexbox-item>
      <flexbox-item>
        <div class="wrapper"><img src="http://ogf0xbf8w.bkt.clouddn.com/demo2-01.png" class="circle"></div>
        <div class="userName">女神昵称</div>
      </flexbox-item>
    </flexbox>
    <flexbox class="section-2">
      <flexbox-item>
        <div class=" iconfont icon-label label-red ">新秀</div>
        <div class="wrapper"><img class="square" src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png"></div>
      </flexbox-item>
      <flexbox-item>
        <div class="wrapper"><img class="square" src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png"></div>
      </flexbox-item>
    </flexbox>
    <flexbox class="section-3">
      <flexbox-item>
        <span class=" iconfont icon-label label-red ">新秀</span>
        <div class="wrapper"><img class="square" src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png"></div>
      </flexbox-item>
      <flexbox-item>
        <div class="wrapper"><img class="square" src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png"></div>
      </flexbox-item>
      <flexbox-item>
        <div class=" iconfont icon-label label-orange ">热门</div>
        <div class="wrapper"><img class="square" src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png"></div>
      </flexbox-item>
    </flexbox>
    <div class="moduleName">今日推荐</div>
    <flexbox class="section-4" :gutter="0" wrap="wrap">
      <flexbox-item :span="1/2">
        <div class=" iconfont icon-label label-red ">新秀</div>
        <div class="wrapper"><img class="square" src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png"></div>
      </flexbox-item>
      <flexbox-item :span="1/2">
        <div class=" iconfont icon-label label-red ">新秀</div>
        <div class="wrapper"><img class="square" src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png"></div>
      </flexbox-item>
      <flexbox-item :span="1/2">
        <div class=" iconfont icon-label label-red ">新秀</div>
        <div class="wrapper"><img class="square" src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png"></div>
      </flexbox-item>
      <flexbox-item :span="1/2">
        <div class=" iconfont icon-label label-red ">新秀</div>
        <div class="wrapper"><img class="square" src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png"></div>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import Swiper from 'vux/dist/components/swiper'
import Flexbox from 'vux/dist/components/flexbox'
import FlexboxItem from 'vux/dist/components/flexbox-item'

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
    Swiper,
    Flexbox,
    FlexboxItem
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
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
@import '../assets/scss/common.scss';
p.vux-swiper-desc {
  background: none !important;
}

.padding {
  padding: 0 15px;
}

.section-1 {
  .circle {
    width: 100%;
    border-radius: 100%;
  }
}

.skillTag {
  @extend .font-size-10;
  margin: -45% auto 0 auto;
  width: 60px;
  color: white;
  font-weight: 200;
  height: 1.6rem;
  line-height: 1.6rem;
  border-radius: 1.6rem;
  background-color: rgba(49, 49, 49, .5);
}

.icon-label {
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  width: 33px;
  // height: 
  font-size: 1rem;
  line-height: 1.6rem;
  overflow: hidden;
  padding-left: 2px;
  &:before {
    font-size: 16px;
    position: absolute;
    z-index: -1;
    left: -2px;
  }
  &.label-red:before {
    color: $red1;
  }
  &.label-orange:before {
    color: $orange;
  }
}

.section-1,
.section-2,
.section-4 {
  padding: 10px 15px;
  background-color: white;
  box-sizing: border-box;
}


.section-3 {
  padding: 0 15px 10px 15px;
  background-color: white;
  box-sizing: border-box;
  .square {
    width: 100%;
  }
}

.vux-flexbox-item {
  position: relative;
}

.wrapper {
  text-align: center;
  position: relative;
  @extend .img-responsive;
  img{
    width: 100%;
  }
}

.section-2 {
  margin-top: 13px;
  .square {
    width: 100%;
  }
}

.userName {
  font-size: 14px;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.moduleName {
  font-weight: bold;
  background-color: white;
  margin-top: 13px;
  padding: 10px 15px;
  font-size: 14px;
  line-height: 20px;
  &:before {
    content: '|';
    color: $red1;
    margin-right: 2px;
    font-size: 16px;
    line-height: 20px;
  }
}

.section-4 {
  margin-top: 1px;
}
</style>
