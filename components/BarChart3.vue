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
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, defineComponent } from 'vue';

use([
  CanvasRenderer,
  BarChart,
  AriaComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LabelLayout
]);

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
      data: [80, 80, 80],
    }
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