<!-- 赚钱页面 白条等组件-->
<template>
  <section :class="$style.floor">
    <div :class="$style.floorTitle">
      <div :class="$style.title">{{title}}</div>
      <div v-if="subtitle != ''" :class="$style.subtitle">{{subtitle}}</div>
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

<style lang="scss" module>
  .floor {
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
        background: url('static/imgs/more.png') 100% no-repeat;
        background-size: 9px 14px;
        position: absolute;
        top: 0;
        right: 10px;
      }
    }
  }
</style>
<style lang="scss">
  .baoxian {
    width: 34%;
    background-color: #fff;

    @media screen and (max-width: 360px) {
      width: 40%;
    }

    float: left;
    clear: none;
    color: #fff;
    padding: 0 8px 0 10px;
    height: 150px;
    position: relative;
    box-sizing: border-box;
    border-radius: 2px;
    z-index: 2;

    .bs-title-common {
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 0 .375rem;
    }

    .btn-label {
      font-size: 12px;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 0 .375rem;
    }

    .wrap {
      width: 120px;
      height: 150px;
      overflow: hidden;
      box-shadow: 0 0 5px 1px rgba(101, 118, 155, .15);

      .sb-title {
        @extend .bs-title-common;
        font-family: PingFangSC-Semibold;
        font-size: 12px;
        color: #000;
        height: 45px;
        line-height: 45px;
        margin-bottom: 10px;
      }

      .b-title {
        @extend .bs-title-common;
        font-family: DIN-Bold;
        font-size: 18px;
        color: #1bd5c7;
        height: 20px;
        line-height: 20px;
        margin: 20px auto 2px;
      }

      .label {
        @extend .btn-label;
        font-family: PingFangSC-Semibold;
        height: 13px;
        line-height: 13px;
        background: #000;
        position: absolute;
        top: 0;
        left: 10px;
        display: block;
      }

      .btn {
        @extend .btn-label;
        font-family: PingFangSC-Medium;
        width: 60px;
        margin: 0 auto;
        height: 20px;
        line-height: 20px;
        background: #1bd5c7;
        border-radius: 10px;

        @media screen and (max-width: 360px) {
          min-width: 40px;
          height: 20px;
          line-height: 20px;
          text-align: center;
        }
      }
    }
  }

  .iconsix {
    width: 66%;
    background-color: #fff;

    @media screen and (max-width: 360px) {
      width: 60%;
    }

    float: left;
    clear: none;
    padding: 0 10px 0 0;
    height: 130px;
    position: relative;
    box-sizing: border-box;
    z-index: 2;
    border-radius: 2px;

    .wrap {
      font-family: STHeitiSC-Medium;
      font-size: 12px;
      height: 192px;
      border-radius: 5px;
      overflow: hidden;
      box-sizing: border-box;
      box-shadow: 0 0 6px 1px rgba(101, 118, 155, .15);

      .item {
        width: 33.33%;
        height: 60px;
        text-align: center;
        float: left;
        overflow: hidden;

        .icon {
          width: 24px;
          height: 24px;
          margin: 8px auto 2px;
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
