<template>
  <!-- <div class="iconfont icon-BackArrow" @click.preventDefault v-show="leftOptions.showBack" :transition="transition" @click="onClickBack"></div> -->
  <div class="iconfont icon-BackArrow" @click="onClickBack" v-show="leftOptions.showBack" :transition="transition"></div>
  <div class="header">
    <div class="title" v-show="title" :transition="transition">{{title}}</div>
  </div>
</template>
<script>
export default {
  props: {
    leftOptions: {
      type: Object,
      default () {
        return {
          showBack: true,
          backText: 'Back',
          preventGoBack: false
        }
      }
    },
    title: String,
    transition: String
  },
  methods: {
    onClickBack() {
      if (this.leftOptions.preventGoBack) {
        this.$emit('on-click-back')
      } else {
        history.back()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-BackArrow {
  color: black;
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
    line-height: 38px;
    margin: 0 auto;
    font-weight: bold;
  }
}
</style>
