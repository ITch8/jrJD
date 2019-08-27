<template lang="html">
  <section :class="[defaultClass,className]">
    <h4>- {{title}} -</h4>
    <slot/>
  </section>
</template>

<script>
  export default{
    props:{
      title:{
        type:String,
        default:""
      },
      className:{
        type:String,
        default:""
      }
    },
    data(){
      return{
        defaultClass:'panel'
      }
    }
  }
</script>

<style lang="scss">
  @import '@/style/element.scss';
  .panel{
    @include panel;
  }

</style>
