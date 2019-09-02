<!-- 脱离业务的抽象， 利用vue-awesome-swiper  https://www.npmjs.com/package/vue-awesome-swiper-->
<template lang="html">
  <section :class="className">
    <swiper :options="swiperOption" :not-next-tick="swiperOption.notNextTick">
      <swiper-slide v-for="item in dataList" :key="item.link">
        <img :src="item.img" alt="" />
      </swiper-slide>
      <div v-if="swiperOption.pagination" class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default{
    name:'slider',
    components:{
      swiper,
      swiperSlide
    },
    props:{
      className:{
        type:String,
        default:""
      },
      swiperOption:{
        type:Object,
        default(){
          return {// 所有的参数同 swiper 官方 api 参数
                autoplay:true,
                loop:true,
                pagination:{
                  el:".swiper-pagination"
                },
                notNextTick:false
          }
        }
      },
      dataList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
      }
    }
  }
</script>

<style>
  @import 'swiper/dist/css/swiper.css';
</style>
