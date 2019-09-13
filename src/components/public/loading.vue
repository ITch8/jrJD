<!-- 加载框组件 -->
<template>
  <div class="loading-toast">
    <div class="loading-content"><div class="loading-img"></div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.loading-common {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-toast {
  @extend .loading-common;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  text-align: center;
  .loading-content {
    @extend .loading-common;
    height: 56px;
    width: 56px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    .loading-img {
      height: 36px;
      width: 36px;
      border-color: rgba(0, 0, 0, 0.8) #fff #fff rgba(0, 0, 0, 0.8);
      border-style: solid;
      border-width: 5px;
      border-radius: 50%;
      -webkit-animation: loading-anim 0.8s linear infinite;
      animation: loading-anim 0.8s linear infinite;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
}
</style>
