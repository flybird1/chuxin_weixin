<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
import api from '../api'

export default {
  mounted: function() {
    this.$nextTick(function() {
      // code that assumes this.$el is in-document
      api.authorize().then(response => {
        if (response.ok) {

        }
      }, response => {

      })
    })
  },
  data() {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
