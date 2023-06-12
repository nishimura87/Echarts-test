<script setup lang="ts">
import VChart from 'vue-echarts';
import { ref } from "vue";

const sampleDatas: any = await import('~/assets/json/bar2.json');
const sampleData: number[] = sampleDatas.default;

const option = ref({
  title: {
    text: 'BarChart2',
    left: 'center',
    textStyle: {
      color: '#fff',
      lineHeight: 30,
    }
  },
  xAxis: {
    type: 'category',
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
  },
  yAxis: {
    type: 'value',
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    max: 100
  },
  tooltip: {
  },
  legend: {
  },
  series: [
    {
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      },
      data: sampleData,
    }
  ]

});
</script>

<template>
  <div>
    <v-chart class="chart" :option="option" autoresize />
  </div>
</template>

<style>
.chart {
  height: 300px;
  width: 100%;
}
</style>
