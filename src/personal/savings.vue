<template>
  <div class="saving-echarts">
    <div id="chart_example"></div>
    <ul class="saving-text">
      <li>
        <span>Total：</span>
        <b>$100.09</b>
      </li>
      <li>
        <span>Total：</span>
        <b>$100.09</b>
      </li>
      <li>
        <span>Total：</span>
        <b>$100.09</b>
      </li>
    </ul>
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
      let myChart = echarts.init(document.getElementById('chart_example'));
      let option = {
        grid: {
          top: '10%',
          left: '0%',
          bottom: '10%',
          width:"100%",
          containLabel: true
        },
        color: ['#33a4be'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: ['$10', '$20', '$30', '$40', '$50'],
          axisLine: { //y轴
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          data: [0, 25, 50, 100],
          axisLabel: {
            formatter: '{value} %'
          },
          axisLine: { //y轴
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#e1ebe8'],
              width: 1,
              type: 'dashed'
            }
          },
          axisTick: {
            show: false
          },
          show: true
        },
        series: [{
          data: [50, 60, 29, 33, 92],
          type: 'line',
          smooth: true
        }]
      };
      myChart.setOption(option);
    },

  }
</script>

<style scoped lang="less">
  div.saving-echarts {
    position: relative;
    overflow-x: hidden;
    div#chart_example {
      width: 100%;
      max-width: 300px;
      height: 200px;
    }
    ul{
      position: absolute;
      right: 0px;
      top: 0px;
      width: calc(~"100% - 320px");
      li{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        span{
          display: block;
          width: 50%;
          font-size:14px;
          line-height: 24px;
          text-align: left;
          color: #a7a9b1;
        }
        b{
          display: block;
          width: 50%;
          font-size:14px;
          line-height: 24px;
          text-align: right;
          color: #1a2941;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
      /* 兼容小屏 */
      div.saving-echarts {
        ul{
          display: none;
        }
      }
  }
</style>
