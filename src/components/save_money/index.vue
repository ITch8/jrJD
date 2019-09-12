<template lang="html">
  <div>
    <div :class="$style.beneBanner"></div>
    <slider :dataList="sliderList" :className="$style.sliderClass" :swiperOption="options"></slider>
    <panel-award title='待领取福利' subtitle='签到领福利'></panel-award>
    <adv imgUrl='https://img10.360buyimg.com/mcmktadmin/jfs/t1/76852/12/6834/173608/5d4d4986E2577986b/8a85d5646d247e3a.png?width=984&height=296'></adv>
    <adv title='优享免息' subtitle='查看更多商品' imgUrl='https://img10.360buyimg.com/mcmktadmin/jfs/t1/38699/22/6523/41839/5cd13ce4E40c8efb9/087c86a48a9615ab.png?width=686&height=226'></adv>
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
          img: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/82828/37/9599/184759/5d724debE2915e11d/e115a8f84b21393a.png?width=686&height=396)'
        }, {
          img: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/41852/34/14217/196195/5d724e18E4396ed7f/1ab76d79888b41a5.png?width=686&height=396'
        }, {
          img: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/44477/12/10799/129197/5d775037E8fa0ae6c/fd655f86f9f32ca1.png?width=686&height=396'
        }, {
          img: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/41852/34/14217/196195/5d724e18E4396ed7f/1ab76d79888b41a5.png?width=686&height=396'
        }],
        dataList_p: [{
          img: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/35087/36/1918/13772/5cb457ccEed425709/9aa49c4292e441e4.png?width=280&height=230'
        }, {
          img: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/35771/12/1917/15074/5cb457d9E67a5e4fd/ff789722707cbfbe.png?width=280&height=230'
        }, {
          img: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/36481/22/1881/17607/5cb457e1E638c8b7f/1dbbbe94b4141281.png?width=280&height=230'
        }],
        dataList_f: [{
          img: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/46454/25/8916/42025/5d67a691E4902cc3a/2a0b076f4b7b388f.jpg?width=334&height=230'
        }, {
          img: 'https://img10.360buyimg.com/mcmktadmin/jfs/t1/64527/28/8566/11020/5d6769f3Ed3587e8f/2c9d36726c387702.png?width=334&height=230'
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
    background-image: url('https://u.jr.jd.com/growing/reMoney/images/Bitmapbg_c46fb46496.jpg');
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
