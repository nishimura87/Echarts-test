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
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, defineComponent } from 'vue';

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LabelLayout
]);

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
      data: [40, 30, 20],
    }
  ]

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