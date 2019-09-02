<!-- 赚钱页面 对赏金任务、定期精选等相同模块的封装-->
<template>
  <section :class="$style.floor">
    <div :class="$style.floorTitle">
      <div :class="$style.title">{{title}}</div>
      <div v-if="subtitle != ''" :class="$style.subtitle">{{subtitle}}</div>
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
      dataList: {
        type: Array,
        default () {
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
      slidesPerView: {
        type: String,
        default: '2.3'
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

<style lang="scss" module>
  .floor {
    margin-bottom: 10px;

    .floorTitle {
      font-family: PingFangSC-Semibold;
      position: relative;
      background: #fff;

      .title-common {
        height: 56px;
        line-height: 56px;
        padding: 0 16px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      .title {
        @extend .title-common;
        font-size: 16px;
        font-weight: 700;
      }

      .subtitle {
        @extend .title-common;
        font-size:14px;
        color: #999;
        background: url('/static/imgs/more.png') 100% no-repeat;
        background-size: 9px 14px;
        position: absolute;
        top: 0;
        right: 10px;
      }
    }
  }
</style>
<style lang="scss">
  .styleCls {
    margin: 0;
    padding:  0 0 10px 10px;
    background-color:#fff;
    img {
      width: 100%;
      display: block;
    }
  }
</style>
