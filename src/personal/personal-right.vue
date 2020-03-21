<template>
  <div class="personal-right">
    <header>
      <b>
        <img src="../assets/lingdang.png" />
      </b>
      <i></i>
      <span class="name">Anatasia</span>
    </header>
    <div class="per-pie">
      <div id="per-pie"></div>
    </div>
    <h1>Transactions<span>Today</span></h1>
    <ul>
      <li>
        <span class="iconfont">&#xea73;</span>
        <h2>Dribbble Pro Plan</h2>
        <b class="loss">-$100</b>
      </li>
      <li>
        <span class="iconfont">&#xe6fe;</span>
        <h2>Adidas Refund</h2>
        <b class="profit">+$230</b>
      </li>
      <li>
        <span class="iconfont">&#xea73;</span>
        <h2>Wacom LCD</h2>
        <b class="loss">-$3000</b>
      </li>
    </ul>
    <router-link to="" class="transfermoney">Transfer Money</router-link>
    <router-link to="" class="iconfont information">&#xe61d;</router-link>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {}
    },
    mounted() {
      let this_ = this;
      let pieChart = echarts.init(document.getElementById('per-pie'));
      let option = {

        title: {
          text: '$5,349',
          textStyle: {
            color: '#14233c',
            fontSize: 28,
          },
          subtext: 'Balance',
          subtextStyle: {
            color: '#909090',
          },
          itemGap: 0, // 主副标题距离
          left: 'center',
          top: 'center',
        },
        angleAxis: {
          max: 100, // 满分
          clockwise: false, // 逆时针
          // 隐藏刻度线
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        radiusAxis: {
          type: 'category',
          // 隐藏刻度线
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        polar: {
          center: ['50%', '50%'],
          radius: '100%' //图形大小
        },
        series: [{
          type: 'bar',
          data: [{
            name: '占比1',
            value: 25,
            itemStyle: {
              color: '#ff2934',
            }
          }],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 20,
          barGap: '-100%', // 两环重叠
          z: 4,
        }, { // 灰色环
          type: 'bar',
          data: [{
            value: 100,
            itemStyle: {
              color: '#f8f8f8',
            }
          }],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 20,
          barGap: '-100%', // 两环重叠
          z: 1
        }, { // 蓝色环
          type: 'bar',
          data: [{
            value: 50,
            itemStyle: {
              color: '#0e809a',
            }
          }],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 20,
          barGap: '-100%', // 两环重叠
          z: 3
        }, { // 黑色环
          type: 'bar',
          data: [{
            value: 75,
            itemStyle: {
              color: '#14233c',
            }
          }],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 20,
          barGap: '-100%', // 两环重叠
          z: 2
        }]
      }
      pieChart.setOption(option);
    },

  }
</script>

<style scoped lang="less">
  div.personal-right {
    width: 100%;
    position: relative;
    min-height: 638px;
    padding-bottom: 30px;
    header {
      width: 100%;

      &::after {
        display: block;
        content: "";
        clear: both;
        visibility: hidden;
        line-height: 0;
      }

      b {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        position: relative;
        float: left;

        img {
          display: block;
          max-height: 80%;
        }

        &::after {
          content: "";
          display: block;
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: #ff2937;
          right: 14px;
          top: 14px;
          border-radius: 50%;
        }
      }

      i {
        display: block;
        width: 50px;
        height: 50px;
        background-image: url(../assets/per_img.png);
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        float: right;
      }
      span.name {
        display: block;
        width: calc(~"100% - 120px");
        float: right;
        text-align: right;
        line-height: 50px;
        font-size: 16px;
        padding: 0px 10px;
        color: #14233c;
      }
    }

    div.per-pie {
      width: 100%;
      height: 250px;

      div#per-pie {
        width: 100%;
        height: 250px;
      }
    }
    h1{
      width: 100%;
      position: relative;
      font-size: 14px;
      line-height: 24px;
      color: #a7a9b1;
      font-weight: normal;
      span{
        position: absolute;
        display: block;
        right: 0px;
        top: 0px;
        padding-right: 25px;
        font-size: 14px;
        line-height: 24px;
        color: #a7a9b1;
        &::after{
          content: ">";
          position: absolute;
          right: 0px;
          top: 2px;
          width: 20px;
          height: 20px;
          transform: rotateZ(90deg);
          font-family: simhei;
          text-align: center;
        }
      }
    }
    ul{
      width: 100%;
      margin: 10px auto 20px;
      li{
        display: block;
        width: 100%;
        margin-bottom: 10px;
        &::after{
          display: block;
          content: "";
          clear: both;
          visibility: hidden;
          line-height: 0;
        }
        span{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          box-shadow: 0px 0px 30px #eee;
          border-radius: 10px;
          font-size: 16px;
          color: #ff4d56;
          float: left;
          margin-right: 10px;
        }
        h2{
          display: block;
          text-align: left;
          width: calc(~"100% - 100px");
          line-height: 40px;
          font-size: 16px;
          float: left;
          color: #14233c;
        }
        b{
          display: block;
          text-align: right;
          width: 50px;
          line-height: 40px;
          font-size: 14px;
          float: right;
          color: #14233c;
          &.loss{
            color: #ff4d56;
          }
          &.profit{
            color: #0e809a;
          }
        }
      }
    }
    a.transfermoney{
      display: block;
      width: calc(~"100% - 40px");
      padding: 0px 20px;
      font-size: 16px;
      color: #fff;
      background-color: #ff4d56;
      border-radius: 30px;
      transition: all 0.3s;
      line-height: 40px;
      &:hover{
        opacity: 0.7;
      }
    }
    a.information{
      position: absolute;
      right: 0px;
      bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      font-size: 16px;
      color: #fff;
      background-color: #0e809a;
      border-radius: 30px;
      transition: all 0.3s;
      line-height: 40px;
      &:hover{
        opacity: 0.7;
      }
    }
  }
</style>
