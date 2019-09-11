<template>
  <section :class="$style.floor">
	  <div :class="$style.fixtop">
		  <img src="../../../static/imgs/adv_top.png" />
	  </div>
  </section>
</template>

<script>
  export default {
    name:'adv-top'
  }
</script>

<style lang="scss" module>
  .floor {
    background-color: #fff;
    clear: both;
    overflow: hidden;
    .fixtop {
        margin: 0 auto;
        height: 50px;
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
