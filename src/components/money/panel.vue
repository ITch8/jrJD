<!-- 赚钱页面 对赏金任务、定期精选等相同模块的封装-->
<template>
  <section class="floor">
    <div class="floor-title">
      <div class="title">{{title}}</div>
      <div v-if="subtitle != ''" class="subtitle">{{subtitle}}</div>
    </div>
    <slider :swiperOption="options" :dataList="dataList" className="styleCls"></slider>
  </section>
</template>

<script>
  import Slider from '@/components/common/slider.vue'

  export default {
    components: {
      Slider
    },
    props: {
      dataList:{
        type:Array,
        default(){
          return []
        }
      },
      title: {
        type: String,
        default: ''
      },
      subtitle: {
        type: String,
        default: ''
      },
      slidesPerView:{
        type:String,
        default:'2.3'
      }
    },
    data() {
      return {
        options: {
          slidesPerView: this.slidesPerView,
          spaceBetween: 15,
          freeMode: true,
          pagination: {
            el: '',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .floor{
    margin-bottom: 10px;
  }
  .floor-title {
    font-family: PingFangSC-Semibold;
    position: relative;
    background: #fff;

    .title-common {
      max-width: 40%;
      height: 3.75rem;
      line-height: 3.75rem;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .title {
      @extend .title-common;
      overflow: hidden;
      font-size: 1.125rem;
      font-weight: 700;
      padding: 0 .9375rem;
    }

    .subtitle {
      @extend .title-common;
      font-size: .75rem;
      color: #999;
      padding: 0 .75rem;
      margin-right: .9375rem;
      background: url('~static/imgs/more.png') 100% no-repeat;
      background-size: .625rem .625rem;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .styleCls{
    margin: 0 10px 0 15px;
    img{
      width: 100%;
      display: block;
    }
  }
</style>
