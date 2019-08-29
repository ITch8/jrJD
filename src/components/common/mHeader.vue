<template>
  <div class="m_common_header2">
    <header class="jd-header">
      <div class="jd-header-new-bar">
        <div class="jd-header-icon-back J_ping"><span></span></div>
        <div class="jd-header-new-title">{{title}}</div>
      </div>
    </header>
  </div>
</template>

<script>
  export default{
    name:'m-header',
    props:{
      title:{
        type:String,
        default:"京东金融"
      }
    }
  }
</script>

<style lang="scss">
  .m_common_header2 {
      width: 100%;
      min-height: 44px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10001;
      .jd-header {
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: 44px;
          text-decoration: none;
          color: #252525;
          .jd-header-new-bar {
              position: relative;
              border-bottom: 1px solid #e5e5e5;
              min-height: 44px;
              background: #fff;
              .jd-header-icon-back, .jd-header-icon-logo {
                  position: absolute;
                  width: 40px;
                  height: 44px;
              }
              .jd-header-icon-back span {
                  margin: 12px 0 0 10px;
                  width: 20px;
                  height: 20px;
                  background: url('~static/imgs/back.png') no-repeat center;
                  background-position: 0 0;
                  -webkit-background-size: contain;
                  background-size: contain;
                  overflow: hidden;
                  text-indent: -100px;
                  display: block;
              }
              .jd-header-new-title {
                  margin: 0 70px;
                  height: 44px;
                  font-size: 16px;
                  line-height: 44px;
                  text-align: center;
                  color: #333;
                  overflow: hidden;
                  -o-text-overflow: ellipsis;
                  text-overflow: ellipsis;
                  white-space: nowrap;
              }
          }
      }
      .jd-header, .jd-header a {
          font-family: "PingHei","Lucida Grande","Lucida Sans Unicode","STHeiti","Helvetica","Arial","Verdana","sans-serif";
          font-size: 16px;
          text-decoration: none;
          color: #252525;
      }
  }

</style>
