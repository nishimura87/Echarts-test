<script setup lang="ts">
import VChart from 'vue-echarts';
import { ref } from "vue";

const sampleDatas: any = await import('~/assets/json/area.json');
const sampleData: number[] = sampleDatas.default;

const option = ref({
  title: {
    text: 'AreaChart',
    left: 'center',
    textStyle: {
      color: '#fff',
      lineHeight:30,
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
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
  },
  tooltip: {
  },
  legend: {
  },
  series: [
    {
      type: 'line',
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      },
      data: sampleData,
      areaStyle: {}
    }
  ],
});


</script>

<template>
  <div>
    <client-only>
      <v-chart id="chart" class="chart" :option="option" autoresize />
    </client-only>
  </div>
</template>


<style>
.chart {
  height: 300px;
  width: 100%;
}
</style>
