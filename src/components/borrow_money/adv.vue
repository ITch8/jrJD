<template>
  <section :class="$style.floor">
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
    padding:  0 10px 10px;

    .advImg {
      width: 100%;
    }
  }
</style>
