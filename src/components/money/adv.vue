<template>
  <section :class="$style.floor">
    <div :class="$style.floorTitle" v-if="title != ''">
      <div :class="$style.title">{{title}}</div>
    </div>
    <img :src="imgUrl" :class="$style.advImg" />
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

<style lang="scss" module>
  .floor {
    background-color: #fff;
    clear: both;
    overflow: hidden;
    padding:  0 0 10px;

    .advImg {
      width: 100%;
    }

    .floorTitle {
      font-family: PingFangSC-Semibold;
      position: relative;
      background: #fff;

      .title {
        height: 50px;
        line-height: 50px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 16px;
        font-weight: 700;
        padding: 10px;
      }
    }
  }
</style>
