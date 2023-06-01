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
import { ref, defineComponent } from 'vue';


use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LabelLayout
]);

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
      data: [0, 30, 80, 10, 10, 50, 30, -20, 0, 10],
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