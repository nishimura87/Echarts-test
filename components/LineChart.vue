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
import { ref, onMounted } from "vue";
import 'echarts/lib/component/markLine';

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
const sample5: number[] = [];
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
for (let i = 0; i < length; i++) {
  sample5.push(getRandomInt(max));
}

const sessionTime = 100;


const sliderValue = ref(0);

if (typeof document !== 'undefined') {
  const value: any = document.getElementById('input-range');
  console.log(value);
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
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 5,
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
    },
    {
      type: 'value',
      data: array1,
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 5
    }
  ],
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 100,
      height: 30,
      xAxisIndex: [0,1,2,3,4,5]
    },
    {
      type: 'slider',
      start: 0,
      end: 100,
      height: 30,
      xAxisIndex: [0,1,2,3,4,5]
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
      markLine: {
        animation: false,
        symbol: 'none',
        label: {
          show: false
        },
        lineStyle: {
          type: 'dashed',
          color: 'red',
          width: '3'
        },
        data: [{ xAxis: sliderValue }]
      }
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
      yAxisIndex: 1,
      markLine: {
        animation: false,
        symbol: 'none',
        label: {
          show: false
        },
        lineStyle: {
          type: 'dashed',
          color: 'red',
          width: '3'
        },
        data: [{ xAxis: sessionTime }]
      }
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
      yAxisIndex: 2,
      markLine: {
        animation: false,
        symbol: 'none',
        label: {
          show: false
        },
        lineStyle: {
          type: 'dashed',
          color: 'red',
          width: '3'
        },
        data: [{ xAxis: sessionTime }]
      }
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
      yAxisIndex: 3,
      markLine: {
        animation: false,
        symbol: 'none',
        label: {
          show: false
        },
        lineStyle: {
          type: 'dashed',
          color: 'red',
          width: '3'
        },
        data: [{ xAxis: sessionTime }]
      }
    },
    {
      name: 'Fake Data5',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'rgba(0, 0, 255, 1)'
      },
      data: array5,
      xAxisIndex: 4,
      yAxisIndex: 4,
      markLine: {
        animation: false,
        symbol: 'none',
        label: {
          show: false
        },
        lineStyle: {
          type: 'dashed',
          color: 'red',
          width: '3'
        },
        data: [{ xAxis: sessionTime }]
      }
    },
    {
      name: 'Fake Data5',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'rgba(114, 114, 114, 0.7)'
      },
      data: sample5,
      xAxisIndex: 5,
      yAxisIndex: 5,
    }
  ],
});
</script>

<template>
  <div>
    <client-only>
      <v-chart id="chart2" class="chart2" :option="option" autoresize />
      <input id="input-range" v-model="sliderValue" type="range" min="0" max="200" class="slider" />
      <input v-model="sliderValue" type="number" class="input" />
    </client-only>
  </div>
</template>


<style>
.chart2 {
  height: 600px;
}

.slider {
  width: 100%;
}

.example {
  color: #fff;
}
</style>
