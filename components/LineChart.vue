<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LabelLayout } from 'echarts/features';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref } from "vue";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LabelLayout,
  DataZoomComponent
]);

function getRandomInt(max:number) {
  // ランダムな配列
  return Math.floor(Math.random() * Math.floor(max));
}

const array1: number[] = [];
const array2: number[] = [];
const array3: number[] = [];
const array4: number[] = [];
const array5: number[] = [];
const max = 100;
const length = 200;
for (let i = 0; i < length; i++) {
  array1.push(getRandomInt(max));
}
for (let i = 0; i < length; i++) {
  array2.push(getRandomInt(max));
}
for (let i = 0; i < length; i++) {
  array3.push(getRandomInt(max));
}
for (let i = 0; i < length; i++) {
  array4.push(getRandomInt(max));
}
for (let i = 0; i < length; i++) {
  array5.push(getRandomInt(max));
}

const option = ref({
  title: {
    text: 'LineChart',
    left: 'center',
    textStyle: {
      color: '#fff',
      lineHeight:30,
    }
  },
  tooltip:{
    trigger:'axis',
    axisPointer:{
      type: 'cross'
    },
  },
  axisPointer: {
    link: [
      {
        xAxisIndex: 'all'
      }
    ],
    label: {
      backgroundColor: '#777'
    }
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 0,
      axisPointer: {
            z: 100
          }
    },
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 1,
    },
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 2,
    },
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 3,
    },
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 4,
    },
  ],
  yAxis: [
    {
      type: 'value',
      data: array1,
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 0
    },
    {
      type: 'value',
      data: array1,
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 1
    },
    {
      type: 'value',
      data: array1,
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 2
    },
    {
      type: 'value',
      data: array1,
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 3
    },
    {
      type: 'value',
      data: array1,
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 4
    }
  ],
  dataZoom: [
    {
      start: 0,
      end: 100,
      heigh: 20,
      xAxisIndex: [0, 1, 2, 3, 4],
    }
  ],
  grid: [
    {
    bottom: '10%',
    left: 10,
    right: 10,
    height: '15%'
    },
    {
    bottom: '27%',
    left: 10,
    right: 10,
    height: '15%'
    },
    {
    bottom: '44%',
    left: 10,
    right: 10,
    height: '15%'
    },
    {
    bottom: '61%',
    left: 10,
    right: 10,
    height: '15%'
    },
    {
    bottom: '77%',
    left: 10,
    right: 10,
    height: '15%'
    },
  ],
  series: [
    {
      name: 'Fake Data1',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'red'
      },
      data: array1,
    },
    {
      name: 'Fake Data2',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'green'
      },
      data: array2,
      xAxisIndex: 1,
      yAxisIndex: 1
    },
    {
      name: 'Fake Data3',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'pink'
      },
      data: array3,
      xAxisIndex: 2,
      yAxisIndex: 2
    },
    {
      name: 'Fake Data4',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'yellow'
      },
      data: array4,
      xAxisIndex: 3,
      yAxisIndex: 3
    },
    {
      name: 'Fake Data5',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'blue'
      },
      data: array5,
      xAxisIndex: 4,
      yAxisIndex: 4
    }
  ],
});


</script>

<template>
  <div>
    <client-only>
      <v-chart id="chart2" class="chart2" :option="option" autoresize />
    </client-only>
  </div>
</template>


<style>
.chart2 {
  height: 600px;
}
</style>
