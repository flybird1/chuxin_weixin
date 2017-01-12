<template>
  <!-- root element is required， and the class must be **-view -->
  <div class="demo-view"> 
    <!-- your elements -->
    <group>
      <cell title="vue" value="Hello" link="/hello"></cell>
    </group>
    <!--bottom slot-->
  </div>
</template>

<script>
  // import public component
  import Group from 'vux/src/components/group'
  import Cell from 'vux/src/components/cell'
// import {Group,Cell} from 'vux/src/components'

  // your vue code based on es6 syntax
  export default {
    components: {
      Group,
      Cell
    }
  }
</script>

<style lang="scss">
  /* import public class */
  // @import '~vux/dist/vux.css';

  .demo-view{
    /* your private class */

  }

</style>