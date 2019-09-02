<template>
  <div :class="$style.header">
    <header :class="$style.jdHeader">
      <div :class="$style.newBar">
        <div v-if="isBack" :class="$style.iconBack"><span></span></div>
        <div :class="$style.newTitle">{{title}}</div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'm-header',
    props: {
      isBack:{
        type:Boolean,
        default:false
      },
      title: {
        type: String,
        default: "京东金融"
      }
    }
  }
</script>

<style lang="scss" module>
  .header {
    width: 100%;
    min-height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10001;

    .jdHeader {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 44px;
      text-decoration: none;
      color: #252525;

      .newBar {
        position: relative;
        border-bottom: 1px solid #e5e5e5;
        min-height: 44px;
        background: #fff;

        .iconBack {
          position: absolute;
          width: 40px;
          height: 44px;
        }

        .iconBack span {
          margin: 12px 0 0 10px;
          width: 20px;
          height: 20px;
          background: url('/static/imgs/back.png') no-repeat center;
          background-position: 0 0;
          background-size: contain;
          overflow: hidden;
          text-indent: -100px;
          display: block;
        }

        .newTitle {
          margin: 0 70px;
          height: 44px;
          font-size: 16px;
          line-height: 44px;
          text-align: center;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }

    .jd-header,
    .jd-header a {
      font-family: "PingHei", "Lucida Grande", "Lucida Sans Unicode", "STHeiti", "Helvetica", "Arial", "Verdana", "sans-serif";
      font-size: 16px;
      text-decoration: none;
      color: #252525;
    }
  }
</style>
