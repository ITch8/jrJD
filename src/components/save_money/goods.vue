<template lang="html">
  <section :class="$style.floor">
    <div :class="$style.floorTitle">
      <div :class="$style.title">{{title}}</div>
      <div v-if="subtitle != ''" :class="$style.subtitle">{{subtitle}}</div>
    </div>
    <ul :class="$style.list">
      <li v-for="(item,index) in list" :key='index'>
        <div :class="$style.item">
          <img v-lazy="item.img" />
          <div :class="$style.itemG">
            <div :class="$style.itemName">吉禾伊嘉短裤女牛仔春夏季2019休闲修身韩版百搭女士牛仔短裤子新款8866 牛仔蓝8681 28/L</div>
            <div :class="$style.itemPrice">￥88.00</div>
            <div :class="$style.itemDesc">
              <div :class="$style.desc">3期免息</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div :class="$style.bottomLine">我也是有底线的</div>
  </section>

</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'

  Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '../../../static/imgs/default.png',
    loading: '../../../static/imgs/default.png',
    attempt: 1
  })

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      subtitle: {
        type: String,
        default: ''
      }
    },
    data(){
      return{
        list:[
          {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/2677/3/82/158012/5b8f339fEeb8aaf51/f445ab8f63960634.jpg'},
           {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/70088/12/3126/87500/5d156a15E46a3498f/cd2e5a9d6f329c60.jpg'},
            {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t22525/80/2277337604/975232/cb9520de/5b7bc927N532dcfd6.png'},
             {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/9532/4/13009/125492/5c3c4922Ebd091318/59e91191fd1d3a14.jpg'},
              {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/16100/26/6807/184705/5c6222d5Ecc19bb9f/5ffaaa3efc41df02.jpg'},
               {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/40550/10/12269/95067/5d5a766aEdfbf7835/558f31f53761af89.jpg'},
                {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/9196/16/10397/181344/5c2049ffEd00aa951/294f800d0db3068c.jpg'},
                 {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t24079/121/523279669/353479/9027327c/5b3332a1N64d34db6.jpg'},
                  {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/39255/13/13727/40170/5d4c2a77E68b8bf07/c96d84c1e3570cbd.jpg'},
                   {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/75624/10/2/234006/5cd24abcE424549f3/9552d1d312d7511d.png'},
                    {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/69647/22/3809/121515/5d1f2309Ed3318d4f/ea5a7fc96e00160c.jpg'},
                     {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/27975/37/11766/291481/5c93570dE81e4386c/5b34ee1afb443c29.jpg'},
                      {img:'https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/60973/7/8907/108240/5d68fca3E53194ee7/c8d05219217708d7.jpg'}
          ]
      }
    }
  }
</script>

<style lang="scss" module>
  @import '@/style/element.scss';


  .floor {
    background: #fff;

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
        font-size: 14px;
        color: #999;
        background: url('../../../static/imgs/more.png') 100% no-repeat;
        background-size: 9px 14px;
        position: absolute;
        top: 0;
        right: 10px;
      }
    }
  }

  .list {
    @include list(row);
    padding: 0 5px;
    background: #fff;

    >li {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 50%;

      .item {
        margin: 5px 5px;

        >img {
          width: 100%;
        }

        .itemG {
          padding: 5px;

          .itemName {
            font-size: 14px;
            font-family: PingFangSC-Regular;
            color: #000;
            line-height: 18px;
            height: 36px;
            overflow: hidden;
            word-break: break-all;
            white-space: normal;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .itemPrice {
            margin-top: 12px;
            font-size: 16px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            color: #dc4f3f;
            line-height: 16px;
          }

          .itemDesc {
            height: 22px;
            word-break: keep-all;
            white-space: nowrap;
            font-family: PingFangSC-Regular;
            margin-top: 6px;
            width: 100%;
            display: block;
            overflow: hidden;

            .desc {
              font-family: "Arial", "PingFangSC";
              background-color: #ffcc24;
              color: #333;
              font-style: normal;
              font-size: 10px;
              margin-right: 4px;
              padding: 2px 4px 2px 4px;
              text-align: center;
              line-height: 14px;
              height: 18px;
              overflow: hidden;
              display: inline-block;
              box-sizing: border-box;
              white-space: nowrap;
              word-break: keep-all;
              vertical-align: top;
            }
          }
        }
      }
    }
  }

  .after-before {
    content: "";
    width: 40px;
    border-top: 1px solid #ccc;
    display: inline-block;
    vertical-align: middle;
    line-height: 20px;
  }

  .bottomLine {
    color: #ccc;
    display: block;
    padding: 35px 0;
    padding-top: 25px;
    text-align: center;
    font-size: 12px;

    &:after {
      @extend .after-before;
      margin-left: 7px;
    }

    &:before {
      @extend .after-before;
      margin-right: 7px;
    }
  }
</style>
