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
          <img class="icon" src="static/imgs/bt_1.png" />
          <p class="i-title">白条</p>
        </div>
        <div class="item">
          <img class="icon" src="static/imgs/bt_2.png" />
          <p class="i-title">还款</p>
        </div>
        <div class="item">
          <img class="icon" src="static/imgs/bt_3.png" />
          <p class="i-title">1元抢券</p>
        </div>
        <div class="item">
          <img class="icon" src="static/imgs/bt_4.png" />
          <p class="i-title">小白卡</p>
        </div>
        <div class="item">
          <img class="icon" src="static/imgs/bt_5.png" />
          <p class="i-title">金条</p>
        </div>
        <div class="item">
          <img class="icon" src="static/imgs/bt_6.png" />
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
      background: url('more.png') 100% no-repeat;
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
    padding: 0 5px 0 10px;
    height: 150px;
    position: relative;
    box-sizing: border-box;
    z-index: 2;
    border-radius: 3rem;

    .wrap {
      width: 120px;
      height: 180px;
      overflow: hidden;
     box-shadow: 0 0 5px 1px rgba(101, 118, 155, .15);

      .circle {
        width: 60px;
        height: 60px;
        margin: 5px auto 4px;
        position: relative;
        background: url('~static/imgs/bt_bg.png') top no-repeat;
        background-size: 100% auto;

        .credit {
          font-family: DIN-Bold;
          font-size: 15px;
          display: block;
          height: 20px;
          line-height: 20px;
          top: 15px;
          letter-spacing: -3px;
          width: 100%;
          text-align: center;
          position: absolute;
          left: 0;
          color: #c4a36c;
        }

        .c-title {
          font-family: PingFangSC-Medium;
          font-size: 5px;
          letter-spacing: -2p;
          height: 15px;
          line-height: 15px;
          top: 30px;
        }
      }

      .btn {
        font-family: STHeitiSC-Medium;
        font-size: 12px;
        background: #d4b575;
        width: 60px;
        margin: 0 auto;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-radius: 10px;
        position: relative;
        left: 0;
        bottom: 10px;
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
    padding: 0 10px 0 0;
    height: 180px;
    position: relative;
    box-sizing: border-box;
    z-index: 2;
    border-radius: 2px;

    .wrap {
      font-family: STHeitiSC-Medium;
      font-size: 12px;
      height: 180px;
      border-radius: 2px;
      overflow: hidden;
      box-sizing: border-box;
      box-shadow: 0 0 5px 1px rgba(101, 118, 155, .15);

      .item {
        width: 33.33%;
        height: 90px;
        text-align: center;
        float: left;
        overflow: hidden;

        .icon {
          width: 15px;
          height: 15px;
          margin: 10px auto 10px;
        }

        .i-title {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          padding: 0 4px;
        }
      }
    }
  }
</style>
