<!-- 赚钱页面 对赏金任务、定期精选等相同模块的封装-->
<template>
  <section :class="$style.floor">
    <div :class="$style.floorTitle">
      <div :class="$style.title">{{title}}</div>
      <div v-if="subtitle != ''" :class="$style.subtitle">{{subtitle}}</div>
      <div :class="$style.welfCenter">
        <div :class="$style.weContent">
          <div :class="$style.contentLeft"></div>
          <div :class="$style.contentText">免费领京豆奖励</div>
          <div :class="$style.contentButton">
            <div :class="$style.buttonText">立即领取</div>
          </div>
        </div>
        <div :class="$style.weBottom">
          <div :class="[$style.bottomList, $style.sLine] ">兑神券</div>
          <div :class="[$style.bottomList, $style.sLine]">开福袋</div>
          <div :class="[$style.bottomList, $style.sLine]">趣中奖</div>
          <div :class="$style.bottomList">摇钱树</div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    components: {},
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
    margin-bottom: 10px;

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

  .welfCenter {
    width: 300px;
    height: 110px;
    box-sizing: border-box;
    margin: 0 auto 10px;
    background: url('/static/imgs/s_bg_award.png') no-repeat;
    background-size: cover;
    box-shadow: 0 5px 15px 0 rgba(61, 63, 83, .12);
    border-radius: 5px;
    padding: 0 16px;
    box-sizing: padding-box;

    .weBottomAndContent {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .weContent {
      @extend .weBottomAndContent;
      height: 70px;
      font-weight: bold;

      .contentLeft {
        height: 38px;
        width: 38px;
        background: url('https://img10.360buyimg.com/mcmktadmin/jfs/t1/27454/32/12048/7347/5c94bdd0E6e9d9a25/611102ce5816adb0.png?width=88&height=88') 0% 0% / cover no-repeat;
      }

      .c-text {
        transition: all .3s linear;
        display: flex;
        align-items: center;
      }

      .contentText {
        @extend .c-text;
        flex: 1;
        max-width: 125px;
        height: 38px;
        overflow: hidden;
        font-family: PingFangTC-Medium;
        font-size: 13px;
        color: #511c00;
        font-weight: 700;
      }

      .contentButton {
        height: 27px;
        width: 52px;
        background: #ff6e00;
        border-radius: 12px;
        color: #fff;
        box-shadow: 0 5px 8px 0 rgba(255, 110, 0, .26);
        font-family: PingFangSC-Semibold;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding:0 5px;

        .buttonText {
          @extend .c-text;
          height: 100%;
        }
      }
    }

    .weBottom {
      @extend .weBottomAndContent;
      height: 35px;
      width: 280px;

      .bottomList {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999;
        text-align: center;
        height: 15px;
        line-height: 15px;
        position: relative;
        left: 0;
        top: 0;
        flex: 1;
      }

      .sLine {
        border-right: 1px solid rgb(153, 153, 153);
      }
    }
  }
</style>
