<template>
  <!-- root element is required， and the class must be **-view -->
  <div class="demo-view"> 
    <!-- your elements -->
    <group>
      <cell title="vue" value="Hello" link="/hello"></cell>
    </group>
    <!--bottom slot-->
    <m-footer></m-footer>
  </div>
</template>

<script>
  // import public component
  import Group from 'vux/dist/components/group'
  import Cell from 'vux/dist/components/cell'
  import MFooter from './components/footer'

  // your vue code based on es6 syntax
  export default {
    components: {
      Group,
      Cell,
      MFooter
    }
  }
</script>

<style lang="scss">
  /* import public class */
  @import '~vux/dist/vux.css';

  .demo-view{
    /* your private class */

  }

</style>