<template>
  <div>
    <m-header :title="title"></m-header>
    <slider :dataList="sliderList" :className="sliderClass"></slider>
  </div>
</template>

<script>
  import mHeader from '@/components/common/mHeader.vue'
  import Slider from '@/components/common/slider.vue'
  export default {
    components: {
      mHeader,
      Slider
    },
    data() {
      return {
        title: "京东金融",
        sliderList: [{
          img: 'static/imgs/swiper_1.png'
        }, {
          img: 'static/imgs/swiper_2.jpg'
        }],
        sliderClass:'slider'
      }
    }
  }
</script>

<style lang="scss">
  .slider {
    margin-top:45px;
    img {
      width: 100%;
    }
  }
</style>
