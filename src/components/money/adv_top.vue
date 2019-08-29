<template>
  <section class="floor">
	  <div class="fixtop">
		  <img src="../../../static/imgs/adv_top.png" />
	  </div>
  </section>
</template>

<script>
  export default {
    name:'adv-top',
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
  .floor {
    padding-bottom: 1.25rem;
    background-color: #fff;
    clear: both;
    overflow: hidden;
    .fixtop {
        max-width: 42.6875rem;
        margin: 0 auto;
        height: 3.75rem;
        position: fixed;
        top: 45px;
        left: 0;
        right: 0;
        z-index: 9;
        background: transparent;
        >img{
           width: 100%;
        }
    }
  }
</style>
