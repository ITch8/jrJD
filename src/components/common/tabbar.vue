<template lang="html">
  <section class="bottom">
    <div class="add-bottom">
      <div class="bottom-item" @click="navTo('/home')">
        <img src="../../../static/imgs/t_1.png" />
        <p :class="{ 'main-color':'/home' === $route.path}">首页</p>
      </div>
      <div class="bottom-item"  @click="navTo('/money')">
        <img src="../../../static/imgs/t_2.png" />
        <p :class="{ 'main-color':'/money' === $route.path}">赚钱</p>
      </div>
      <div class="bottom-item" @click="navTo('/borrow_money')">
        <img src="../../../static/imgs/t_3.png" />
        <p>借钱</p>
      </div>
      <div class="bottom-item" @click="navTo('/save_money')">
        <img src="../../../static/imgs/t_4.png" />
        <p :class="{ 'main-color':'/save_money' === $route.path}">省钱</p>
      </div>
      <div class="bottom-item">
        <img src="../../../static/imgs/t_5.png" />
        <p>金融会员</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'tabbar',
    data() {
      return {}
    },
    methods: {
      navTo(path) {
        if(this.$route.path != path){
          this.$router.replace(path)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '@/style/element.scss';

  .bottom {
    position: fixed;
    z-index: 9;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
  }

  .add-bottom {
    width: 100%;
    height: 50px;
    background: #fff;
    box-shadow: 0 -3px 4px rgba(0, 0, 0, .03);
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    .bottom-item {
      height: inherit;
      overflow: hidden;
      display: block;
      text-align: center;
      flex: 1;
      box-flex: 1;
      position: relative;

      img {
        width: 28px;
        margin: 0 auto -4px;
      }

      p {
        min-width: 2.9em;
        font-size: 11px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #333333;
      }

      .main-color {
          color: $maincolor;
      }
    }
  }
</style>
