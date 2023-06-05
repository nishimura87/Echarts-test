<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LabelLayout } from 'echarts/features';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import 'echarts/lib/component/dataZoom';

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LabelLayout
]);

function getRandomInt(max) {
  // ランダムな配列
  return Math.floor(Math.random() * Math.floor(max));
}

const array1 = [];
const array2 = [];
const array3 = [];
const array4 = [];
const array5 = [];
const max = 100;
const length = 200
for (let i = 0; i < length; i++) {
  array1.push(getRandomInt(max));
}
for (let i = 0; i < length; i++) {
  array2.push(getRandomInt(max)+ 100);
}
for (let i = 0; i < length; i++) {
  array3.push(getRandomInt(max)+ 200);
}
for (let i = 0; i < length; i++) {
  array4.push(getRandomInt(max)+ 300);
}
for (let i = 0; i < length; i++) {
  array5.push(getRandomInt(max)+ 400);
}

const option = ({
  title: {
    text: 'LineChart',
    left: 'center',
    textStyle: {
      color: '#fff',
      lineHeight:30,
    }
  },
  tooltip:{// 组件提示
    trigger:'axis',
    axisPointer:{
      type: 'cross'
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
    data: array1,
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
  },
  dataZoom: [
    {
      start: 0,
      end: 100,
      heigh:20,
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
    },
    {
      name: 'Fake Data3',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'yellow'
      },
      data: array4,
    },
    {
      name: 'Fake Data3',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'blue'
      },
      data: array5,
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
