<!-- https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/15-freemode.vue -->
<template>
    <panel :title="ptitle">
      <slider :swiperOption="options" :dataList="dataList" :className="styleCls"></slider>
    </panel>
</template>

<script>
  import Panel from '@/components/common/panel.vue'
  import Slider from '@/components/common/slider.vue'

  export default {
    components: {
      Panel,
      Slider
    },
    props: {
      ptitle: {
        type: String,
        default: ''
      },
      dataList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        options: {
           slidesPerView: 2.3,
           spaceBetween: 15,
           freeMode: true,
           pagination: {
             el: '',
             clickable: true
           }
        },
        styleCls:"styleCls"
      }
    }
  }
</script>

<style lang="scss">
.styleCls{
  margin: 0 10px 0 15px;
  img{
    width: 100%;
    display: block;
  }
}
</style>
