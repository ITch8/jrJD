<template>
  <div>
    <m-header title="赚钱"></m-header>
    <adv-top></adv-top>
    <slider :dataList="sliderList" :className="sliderClass"></slider>
    <items :items="dataList_1"></items>
    <adv title='' :imgUrl="imgUrl_1"></adv>
    <panel title='赏金任务' subtitle='查看更多任务' :dataList="dataList_p" slidesPerView='2.6'></panel>
    <adv title='' :imgUrl="imgUrl_2"></adv>
    <panel title='银行精选' subtitle='更多银行服务' :dataList="dataList_bank" slidesPerView='2.5'></panel>
    <panel-money title="白条" subtitle="年轻不留白"></panel-money>
    <adv title='' :imgUrl="imgUrl_4"></adv>
    <panel title='定期精选' subtitle='查看更多精选' :dataList="dataList_new" slidesPerView='2.5'></panel>
    <panel-insurance title="保险保障" subtitle=""></panel-insurance>
    <adv title='' :imgUrl="imgUrl_5"></adv>
    <panel title='热销保险' subtitle='' :dataList="dataList_hot" slidesPerView='2.7'></panel>
    <adv title='特色推荐' :imgUrl="imgUrl_3"></adv>
    <div class="bottomBom"></div>
  </div>
</template>

<script>
  import mHeader from '@/components/common/mHeader.vue'
  import Items from '@/components/common/items.vue'
  import Slider from '@/components/common/slider.vue'
  import Adv from '@/components/money/adv.vue'
  import Panel from '@/components/money/panel.vue'
  import AdvTop from '@/components/money/adv_top.vue'
  import PanelMoney from '@/components/money/panel_money.vue'
  import PanelInsurance from '@/components/money/panel_insurance.vue'

  export default {
    components: {
      mHeader,
      Panel,
      Slider,
      Items,
      Adv,
      AdvTop,
      PanelMoney,
      PanelInsurance
    },
    data() {
      return {
        sliderList: [{
          img: 'static/imgs/mb_1.jpg'
        }, {
          img: 'static/imgs/mb_2.png'
        }],
        sliderClass:'slider',
        dataList_1:[
          {
            img:'static/imgs/mi_1.png',
            title:'去赚钱',
            desc:''
          },{
            img:'static/imgs/mi_2.png',
            title:'双签',
            desc:''
          },{
            img:'static/imgs/mi_3.png',
            title:'优惠券',
            desc:''
          },{
            img:'static/imgs/mi_4.png',
            title:'单单返',
            desc:''
          },{
            img:'static/imgs/mi_5.png',
            title:'全部',
            desc:''
          }
        ],
        imgUrl_1:"static/imgs/adv1.jpg",
        imgUrl_2:"static/imgs/adv2.png",
        imgUrl_3:"static/imgs/adv3.jpg",
        imgUrl_4:"static/imgs/bt_adv.png",
        imgUrl_5:"static/imgs/insadv.jpg",
        dataList_p: [{
          img: "static/imgs/1_1.png"
        },{
          img: "static/imgs/1_2.png"
        },{
          img: "static/imgs/1_3.png"
        },{
          img: "static/imgs/1_4.png"
        }],
        dataList_bank:[{
          img: "static/imgs/bank1.png"
        },{
          img: "static/imgs/bank2.png"
        },{
          img: "static/imgs/bank3.png"
        }],
        dataList_new: [{
          img: "static/imgs/2_1.jpg"
        },{
          img: "static/imgs/2_2.jpg"
        },{
          img: "static/imgs/2_3.jpg"
        }],
        dataList_hot: [{
          img: "static/imgs/hot1.jpg"
        },{
          img: "static/imgs/hot2.jpg"
        },{
          img: "static/imgs/hot3.jpg"
        }]
      }
    }
  }
</script>

<style lang="scss">

  @import '@/style/element.scss';

  .bottomBom{
    @include bottomBom;
  }

  .slider {
    img {
      width: 100%;
    }
  }

  .margin-bottom-0{
    margin-bottom: 0 !important;
  }
</style>
