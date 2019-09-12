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
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/74158/28/9036/59801/5d6cd491E392e16c3/bcdb89bae38b1ff2.jpg?width=750&height=320'
        }, {
          img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/82590/38/9845/106638/5d7756cfEe99d3715/2e34523654669cb4.jpg?width=750&height=320'
        }],
        sliderClass:'slider',
        dataList: [{
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/19965/4/1946/28370/5c18958aE9e8a930d/9810bed7979e6bd5.jpg?width=210&height=260"
        },{
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/27283/39/2034/26756/5c1895b5Ecbfdf7ed/6a0755f1f40e2eb9.jpg?width=210&height=260"
        },{
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/27014/35/2022/24897/5c1895d9Ef095679a/c0918d244bbfb2e5.jpg?width=210&height=260"
        },{
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/19150/30/2037/31576/5c1895f2Eb431149e/7a71e063250f8b0d.jpg?width=210&height=260"
        },{
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/9279/3/9618/27165/5c189693E5d54e2cb/c263629839992767.jpg?width=210&height=260"
        }],
        dataList_2: [{
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260"
        },{
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&height=260"
        },{
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260"
        },{
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/19965/4/1946/28370/5c18958aE9e8a930d/9810bed7979e6bd5.jpg?width=210&height=260"
        }],
        dataList_3: [{
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/50050/5/6566/36727/5d41873aEc3382fc4/d9777468823c0b2a.jpg?width=335&height=421"
        },{
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/80805/20/6012/33103/5d418790Efe2deb02/9bd97297964310e3.jpg?width=335&height=421"
        },{
          img: "https://img12.360buyimg.com/jrpmobile/jfs/t1/84523/40/6287/29812/5d4187c2E708c6479/389263b0d68315bf.jpg?width=335&height=421"
        }],
        dataList_1:[
          {
            img:'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
            path:'/',
            title:'优惠券',
            desc:'30-10券'
          },{
            img:'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
            path:'/',
            title:'领福利',
            desc:''
          },{
            img:'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
            path:'/',
            title:'抢钢镚',
            desc:''
          },{
            img:'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
            path:'/',
            title:'白条提额',
            desc:''
          },{
            img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
            path:'/',
            title:'工资理财',
            desc:''
          },{
            img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90',
            path:'/',
            title:'众筹',
            desc:''
          },{
            img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/36242/13/119/12214/5cb06492E0c73a66f/a284f91242e27af1.png?width=90&height=90',
            path:'/',
            title:'免费领京豆',
            desc:''
          },{
            img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/23337/6/15445/8974/5cb064c2E0cadac1d/c533bfe4da578fe7.png?width=90&height=90',
            path:'/',
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
