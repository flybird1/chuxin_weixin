<template>
  <div class="bg">
    <div class="login">
      <img class="logo" src="http://ogf0xbf8w.bkt.clouddn.com/logo.png">
      <div class="login-form">
        <span class="login-tip">已有账号请登录</span>
        <div class="login-input">
          <i class="iconfont icon-shoujihao"></i>
          <input type="number" placeholder="输入手机号" required/>
        </div>
        <div class="login-input">
          <i class="iconfont icon-mima"></i>
          <input type="password" placeholder="输入密码" required/>
        </div>
        <div class="btn-login">登录</div>
        <div class="weixin-wrapper">
          <div class="tip">微信快捷登录</div>
          <img src="http://ogf0xbf8w.bkt.clouddn.com/weixin.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  welcome
} from '../vuex/actions'

export default {
  ready() {},
    components: {

    },
    vuex: {
      actions: {}
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
@import '../assets/scss/common.scss';
.login {
  padding-top: 10vh;
  .logo {
    margin: 0 auto 10vh auto;
    display: block;
  }
}

.login-tip {
  color: $red0;
  @extend .font-size-14;
}

.iconfont {
  color: $gray0;
  font-size: 16px;
}

.login-form {
  margin: 0 auto;
  width: 73vw;
  %rectangle0 {
    margin: 15px auto;
    border-radius: 4px;
    line-height: 48px;
    box-sizing: border-box;
  }
  .login-input {
    @extend .font-size-14;
    @extend %rectangle0;
    background-color: $basic-gray;
    width: 100%;
    padding-left: 10px;
    input {
      background-color: inherit;
      border: none;
      line-height: 1;
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: $gray1;
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: $gray1;
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: $gray1;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: $gray1;
      }
    }
  }
  .btn-login {
    @extend %rectangle0;
    background-color: $gray2;
    text-align: center;
    color: white;
  }
  .weixin-wrapper {
    position: relative;
    border-top: 1px solid $gray3;
    text-align: center;
    margin-top: 10vh;
    .tip {
      position: absolute;
      top: -7px;
      box-sizing: content-box;
      padding: 0 15px;
      background-color: white;
      font-size: 14px;
      color: $gray3;
      line-height: 1;
      font-weight: 100;
      @extend .tran-center;
    }
    img {
      margin: 20px 0;
    }
  }
}

.bg {
  width: 100vw;
  height: 100vh;
  background-color: white;
}
</style>
