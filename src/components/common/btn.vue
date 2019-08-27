<template  lang="html">
  <div :class="[defaultClass,className]">
    <slot/>
  </div>
</template>

<script>
  export default{
    props:{
      className:{
        type:String,
        default:""
      }
    },
    data(){
      return {
        defaultClass:'btn'
      }
    }
  }
</script>

<style lang="scss">
  @import '@/style/element.scss';

  .btn{
    @include btn;
  }

</style>
