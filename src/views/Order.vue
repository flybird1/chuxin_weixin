<template>
  <div class="Order-view">
    <y-header title="提交订单"></y-header>
    <div class="user-wrapper">
      <div class="headPortrait-wrapper">
        <img class="headPortrait" src="http://ogf0xbf8w.bkt.clouddn.com/demo5-02.png">
      </div>
      <div class="userNickname">良子</div>
    </div>
    <!-- <div class="orderDetail"> -->
    <group title="订单明细">
      <!--  <selector title="技能" :options="list" :value.sync="value2" class="iconfont icon-icStar"><i slot="icon" class="iconfont icon-icStar"></i>
      </selector> -->
      <cell title="技能"><i slot="icon" class="iconfont icon-icStar"></i>
        <!-- <selector :options="list" :value.sync="value2" class="iconfont icon-icStar">
        </selector> -->
      </cell>
      <cell title="技能" value="叫醒" link="/hello">
        <i slot="icon" class="iconfont icon-icStar"></i>
      </cell>
      <cell title="时间" value="今天15:10" link="/hello">
        <i slot="icon" class="iconfont icon-clock"></i>
      </cell>
      <cell title="次数" value="1次" link="/hello">
        <i slot="icon" class="iconfont icon-dingdan"></i>
      </cell>
      <cell title="费用" value="9000爱意" id='fee'>
        <i slot="icon" class="iconfont icon-iccharge"></i>
      </cell>
    </group>
    <!-- </div> -->
    <group title="支付方式">
      <cell title="账户爱意" value="9000爱意" id="acount" class="with_selected">
        <i slot="icon" class="iconfont icon-icheart"></i>
      </cell>
    </group>
    <div class="footer">立即支付</div>
  </div>
</template>
<script>
import Group from 'vux/dist/components/group'
import Cell from 'vux/dist/components/cell'
// import Selector from 'vux/dist/components/selector'
import YHeader from 'components/y-header'
export default {
  components: {
    Group,
    // Selector,
    Cell,
    YHeader
  },
  data() {
    return {
      list: [{
        key: 'wakeup',
        value: '叫醒'
      }, {
        key: 'gx',
        value: '打游戏'
      }],
      value2: 'wakeup',
    }
  },
  methods: {
    onChange(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss">
@import '~vux/dist/vux.css';
@import '../assets/scss/variables.scss';
@import '../assets/scss/common.scss';
.Order-view {
  * {
    font-size: 14px;
  }
  .iconfont {
    font-size: 17px;
    color: black;
  }
  .headPortrait-wrapper {
    width: 48px;
    margin: 0 auto;
    position: relative;
    .headPortrait {
      @include circle(48px);
    }
  }
  .weui_selectors_title {
    margin-top: 10px !important;
    margin-bottom: 0 !important;
    background-color: white;
    line-height: 30px;
  }
  .userNickname {
    text-align: center;
  }
  .user-wrapper {
    height: 90px;
    background-color: white;
  }
  .weui_cells_title {
    margin-top: 10px;
    margin-bottom: 0;
    background-color: white;
    line-height: 30px;
  }
  .weui_selector_ft.with_arrow {
    font-size: 12px;
    color: black;
  }
  .weui_selector_hd {
    img {
      width: 17px;
      display: block;
      margin-right: 5px;
    }
  }
  .iconfont:before {
    color: black;
    margin-right: 8px;
  }
  .weui_selector_bd.weui_selector_primary {
    p {
      color: $gray10;
    }
  }
  #fee .weui_selector_ft,
  #acount .weui_selector_ft {
    color: $red0;
  }
  .with_selected {
    .weui_selector_ft:after {
      @extend .sprite,
      .sprite_selected;
      content: "";
      vertical-align: middle;
    }
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .footer {
    color: $red0;
    height: 50px;
    text-align: center;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    width: 100vw;
    background-color: white;
    border-top: 1px solid #D0D5D7;
    font-size: 18px;
  }
  // .weui_cell:before {}
  // .weui_cell_hd {
  //   label {}
  // }
  // .weui_select {
  //   text-align: right;
  // }
  // select {
  //   align-items: right;
  // }
  // option {
  //   text-align: right;
  // }
  // .weui_cell_select .weui_cell_bd:after {
  //   height: 8px;
  //   width: 8px;
  //   border-width: 2px 2px 0 0;
  // }
  // .weui_cell{
  //   padding:0 15px;
  // }
  // .weui_cell_select .weui_select{
  //   padding-right: 0;
  // }
}
</style>
