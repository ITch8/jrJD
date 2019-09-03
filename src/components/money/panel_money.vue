<!-- 赚钱页面 白条等组件-->
<template>
  <section class="floor">
    <div class="floor-title">
      <div class="title">{{title}}</div>
      <div v-if="subtitle != ''" class="subtitle">{{subtitle}}</div>
    </div>
    <div class="baitiao">
      <div class="wrap">
        <div class="circle">
          <canvas width="92" height="92"></canvas>
          <strong class="credit">76.7</strong>
          <div class="c-title">小白信用</div>
        </div>
        <div class="btn">提升分数</div>
      </div>
    </div>
    <div class="iconsix">
      <div class="wrap">
        <div class="item">
          <img class="icon" src="../../../static/imgs/bt_1.png" />
          <p class="i-title">白条</p>
        </div>
        <div class="item">
          <img class="icon" src="../../../static/imgs/bt_2.png" />
          <p class="i-title">还款</p>
        </div>
        <div class="item">
          <img class="icon" src="../../../static/imgs/bt_3.png" />
          <p class="i-title">1元抢券</p>
        </div>
        <div class="item">
          <img class="icon" src="../../../static/imgs/bt_4.png" />
          <p class="i-title">小白卡</p>
        </div>
        <div class="item">
          <img class="icon" src="../../../static/imgs/bt_5.png" />
          <p class="i-title">金条</p>
        </div>
        <div class="item">
          <img class="icon" src="../../../static/imgs/bt_6.png" />
          <p class="i-title">校园</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'panel-money',
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
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  canvas {
    display: inline-block;
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
      font-size: 16px;
      font-weight: 700;
      padding: 0 .9375rem;
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

  .baitiao {
    width: 34%;
    @media screen and (max-width:360px) {
      width: 40%;
    }
    float: left;
    clear: none;
    color: #fff;
    padding: 0 .5rem 0 .9375rem;
    height: 110px;
    position: relative;
    box-sizing: border-box;
    z-index: 2;
    border-radius: .125rem;

    .wrap {
      width: 6.625rem;
      height: 8.125rem;
      overflow: hidden;
      box-shadow: 0 0 0.625rem 0.03125rem rgba(101, 118, 155, .15);

      .circle {
        width: 5.75rem;
        height: 5.75rem;
        margin: .5rem auto .4375rem;
        position: relative;
        background: url('~static/imgs/bt_bg.png') top no-repeat;
        background-size: 100% auto;

        .credit {
          font-family: DIN-Bold;
          font-size: 1.125rem;
          display: block;
          height: 1.375rem;
          line-height: 1.375rem;
          top: 1.25rem;
          letter-spacing: -.05625rem;
          width: 100%;
          text-align: center;
          position: absolute;
          left: 0;
          color: #c4a36c;
        }

        .c-title {
          font-family: PingFangSC-Medium;
          font-size: .75rem;
          letter-spacing: -.0375rem;
          height: 1.0625rem;
          line-height: 1.0625rem;
          top: 2.875rem;
        }
      }

      .btn {
        font-family: STHeitiSC-Medium;
        font-size: .625rem;
        background: #d4b575;
        width: 4.375rem;
        margin: 0 auto;
        height: 1.5625rem;
        line-height: 1.5625rem;
        text-align: center;
        border-radius: .9375rem;
        position: relative;
        left: 0;
        bottom: .9375rem;
      }
    }
  }

  .iconsix {
    width: 66%;
    @media screen and (max-width:360px) {
      width: 60%;
    }
    float: left;
    clear: none;
    padding: 0 .9375rem 0 0;
    height: 8.125rem;
    position: relative;
    box-sizing: border-box;
    z-index: 2;
    border-radius: .125rem;

    .wrap {
      font-family: STHeitiSC-Medium;
      font-size: .75rem;
      height: 8.125rem;
      border-radius: .125rem;
      overflow: hidden;
      box-sizing: border-box;
      box-shadow: 0 0 0.625rem 0.03125rem rgba(101, 118, 155, .15);

      .item {
        width: 33.33%;
        height: 4.0625rem;
        text-align: center;
        float: left;
        overflow: hidden;

        .icon {
          width: 1.75rem;
          height: 1.75rem;
          margin: .625rem auto .0625rem;
        }

        .i-title {
          font-family: PingFangSC-Regular;
          font-size: .75rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          padding: 0 .375rem;
        }
      }
    }
  }
</style>
