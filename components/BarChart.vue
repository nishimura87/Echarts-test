<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LabelLayout } from 'echarts/features';
import { BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref } from "vue";

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LabelLayout
]);

const sampleDatas:any = await import('~/assets/json/bar.json');
const sampleData:number[] = sampleDatas.default;

const option = ref({
  title: {
    text: 'BarChart',
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
  visualMap: {
    top: 50,
    right: 10,
    pieces: [
      {
        gt: 0,
        lte: 50,
        color: '#fff'
      },
    ]
  },
  series: [
    {
      type: 'bar',
      data:sampleData,
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
