<template lang="html">
  <panel :hasTitle="hasTitle" :className='cls'>
    <ul class="list">
      <li v-for="(item,index) in items" :key="index" :class="[ items.length % 4 > 0?'col-5':'col-4','list-item' ]" @click="navTo(item.path)">
        <div class="img-wrap">
          <img class="img" :src="item.img" />
          <span class="title">{{item.title}}</span>
          <span class="desc">{{item.desc}}</span>
        </div>
      </li>
    </ul>
  </panel>
</template>

<script>
  import Panel from '@/components/common/panel.vue'
  export default {
    name: 'items',
    components: {
      Panel
    },
    props: {
      items: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        hasTitle: false,
        cls:'cls'
      }
    },
    methods:{
      navTo(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="scss">
  @import '@/style/element.scss';
  .panel {
    @include panel;
  }

  .cls{
    padding: 0 !important;
  }

  .list {
    @include list(row);
    width: 100%;
    min-height: 85px;
    padding: 15px 0 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;

    .col-5{
      width: $width-col5;
    }
    .col-4{
      width: $width-col4;
    }
    .list-item {
      display: flex;
      height: inherit;
      text-align: center;

      .img {
        width: 100%;
        max-width: 40px;
      }

      .img-wrap {
        margin: 0 auto;
      }

      .title {
        font-size: 13px;
        text-align: center;
        display: block;
        color: #666;
        margin-top: 6px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .desc {
        font-size: 11px;
        text-align: center;
        display: block;
        color: #FF801A;
        margin-top: 4px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
</style>
