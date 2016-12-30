<template>
  <div>

  </div>
</template>

<script>

  import { welcome } from '../vuex/actions'

  export default {
    ready () {
      // this.welcome()
    },
    components: {
      Group,
      Cell,
      MFooter
    },
    vuex: {
      actions: {
        // welcome
      }
    }
  }
</script>

<style>
  @import '~vux/dist/vux.css';
</style>