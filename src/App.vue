<template>
  <div id="app">
    <router-view />
    <tabbar></tabbar>
  </div>
</template>

<script>
  import Tabbar from '@/components/common/tabbar.vue'
  export default {
    name: 'App',
    components: {
      Tabbar
    }
  }
</script>

<style>
  @import "style/reset.scss";
  #app {}
</style>
