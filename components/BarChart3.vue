<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LabelLayout } from 'echarts/features';
import { BarChart } from 'echarts/charts';
import {
  TitleComponent,
  AriaComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref } from "vue";
use([
  CanvasRenderer,
  BarChart,
  AriaComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  LabelLayout
]);

const data1 = 80;
const data2 = 80;
const data3 = 80;
const data4 = 100 - data1;
const data5 = 100 - data2;
const data6 = 100 - data3;

const option = ref({
  aria: {
    enabled: true,
    decal: {
      show: true,
      decals: {
        dashArrayX: [10, 10],
        dashArrayY: [1, 0],
        rotation: 0,
        color: 'black',
      }
    }
  },
  title: {
    text: 'BarChart3',
    left: 'center',
    textStyle: {
      color: '#fff',
      lineHeight: 30,
    }
  },
  xAxis: {
    type: 'value',
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    max: 100,
  },
  yAxis: {
    type: 'category',
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
      type: 'bar',
      stack: 'Ad',
      data: [
      {
          value: data1,
          itemStyle: {
            color: 'blue'
          }
        },
        {
          value: data2,
          itemStyle: {
            color: 'red'
          }
        },
        {
          value: data3,
          itemStyle: {
            color: 'blue'
          }
        },],
    },
    {
      type: 'bar',
      stack: 'Ad',
      data: [data4,data5,data6],
      color:['#fff']
    },
  ],
});
</script>

<template>
  <div>
    <client-only>
      <v-chart class="chart" :option="option" autoresize />
    </client-only>
  </div>
</template>

<style>
.chart {
  height: 300px;
  width: 100%;
}
</style>
