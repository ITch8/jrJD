<template lang="html">
  <div>
    <activity></activity>
    <panel title='待领取福利' :dataList="dataList_f" slidesPerView='2.5'></panel>
    <adv title='' imgUrl='https://img10.360buyimg.com/mcmktadmin/jfs/t1/54572/38/9309/81193/5d6dd732Eca6159f4/3a657f884bea6e9d.png?width=694&height=170'></adv>
    <panel title='优惠大礼包' :dataList="dataList" slidesPerView='3'></panel>
    <div class="bottomBom"></div>
  </div>

</template>

<script>
  import Adv from '@/components/borrow_money/adv.vue'
  import Activity from '@/components/borrow_money/activity.vue'
  import Panel from '@/components/borrow_money/panel.vue'

  export default {
    components: {
      Adv,
      Panel,
      Activity
    },
    data() {
      return {
        dataList:[{
          img:'https://img10.360buyimg.com/mcmktadmin/jfs/t1/68933/27/7740/11603/5d5bbd60Ebc72028b/23b7a10b81308aba.png?width=220&height=225'
        },{
          img:'https://img10.360buyimg.com/mcmktadmin/jfs/t1/61967/10/6103/24703/5d43baaeEeb585f3e/b541bfbf9a614154.png?width=220&height=225'
        },{
          img:'https://img10.360buyimg.com/mcmktadmin/jfs/t1/76174/31/2689/5280/5d104474E3b853a0a/d4c3c6ef12ea1a0d.png?width=220&height=225'
        }],
        dataList_f: [{
          img: 'static/imgs/s_f_1.jpg'
        }, {
          img: 'static/imgs/s_f_2.png'
        }, {
          img: 'static/imgs/s_f_1.jpg'
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
</style>
