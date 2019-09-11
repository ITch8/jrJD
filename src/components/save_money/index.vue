<template lang="html">
  <div>
    <div :class="$style.beneBanner"></div>
    <slider :dataList="sliderList" :className="$style.sliderClass" :swiperOption="options"></slider>
    <panel-award title='待领取福利' subtitle='签到领福利'></panel-award>
    <adv imgUrl='static/imgs/s_adv.png'></adv>
    <adv title='优享免息' subtitle='查看更多商品' imgUrl='static/imgs/s_mx.png'></adv>
    <goods-discount></goods-discount>
    <panel title='省钱优惠券' subtitle='更多神券来这里抢' :dataList="dataList_p" slidesPerView='2.6'></panel>
    <panel title='优惠福利' subtitle='查看更多福利' :dataList="dataList_f" slidesPerView='2'></panel>
    <goods title='猜你喜欢' subtitle='查看更多'></goods>
    <div class="bottomBom"></div>
  </div>
</template>

<script>
  import Slider from '@/components/common/slider.vue'
  import Panel from '@/components/save_money/panel.vue'
  import PanelAward from '@/components/save_money/panel_award.vue'
  import Adv from '@/components/save_money/adv.vue'
  import Goods from '@/components/save_money/goods.vue'
  import GoodsDiscount from '@/components/save_money/goods_discount.vue'
  export default {
    components: {
      Slider,
      Panel,
      PanelAward,
      Adv,
      Goods,
      GoodsDiscount
    },
    data() {
      return {
        options: { // 所有的参数同 swiper 官方 api 参数
          autoplay: true,
          loop: true,
          effect: 'cube',
          grabCursor: true,
          cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 8,
            shadowScale: 0.94
          },
          pagination: {
            el: ".swiper-pagination"
          },
          notNextTick: false
        },
        sliderList: [{
          img: 'static/imgs/save_s_1.png'
        }, {
          img: 'static/imgs/save_s_2.jpg'
        }, {
          img: 'static/imgs/save_s_3.png'
        }, {
          img: 'static/imgs/save_s_4.png'
        }],
        dataList_p: [{
          img: 'static/imgs/s_p_1.png'
        }, {
          img: 'static/imgs/s_p_2.png'
        }, {
          img: 'static/imgs/s_p_3.png'
        }],
        dataList_f: [{
          img: 'static/imgs/s_f_1.jpg'
        }, {
          img: 'static/imgs/s_f_2.png'
        }]
      }
    }
  }
</script>

<style lang="scss" module>
  .beneBanner {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 320px;
    background-image: url('static/imgs/save_s_bg.jpg');
    background-repeat: no-repeat;
    background-position: 0 -3.85rem;
    background-size: cover;
    padding-top: 15px;
  }

  .sliderClass {
    border-radius: 10px;
    padding-top: 30px;
    position: relative;
    top: -30px;

    img {
      width: 100%;
      border-radius: 10px;
    }
  }
</style>
<style lang="scss">
  @import '@/style/element.scss';

  .bottomBom {
    @include bottomBom;
  }

  .swiper-pagination {
    text-align: left !important;
  }

  .swiper-pagination-bullets {
    bottom: -10px !important;
  }

  .swiper-pagination-bullet {
    height: 4px !important;
    border-radius: 40% !important;
    background: #efecec !important;
  }
  .swiper-pagination-bullet-active{
    background: #fff !important;
  }
</style>
