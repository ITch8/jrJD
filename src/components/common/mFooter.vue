<template lang="html">
  <div class="footer">
    <div class="copyright">
      <p>Copyright © 2004-2018 京东JD.com 版权所有</p>
    </div>
    <div class="copyright">
      <p>投资有风险，购买需谨慎</p>
      <p>京东金融平台服务协议</p>
      <p>京东金融隐私政策</p>
    </div>
  </div>
</template>

<script>
  export default{
    name:'m-footer',
    data(){
      return{

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/style/element.scss';

  .footer {
    background-color: $bgcolor;

    .copyright {
      min-height: 36px;

      p {
        font-size: 12px;
        line-height: 1.6;
        padding: 12px 16px;
        text-align: center;
        color: #999;
        position: relative;
        box-sizing: border-box;

        &:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          display: block;
          transform: scaleY(.5);
          transform-origin: 0 0;
          background: #DDD;
          content: '';
        }
      }
    }
  }
</style>
