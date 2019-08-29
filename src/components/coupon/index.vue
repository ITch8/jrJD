<template lang="html">
  <div class="react-view">
    <div class="view">
      <div class="view-tag">
        <span>精选</span>
        <div class="view-pointto-down"></div>
      </div>
    </div>
    <div class="view">
      <div class="view-tag">
        <span>全部</span>
        <div class="view-pointto-down"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~@/style/element.scss';

  .react-view {
    @include flex(row);
  }

  .view {
    flex: 1 1 0%;
    background-color: rgb(255, 255, 255);
    flex-direction: row;

    &-tag {

      >span {
        display: inline-block;
        margin: 0px;
        padding: 0px;
        overflow-wrap: break-word;
        font-family: "Helvetica Neue", STHeiTi, sans-serif;
        color: rgb(255, 81, 62);
        font-size: 14px;
        font-weight: 600;
        line-height: 16.8px;
      }

      .view-point {
        margin-left: 6px;
        width: 4px;
        height: 4px;
        border-style: solid;
        border-width: 4px 4px 0px;
        border-color: rgb(153, 153, 153) transparent black;
      }

      .view-pointto-down {
        @extend .view-point;
      }

      .view-pointto-up {
        @extend .view-point;
        transform: rotate(180deg);
      }
    }
  }
</style>
