<template lang="html">
  <section :class="$style.floor">
    <div :class="$style.floorTitle">
      <div :class="$style.title">{{title}}</div>
      <div v-if="subtitle != ''" :class="$style.subtitle">{{subtitle}}</div>
    </div>
    <ul :class="$style.list">
      <li v-for="i in 10" :key='i'>
        <div :class="$style.item">
          <img src="https://m.360buyimg.com/mobilecms/s316x316_jfs/t1/19506/14/9334/169184/5c7e51c4Efac7c8e3/ac7541b14281eede.jpg" />
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
        background: url('/static/imgs/more.png') 100% no-repeat;
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
