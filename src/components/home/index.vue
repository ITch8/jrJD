<template>
  <div>
    <m-header title="京东金融"></m-header>
    <slider :dataList="sliderList" :className="sliderClass"></slider>
    <items :items="dataList_1"></items>
    <product :dataList="dataList_2" ptitle="赏金任务"></product>
    <product :dataList="dataList" ptitle="保险保障"></product>
    <product :dataList="dataList_3" ptitle="众筹新品"></product>
    <m-footer></m-footer>
  </div>
</template>

<script>
  import mHeader from '@/components/common/mHeader.vue'
  import Items from '@/components/common/items.vue'
  import Panel from '@/components/common/panel.vue'
  import Slider from '@/components/common/slider.vue'
  import Product from '@/components/public/product.vue'
  import MFooter from '@/components/common/mFooter.vue'
  export default {
    components: {
      mHeader,
      Panel,
      Slider,
      Product,
      Items,
      MFooter
    },
    data() {
      return {
        sliderList: [{
          img: 'static/imgs/swiper_1.png'
        }, {
          img: 'static/imgs/swiper_2.jpg'
        }],
        sliderClass:'slider',
        dataList: [{
          img: "static/imgs/d_1.jpg"
        },{
          img: "static/imgs/d_2.jpg"
        },{
          img: "static/imgs/d_3.jpg"
        },{
          img: "static/imgs/d_4.jpg"
        },{
          img: "static/imgs/d_5.jpg"
        }],
        dataList_2: [{
          img: "static/imgs/1_1.png"
        },{
          img: "static/imgs/1_2.png"
        },{
          img: "static/imgs/1_3.png"
        },{
          img: "static/imgs/1_4.png"
        }],
        dataList_3: [{
          img: "static/imgs/2_1.jpg"
        },{
          img: "static/imgs/2_2.jpg"
        },{
          img: "static/imgs/2_3.jpg"
        }],
        dataList_1:[
          {
            img:'static/imgs/i_1.png',
            title:'优惠券',
            desc:'30-10券'
          },{
            img:'static/imgs/i_2.png',
            title:'领福利',
            desc:''
          },{
            img:'static/imgs/i_3.png',
            title:'抢钢镚',
            desc:''
          },{
            img:'static/imgs/i_4.png',
            title:'白条提额',
            desc:''
          },{
            img:'static/imgs/i_5.png',
            title:'工资理财',
            desc:''
          },{
            img:'static/imgs/i_6.png',
            title:'众筹',
            desc:''
          },{
            img:'static/imgs/i_7.png',
            title:'免费领京豆',
            desc:''
          },{
            img:'static/imgs/i_8.png',
            title:'免息红包',
            desc:''
          },
        ]
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
