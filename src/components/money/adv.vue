<template>
  <section class="floor">
    <div class="floor-title" v-if="title != ''">
      <div class="title">{{title}}</div>
    </div>
    <img :src="imgUrl" class="adv-img" />
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
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
  .floor {
    background-color: #fff;
    clear: both;
    overflow: hidden;
    padding:10px 0;

    .floor-title {
      font-family: PingFangSC-Semibold;
      position: relative;
      background: #fff;

      .title {
        max-width: 40%;
        height: 3.75rem;
        line-height: 3.75rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 1.125rem;
        font-weight: 700;
        padding: 0 .9375rem;
      }
    }
  }

  .adv-img {
    width: 100%;
  }
</style>
