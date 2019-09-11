<template lang="html">
  <div class="header">
    <div class="headerBg1"></div>
    <div class="content">
      <div class="titCon">
        <div class="point"></div>
        <span class="pointImg">借钱 随借随还</span>
        <div class="banner">
          <img src="https://img10.360buyimg.com/mcmktadmin/jfs/t1/72463/25/8996/20575/5d6c81c3E28dec4f7/ae5972f40b0301c2.png?width=278&height=78" />
        </div>
      </div>
      <div class="waitPayCon"></div>
      <div class="overflow">
        <div class="cardCon">
          <div class="cardList">
            <div class="miniCardList">
              <div class="miniCard">
                <img class="backimg" src="../../../static/imgs/b_bg_list_1.png" />
                <h3>最高可借</h3>
                <div class="contentTitle">
                  <div class="contentNumber">200,000.00</div>
                </div>
                <img class="btnimg" src="../../../static/imgs/b_bg_btn1.png" />
              </div>
            </div>
            <div class="miniCardList">
              <div class="miniCard">
                <img class="backimg" src="../../../static/imgs/b_bg_list_2.png" />
                <h3>最高可借</h3>
                <div class="contentTitle">
                  <div class="contentNumber">300,000.00</div>
                </div>
                <img class="btnimg" src="../../../static/imgs/b_bg_btn2.png" />
              </div>
            </div>
            <div class="miniCardList">
              <div class="miniCard">
                <img class="backimg" src="../../../static/imgs/b_bg_list_3.png" />
                <h3>最高可借</h3>
                <div class="contentTitle">
                  <div class="contentNumber">500,000.00</div>
                </div>
                <img class="btnimg" src="../../../static/imgs/b_bg_btn3.png" />
              </div>
            </div>
            <div class="miniCardList">
              <div class="moreCard">
                <img class="backimg" src="../../../static/imgs/b_bg_list_4.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="titCon">
        <div class="point"></div>
        <span class="pointImg">赚钱 超高利率</span>
        <div class="banner">
          <img src="https://img10.360buyimg.com/mcmktadmin/jfs/t1/49487/31/9393/14607/5d6c8ca9E71e1e440/97cf522e1ec11755.png?width=278&height=78" />
        </div>
      </div>
      <div class="cardCon">
        <div class="astCard">
          <div class="astCardFooter">
            <div class="yearAst">
              <p class="perAst">2.75%</p>
              <p class="perAstText">近7日年化</p>
            </div>
            <div class="bankAll">
              <div class="bankAst">
                <div>
                  <span class="bank">京东小金库</span>
                </div>
                <p>当前收益最高产品</p>
              </div>
              <div class="bankAstRun bankAstRight">
                <img src="../../../static/imgs/b_bank_r.png" />
              </div>
            </div>
          </div>
          <div class="astCardFooter">
            <div class="yearAst">
              <p class="perAst">4.80%</p>
              <p class="perAstText">储蓄存款利率</p>
            </div>
            <div class="bankAll">
              <div class="bankAst">
                <div>
                  <span class="bank">精选360天</span>
                </div>
                <p>银行精选丨+3%奖励</p>
              </div>
              <div class="bankAstRun bankAstRight">
                <img src="../../../static/imgs/b_bank_r.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .header {
    position: relative;
    padding-top:10px;

    .commonBgImg {
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      z-index: -1;
      background-size: 100% 100%;
    }

    .headerBg1 {
      @extend .commonBgImg;
      height: 260px;
      background-image: url('~static/imgs/b_bg_h.png');
    }

    .content {
      margin-bottom: 20px;
      width: 100%;
      padding-top:2px;

      .titCon {
        height: 35px;
        padding: 0 16px;
        position: relative;

        .point {
          display: block;
          content: "";
          position: absolute;
          background: url('~static/imgs/b_bg_point.png') 50% no-repeat;
          width: 17px;
          height: 17px;
          background-size: contain;
          z-index: -1;
          left: -10px;
          top: -15px;
        }

        .pointImg {
          display: inline-block;
          width: 180px;
          overflow: hidden;
          white-space: nowrap;
          font-size: 18px;
          letter-spacing: 0;
          font-family: PingFangSC-Semibold, Microsoft YaHei;
          font-weight: 700;
          color: #fff;
        }

        .banner {
          text-decoration: none;
          display: block;
          position: absolute;
          right: 15px;
          top: -6px;
          line-height: 35px;

          >img {
            width: 120px;
            height: 35px;
          }
        }
      }

      .waitPayCon {
        margin: 15px auto;
      }

      .overflow {
        overflow: hidden;
        .cardCon {
          overflow: scroll hidden;
          padding-bottom: 15px;
          padding: 0 15px;

          .cardList {
            width: 780px;
            height: 125px;

            .moreCard {
              float: left;
              width: 103px;
              height: 123px;

              >img {
                width: 100%;
                height: 100%;
              }
            }

            .miniCard {
              width: 200px;
              height: 125px;
              float: left;
              margin-left: 14px;

              &:last-child {
                margin-right: 14px;
              }

              &:first-of-type {
                margin-left: 0;
              }

              .backimg {
                width: 100%;
                height: 100%;
              }

              >h3 {
                opacity: .8;
                font-family: PingFangSC-Medium;
                font-size: 12px;
                color: #fff;
                letter-spacing: 2px;
                margin-top: -105px;
                padding-left: 15px;
                line-height: 15px;
              }

              .contentTitle {
                font-family: UDC1\.04-Bold;
                font-size: 15px;
                color: #fff;
                letter-spacing: 0;
                padding-left: 15px;
                margin-bottom: 15px;
                margin-top: 5px;
                display: flex;
              }

              .btnimg {
                width: 88px;
                height: 35px;
                margin-left: 12px;
                margin-top: -5px;
              }


            }

          }
        }
      }

      .astCard {
        box-sizing: border-box;
        width: 300px;
        background: #fff;
        box-shadow: 0 5px 18px 0 rgba(61, 63, 83, .12);
        border-radius: 10px;
        padding: 0 15px;
        margin: 10px auto 0;

        .astCardFooter {
          height: 68px;
          width: 265px;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #999;
          letter-spacing: 0;
          display: flex;
          padding-bottom: 16px;
          box-sizing: border-box;

          .yearAst {
            padding-right: 20px;
            margin-right: 13px;
            border-right: 1px solid #efefef;
            width: 96px;
            margin-top: 5px;

            .perAst {
              font-family: UDC1\.04-Bold;
              font-size: 18px;
              color: #ff6b00;
              letter-spacing: 0;
            }
          }

          .perAstText {
            width: 70px;
            overflow: hidden;
            white-space: nowrap;
          }

          .bankAll {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding-top: 15px;

            .bank {
              font-family: PingFangSC-Medium;
              font-size: 14px;
              color: #000;
              letter-spacing: 0;
              text-align: left;
              max-width: 80px;
              overflow: hidden;
              white-space: nowrap;
              display: inline-block;
            }
          }

          .bankAstRun {
            img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }


    }
  }
</style>
