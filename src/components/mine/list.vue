<template>
  <div :class="$style.wrapContainer">
    <div :class="$style.warp">
      <div :class="$style.personalAssets">
        <section :class="$style.personalAssetsUser">
          <img :class="$style.header" src="https://img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" />
          <div :class="$style.info">
            <div :class="$style.name">
              <span :class="$style.userPin"></span>
            </div>
          </div>
          <div :class="$style.right">
            <span>会员福利</span>
          </div>
        </section>
      </div>
    </div>
    <div :class="$style.list">
      <div :class="$style.classify">
        <div :class="$style.icon">
          <div :class="$style.imgwrap"> <img src="../../../static/imgs/mine_1.png" /> </div>
        </div>
        <div :class="$style.info"> <span class="$style.name">我的资产</span> </div>
        <div :class="$style.benifit">查看全部资产</div>
      </div>
      <div :class="$style.classify">
        <div :class="$style.icon">
          <div :class="$style.imgwrap"> <img src="../../../static/imgs/mine_2.png" /> </div>
        </div>
        <div :class="$style.info"> <span class="$style.name">我的优惠券</span> </div>
        <div :class="$style.benifit">查看全部</div>
      </div>
    </div>
    <div :class="$style.classify">
      <div :class="$style.icon">
        <div :class="$style.imgwrap"> <img src="../../../static/imgs/mine_3.png" /> </div>
      </div>
      <div :class="$style.info"> <span class="$style.name">我的金条</span> </div>
      <div :class="$style.benifit">查看额度</div>
    </div>
    <div :class="$style.classify">
      <div :class="$style.icon">
        <div :class="$style.imgwrap"> <img src="../../../static/imgs/mine_4.png" /> </div>
      </div>
      <div :class="$style.info"> <span class="$style.name">我的借钱</span> </div>
      <div :class="$style.benifit">查看全部产品</div>
    </div>
    <div :class="$style.classify">
      <div :class="$style.icon">
        <div :class="$style.imgwrap"> <img src="../../../static/imgs/mine_5.png" /> </div>
      </div>
      <div :class="$style.info"> <span class="$style.name">我的白条</span> </div>
      <div :class="$style.benifit">去提额</div>
    </div>
    <div :class="$style.classify">
      <div :class="$style.icon">
        <div :class="$style.imgwrap"> <img src="../../../static/imgs/mine_6.png" /> </div>
      </div>
      <div :class="$style.info"> <span class="$style.name">我的资产</span> </div>
      <div :class="$style.benifit">查看全部资产</div>
    </div>
    <div :class="$style.classify">
      <div :class="$style.icon">
        <div :class="$style.imgwrap"> <img src="../../../static/imgs/mine_7.png" /> </div>
      </div>
      <div :class="$style.info"> <span class="$style.name">兑换优惠券</span> </div>
      <div :class="$style.benifit">去兑换</div>
    </div>
    <div :class="$style.classify">
      <div :class="$style.icon">
        <div :class="$style.imgwrap"> <img src="../../../static/imgs/mine_8.png" /> </div>
      </div>
      <div :class="$style.info"> <span class="$style.name">我的保障</span> </div>
      <div :class="$style.benifit">全方位保障</div>
    </div>
    <div :class="$style.classify">
      <div :class="$style.icon">
        <div :class="$style.imgwrap"> <img src="../../../static/imgs/mine_8.png" /> </div>
      </div>
      <div :class="$style.info"> <span class="$style.name">我的保障</span> </div>
      <div :class="$style.benifit">查看全部资产</div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" module>
  .wrapContainer {
    margin: 45px 0 0;

    .personalAssets {
      background: #fff;

      .personalAssetsUser {
        height: 70px;
        color: #fff;
        background-color: #fff;
        overflow: hidden;
        position: relative;

        .header {
          width: 50px;
          border-radius: 50%;
          margin: 10px 16px 0;
          float: left;
        }

        .info {
          width: 47%;
          float: left;

          .name {
            font-size: 17px;
            color: #333;
            width: 100%;
            height: 23px;
            line-height: 23px;
            margin-top: 14px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }

          .userPin {
            display: inline-block;
            font-size: 13px;
            height: 20px;
            line-height: 20px;
            color: #999;
            margin-top: 4px;
            overflow: hidden;
          }
        }

        .right {
          height: 30px;
          line-height: 30px;
          margin-top: -15px;
          color: #999;
          overflow: hidden;
          position: absolute;
          right: 16px;
          top: 50%;

          >span {
            font-size: 14px;
          }

          img {
            width: 7px;
            display: inline-block;
            margin-left: 10px;
            vertical-align: middle;
          }
        }
      }
    }


    .before {
      content: '';
      position: absolute;
      height: 1px;
      display: block;
      left: 0;
    }

    .list{
      margin-top: 10px;
    }

    .classify {
      height: 56px;
      position: relative;
      overflow: hidden;
      background: #fff;
      >div {
        height: 44px;
        line-height: 44px;
        margin: 13px 0 0;
        box-sizing: border-box;
      }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 1px;
        display: block;
        background: #dedede;
        transform: scaleY(.5);
        transform-origin: left bottom;
        bottom: 1px;
      }

      .icon {
        width: 24px;
        font-size: 12px;
        display: block;
        text-align: center;
        margin: 12px 10px 0;
        float: left;
        color: #9891FF;

        &:before {
          @extend .before;
          bottom: 0;
          width: 100%;
          transform: scaleY(.5);
          transform-origin: left bottom;
          background: #fff;
          z-index: 2;
        }

        .imgwrap {
          img {
            width: 100%;
          }
        }
      }

      .info {
        max-width: 35%;
        text-align: left;
        float: left;
        margin-top: 6px;

        .name {
          font-size: 16px;
          color: #333;
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }

      .benifit {
        margin-top: 6px;
        font-size: 14px;
        max-width: 39%;
        padding: 0 18px 0 10px;
        margin-right: 16px;
        background: url('../../../static/imgs/more.png') center right no-repeat;
        background-size: 9px 15px;
        text-align: left;
        float: right;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #999999;
      }
    }
  }
</style>
