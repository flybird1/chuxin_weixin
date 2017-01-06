<template>
  <div>
    <!--  <x-header class="skillListTitle" :left-options="{showBack: false}">技能</x-header> -->
    <div class="iconfont icon-BackArrow"></div>
    <div class="GoddessInfo-box" style="background-image: url('http://ogf0xbf8w.bkt.clouddn.com/demo5-01.png')">
      <div class="mask">
        <div class="headPortrait-wrapper">
          <img class="headPortrait" src="http://ogf0xbf8w.bkt.clouddn.com/demo5-02.png">
          <div class="v">v</div>
        </div>
        <h1>良子</h1>
        <h2>清华大学</h2>
        <div><span class="sex">女&nbsp;21</span><span class="constellation">处女座</span></div>
        <div class="signature">就是现在！我的支付宝123456</div>
        <div class="iconfont icon-icStar">4.9</div>
      </div>
    </div>
    <div class="header">
      <div class="title">技能</div>
    </div>
    <div class="box-list">
      <div class="item-skill">
        <div class="coverImg-wrapper">
          <div class="wrapper">
            <img src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png">
          </div>
        </div>
        <div class="skillInfo">
          <div class="flex-box">
            <div class="name"><img class="icon" src="http://ogf0xbf8w.bkt.clouddn.com/icClock.png">叫醒</div>
            <span class="iconfont icon-liulanrenshu">12人</span>
          </div>
          <div class="skillDescription">一起互相监督</div>
          <div class="fee-box"><span class="skillFee">300</span>爱意/<span class="unit">次</span></div>
        </div>
      </div>
      <div class="item-skill">
        <div class="coverImg-wrapper">
          <div class="wrapper">
            <img src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png">
          </div>
        </div>
        <div class="skillInfo">
          <div class="flex-box">
            <div class="name"><img class="icon" src="http://ogf0xbf8w.bkt.clouddn.com/icClock.png">叫醒</div>
            <span class="iconfont icon-liulanrenshu">12人</span>
          </div>
          <div class="skillDescription">一起互相监督</div>
          <div class="fee-box"><span class="skillFee">300</span>爱意/<span class="unit">次</span></div>
        </div>
      </div>
      <div class="item-skill">
        <div class="coverImg-wrapper">
          <div class="wrapper">
            <img src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png">
          </div>
        </div>
        <div class="skillInfo">
          <div class="flex-box">
            <div class="name"><img class="icon" src="http://ogf0xbf8w.bkt.clouddn.com/icClock.png">叫醒</div>
            <span class="iconfont icon-liulanrenshu">12人</span>
          </div>
          <div class="skillDescription">一起互相监督</div>
          <div class="fee-box"><span class="skillFee">300</span>爱意/<span class="unit">次</span></div>
        </div>
      </div>
      <div class="item-skill">
        <div class="coverImg-wrapper">
          <div class="wrapper">
            <img src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png">
          </div>
        </div>
        <div class="skillInfo">
          <div class="flex-box">
            <div class="name"><img class="icon" src="http://ogf0xbf8w.bkt.clouddn.com/icClock.png">叫醒</div>
            <span class="iconfont icon-liulanrenshu">12人</span>
          </div>
          <div class="skillDescription">一起互相监督</div>
          <div class="fee-box"><span class="skillFee">300</span>爱意/<span class="unit">次</span></div>
        </div>
      </div>
      <div class="item-skill">
        <div class="coverImg-wrapper">
          <div class="wrapper">
            <img src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png">
          </div>
        </div>
        <div class="skillInfo">
          <div class="flex-box">
            <div class="name"><img class="icon" src="http://ogf0xbf8w.bkt.clouddn.com/icClock.png">叫醒</div>
            <span class="iconfont icon-liulanrenshu">12人</span>
          </div>
          <div class="skillDescription">一起互相监督</div>
          <div class="fee-box"><span class="skillFee">300</span>爱意/<span class="unit">次</span></div>
        </div>
      </div>
    </div>
    <div class="footer">约她</div>
  </div>
</template>
<script>
import XHeader from 'vux/dist/components/x-header'
export default {
  components: {
    XHeader
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
@import '../assets/scss/common.scss';
.skillListTitle {
  background-color: white;
}

.box-list {
  margin-top: 10px;
  .item-skill {
    max-height: 150px;
    background-color: white;
    border-bottom: 1px solid $basic-gray;
    padding: 4%;
    overflow: hidden;
    display: flex;
    .coverImg-wrapper {
      width: 35%;
      .wrapper {
        @extend .img-responsive;
        img {
          width: 100%;
          border-radius: 5px;
        }
      }
    }
    .skillInfo {
      width: calc(65% - 8px);
      width: -webkit-calc(65% - 8px);
      width: -moz-calc(65% - 8px);
      font-size: 14px;
      color: $gray6;
      margin-left: 8px;
      font-weight: 200;
      .icon-liulanrenshu {
        font-size: 14px;
        line-height: 20px;
      }
      .name {
        float: left;
        * {
          vertical-align: middle;
        }
        font-size: 15px;
        font-weight: bold;
      }
      .skillDescription {
        color: $gray6;
        line-height: 1.2;
        max-height: 203px;
        margin: 8px 0;
        overflow: hidden;
      }
      .skillFee{
        color:$red0;
      }
    }
  }
}

.flex-box {
  display: flex;
  justify-content: space-between;
  color:black;
}

.vux-header {
  padding: 0;
  .vux-header-title {
    font-size: 15px;
    padding: 0 20px;
    color: $red0 !important;
    border-bottom: 1px solid $red0;
  }
}

.GoddessInfo-box {
  height: 276px;
  background-size: cover;
  background-repeat: no-repeat;
}

.v {
  @include circle(18px);
  @include box-sizing(border-box);
  border: 1px solid white;
  font-size: 14px;
  vertical-align: bottom;
  font-weight: 200;
  color: white;
  background-color: $red0;
  margin-top: -23px;
  right: 5px;
  position: absolute;
}

.mask {
  text-align: center;
  color: white;
  padding-top: 30px;
  @include box-sizing(border-box);
  .headPortrait-wrapper {
    width: 70px;
    margin: 0 auto;
    position: relative;
    .headPortrait {
      @include circle(70px);
      @include box-sizing(border-box);
      border: 1px solid white;
    }
  }
  h1 {
    font-size: 15px;
    line-height: 1.2;
  }
  h2 {
    font-size: 14px;
    font-weight: 200;
    color: $gray5;
  }
  .sex {
    background-color: #FFA2BC;
  }
  .constellation {
    background-color: #A7E5D0;
    margin-left: 10px;
  }
  .signature {
    font-size: 14px;
    color: $gray5;
    line-height: 2;
  }
  .constellation,
  .sex {
    @extend .font-size-10;
    display: inline-block;
    line-height: 20px;
    width: 63px;
    border-radius: 20px;
  }
  .icon-icStar {
    font-size: 14px;
    margin-top: 14px;
    line-height: 1;
    vertical-align: bottom;
    &:before {
      margin-right: 8px;
    }
  }
}

.icon-BackArrow {
  color: white;
  position: fixed;
  left: 15px;
  font-size: 18px;
  line-height: 40px;
}

.header {
  height: 40px;
  background-color: white;
  .title {
    font-size: 15px;
    width: 100px;
    text-align: center;
    // padding: 
    line-height: 38px;
    margin: 0 auto;
    color: $red0 !important;
    border-bottom: 2px solid $red0;
  }
}
.footer{
  color:$red0;
  height: 50px;
  text-align: center;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: white;
  border-top: 1px solid $basic-gray;
  font-size: 18px;
}
</style>
