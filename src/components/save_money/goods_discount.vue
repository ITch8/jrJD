<template lang="html">
  <ul :class="$style.list">
    <li>
      <div :class="$style.item">
        <img src="https://img10.360buyimg.com/mcmktadmin/jfs/t1/41901/34/4212/13119/5cd13cf3E104d0123/7e8525c3ebc9d803.png?width=194&height=195" />
        <div :class="$style.itemG">
          <div :class="$style.itemName">OPPO Reno 全面屏拍照手机 6G+256G 雾海绿</div>
          <div :class="$style.itemPrice"><span :class="$style.price">¥550</span> <span :class="$style.unit">/每月</span> </div>
        </div>
      </div>
    </li>
    <li>
      <div :class="$style.item">
        <img src="https://img10.360buyimg.com/mcmktadmin/jfs/t1/34958/6/1987/9167/5cb48cb0Ea7fb1ca7/a70d94ff2ccdce4d.png?width=194&height=195" />
        <div :class="$style.itemG">
          <div :class="$style.itemName">SK-II神仙水75ml补水保湿精华液礼盒</div>
          <div :class="$style.itemPrice"><span :class="$style.price">¥550</span> <span :class="$style.unit">/每月</span> </div>
        </div>
      </div>
    </li>
    <li>
      <div :class="$style.item">
        <img src="https://img10.360buyimg.com/mcmktadmin/jfs/t1/34010/19/4896/11765/5cb87ce5E22762883/64f63b9763abdacb.png?width=194&height=195" />
        <div :class="$style.itemG">
          <div :class="$style.itemName">Kindle Oasis电子书阅读器 32G 银灰色</div>
          <div :class="$style.itemPrice"><span :class="$style.price">¥550</span> <span :class="$style.unit">/每月</span> </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {}
</script>

<style lang="scss" module>
  @import '@/style/element.scss';

  .list {
    @include list(row);
    margin-bottom:10px;
    >li {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 33%;
      background-color: #fff;

      .item {
        margin: 5px 5px;
        >img {
          width: 100%;
        }

        .itemG {
          padding: 5px;
          .itemName {
            font-family: PingFangTC-Medium;
            font-size: 12px;
            color: #000;
            line-height: 19px;
            height: 40px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            word-break: break-all;
          }

          .itemPrice {
            width: 100px;
            .price {
              font-family: UDC1\.04-Bold;
              font-size: 12px;
              color: #ff6b00;
              letter-spacing: 0;
            }

            .unit {
              font-family: PingFangSC-Medium;
              font-size: 12px;
              color: #999;
              letter-spacing: 0;
            }
          }
        }
      }
    }
  }
</style>
