<template>
  <div>
    <loading :show="isLoading" position="absolute"></loading>
    <router-view
    :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"
    ></router-view>
    <toast :show.sync="showToast" type="{{msg.type}}">{{msg.content}}</toast>
  </div>
</template>

<script>
  import Loading from 'vux/dist/components/loading'
  import Toast from 'vux/dist/components/toast'
  import store from './vuex/store'
  import { showMsg,hideMsg } from './vuex/actions'
  
  export default {
    store,
    components: {
      Loading, Toast
    },
    data() {
      return {
        showToast: false
      }
    },
    vuex: {
      getters: {
        isLoading: ({loading}) => loading.isLoading,
        direction: ({loading}) => loading.direction,
        msg: ({showmsg}) => showmsg.message
      }
    },
    watch:{
      'msg':{
        handler: function (val, oldVal) {
          if(val.content !== ''){
            this.showToast = true 
          }
        },
        deep: true
      }
    },
  }
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import './assets/scss/variables.scss';
@import './assets/scss/iconfont.scss';
html, body {
  height: 100%;
  line-height: 1;
}
html{
  font-size: 62.5%;
}

body {
  background-color: $basic-gray;
}
.forward-enter, .forward-leave {
  transform: translate3d(-100%, 0, 0);
}
.back-enter, .back-leave {
  transform: translate3d(100%, 0, 0);
}

/**
* vue-router transition
*/
.vux-pop-out-transition,
.vux-pop-in-transition {
  width: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  backface-visibility: hidden;
}
.vux-pop-out-enter,
.vux-pop-out-leave,
.vux-pop-in-enter,
.vux-pop-in-leave {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0;
}
.vux-pop-out-enter {
  animation-name: popInLeft;
}
.vux-pop-out-leave {
  animation-name: popOutRight;
}
.vux-pop-in-enter {
  perspective: 1000;
  animation-name: popInRight;
}
.vux-pop-in-leave {
  animation-name: popOutLeft;
}
@keyframes popInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes popInRight {
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
