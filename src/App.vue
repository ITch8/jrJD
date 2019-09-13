<template>
  <div id="app">
    <transition :name="transitionName">
    <router-view />
    </transition>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/tabbar.vue';
import Loading from '@/components/public/loading.vue';

let routerHistoryArr = []

export default {
  name: 'App',
  components: {
    Tabbar,
    Loading
  },
  data() {
    return {
      showLoading: false,
      transitionName:'slide-fade'
    }
  },
  watch: {
    '$route' (to, from) {

      const routerName = to.name
      if(routerHistoryArr.indexOf(routerName) == -1){
        routerHistoryArr.push(routerName)
        this.transitionName = 'slide-fade'
      }else{
        this.transitionName = ''
      }

    }
  },
  methods:{
  }
};
</script>

<style>
@import 'style/reset.scss';

#app {
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(0);
  opacity: 0;
}
</style>
