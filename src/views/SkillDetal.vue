<template>
  <!-- root element is required， and the class must be **-view -->
  <div class="SkillDetal-view">
    <y-header title="技能详情"></y-header>
    <div class="cover" style="background-image: url('http://ogf0xbf8w.bkt.clouddn.com/demo6-02.png')">
      <div class="layer">
        <div class="demoAudio"></div>
        <div class="line-1">
          <div class="icon-text1">
            <img class="icon-skill" src="http://ogf0xbf8w.bkt.clouddn.com/icClock.png">叫醒
          </div>
          <div class="icon-text">
            <img class="" src="http://ogf0xbf8w.bkt.clouddn.com/people.png">12
          </div>
        </div>
        <div class="skillFee-unit">100爱意/次</div>
        <div class="skillDescription">一起互相监督~每天两小时，拥有美丽的身材还有健康体魄</div>
      </div>
    </div>
    <div class="skillCommentList">
      <div class="row title">技能评价<span class="iconfont icon-Star">4.5</span></div>
      <div class="comment-box">
        <div class="headPortrait-wrapper">
          <div class="wrapper">
            <img src="http://ogf0xbf8w.bkt.clouddn.com/demo3-01.png">
          </div>
        </div>
        <div class="comment-info">
          <div class="row-1">
            <div class="name">用户昵称</div>
            <span class="iconfont icon-Star">4.5</span>
          </div>
          <div class="content">技能评价技能评价技能评价技能评价技能评价技能评价技能评价</div>
          <div class="date">9月30日</div>
        </div>
      </div>
    </div>
    <div class="footer">约她</div>
  </div>
</template>
<script>
import YHeader from 'components/y-header'

export default {
  components: {
    YHeader
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
@import '../assets/scss/common.scss';
.SkillDetal-view {
  .wrapper {
    @extend .img-responsive;
  }
  .icon-text {
    img {
      vertical-align: text-bottom;
    }
    font-size: 15px;
    line-height: 24px;
    height: 24px;
  }
  .icon-Star {
    color: black;
    &:before {
      margin-right: 5px;
    }
  }
  .skillCommentList {
    margin-top: 10px;
    background-color: white;
    font-size: 14px;
    .row {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
    }
    .title {
      color: $gray8;
      line-height: 38px;
      font-weight: lighter;
    }
    .comment-box {
      @extend .row;
      @include box-sizing(border-box);
      // height: 110px;
      padding-top: 10px;
      padding-bottom: 10px;
      border-top: 1px solid $gray2;
    }
    .headPortrait-wrapper {
      width: 48px;
    }
    .wrapper {
      @extend .img-responsive;
      img {
        width: 100%;
        border-radius: 100%;
      }
    }
    .comment-info {
      width: calc(100% - 60px);
      .row-1 {
        display: flex;
        justify-content: space-between;
      }
      .content {
        line-height: 1.2;
      }
      .date,
      .content {
        color: $gray4;
      }
    }
  }
  .icon-text1 {
    @extend .icon-text;
    img {
      vertical-align: middle;
    }
  }
  .line-1 {
    margin: 20px auto 0 auto;
    display: flex;
    width: 114px;
    justify-content: space-between;
  }
  .header {
    height: 40px;
    background-color: white;
    .title {
      font-size: 15px;
      width: 100px;
      text-align: center;
      line-height: 38px;
      margin: 0 auto;
      font-weight: bold;
    }
  }
  .cover {
    height: 100vw;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: 1px solid $gray2;
  }
  .layer {
    width: 100%;
    height: 159px;
    position: absolute;
    bottom: 0;
    background-image: url('http://ogf0xbf8w.bkt.clouddn.com/layer.png');
  }
  .demoAudio {
    width: 100px;
    background-color: rgba(255, 255, 255, .6);
    height: 35px;
    border-radius: 35px;
    margin: 0 auto;
  }
  .skillFee-unit {
    text-align: center;
    font-size: 18px;
    margin-top: 5px;
    color: $red0;
  }
  .skillDescription {
    font-size: 14px;
    width: 330px;
    text-align: center;
    margin: 0 auto;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    color: $gray7;
  }
}

</style>
