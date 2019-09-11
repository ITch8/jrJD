<template>
  <section :class="$style.floor">
    <div :class="$style.floorTitle" v-if="title != ''">
      <div :class="$style.title">{{title}}</div>
      <div v-if="subtitle != ''" :class="$style.subtitle">{{subtitle}}</div>
    </div>
    <div :class="$style.imgMg"><img :src="imgUrl" :class="$style.advImg" /></div>
  </section>
</template>

<script>
  export default {
    props: {
      imgUrl: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      subtitle: {
        type: String,
        default: ''
      },
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" module>
  .floor {
    background-color: #fff;
    clear: both;
    overflow: hidden;
    padding: 0 0 10px;
    .advImg {
      width: 100%;
    }

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

    .imgMg {
      margin: 0 15px;
    }
  }
</style>
