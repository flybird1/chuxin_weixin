<template>
  <div>
    <group>
      <cell title="vue" value="Hello" link="/hello"></cell>
      <cell title="webim" value="webim" link="/webim"></cell>
    </group>
    <!--bottom slot-->
    <m-footer></m-footer>
  </div>
</template>

<script>
  import Group from 'vux/dist/components/group'
  import Cell from 'vux/dist/components/cell'
  import MFooter from '../components/footer'

  import { welcome } from '../vuex/actions'

  export default {
    ready () {
      this.welcome()
    },
    components: {
      Group,
      Cell,
      MFooter
    },
    vuex: {
      actions: {
        welcome
      }
    }
  }
</script>

<style>
  @import '~vux/dist/vux.css';
</style>