<!-- 赚钱页面 白条等组件-->
<template>
  <section class="floor">
    <div class="floor-title">
      <div class="title">{{title}}</div>
      <div v-if="subtitle != ''" class="subtitle">{{subtitle}}</div>
    </div>
    <div class="baoxian">
      <div class="wrap">
        <p class="b-title">100万</p>
        <p class="sb-title">京东账户安全险</p>
        <div class="btn">立即查看</div>
        <span class="label">今日推荐</span>
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
    name: 'panel_insurance',
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
      font-size: 1.125rem;
      font-weight: 700;
      padding: 0 .9375rem;
    }

    .subtitle {
      @extend .title-common;
      font-size: .75rem;
      color: #999;
      padding: 0 .75rem;
      margin-right: .9375rem;
      background: url('~static/imgs/more.png') 100% no-repeat;
      background-size: .625rem .625rem;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .baoxian {
    width: 34%;

    @media screen and (max-width: 360px) {
      width: 40%;
    }

    float: left;
    clear: none;
    color: #fff;
    padding: 0 .5rem 0 .9375rem;
    height: 8.125rem;
    position: relative;
    box-sizing: border-box;
    border-radius: .125rem;
    z-index: 2;

    .bs-title-common {
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 0 .375rem;
    }

    .btn-label {
      font-size: .625rem;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 0 .375rem;
    }

    .wrap {
      width: 6.625rem;
      height: 8.125rem;
      overflow: hidden;
      box-shadow: 0 0 0.625rem 0.03125rem rgba(101, 118, 155, .15);

      .sb-title {
        @extend .bs-title-common;
        font-family: PingFangSC-Semibold;
        font-size: .75rem;
        color: #000;
        height: 1.0625rem;
        line-height: 1.0625rem;
        margin-bottom: .75rem;
      }

      .b-title {
        @extend .bs-title-common;
        font-family: DIN-Bold;
        font-size: 1.5625rem;
        color: #1bd5c7;
        height: 1.9375rem;
        line-height: 1.9375rem;
        margin: 1.9375rem auto .125rem;
      }

      .label {
        @extend .btn-label;
        font-family: PingFangSC-Semibold;
        height: 1rem;
        line-height: 1rem;
        background: #000;
        position: absolute;
        top: 0;
        left: .9375rem;
        display: block;
      }

      .btn {
        @extend .btn-label;
        font-family: PingFangSC-Medium;
        width: 4.375rem;
        margin: 0 auto;
        height: 1.5625rem;
        line-height: 1.5625rem;
        background: #1bd5c7;
        border-radius: .9375rem;

        @media screen and (max-width: 360px) {
          min-width: 3.75rem;
          height: 1.5625rem;
          line-height: 1.5625rem;
          text-align: center;
        }
      }
    }
  }

  .iconsix {
    width: 66%;

    @media screen and (max-width: 360px) {
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
