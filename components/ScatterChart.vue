<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LabelLayout } from 'echarts/features';
import { ScatterChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref } from "vue";

use([
  CanvasRenderer,
  ScatterChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LabelLayout
]);

const sampleDatas: any = await import('~/assets/json/course.json');
const sampleData: number[] = sampleDatas.default;

const option = ref({
  title: {
    text: 'ScatterChart',
    left: 'center',
    textStyle: {
      color: '#fff',
      lineHeight:30,
    }
  },
  xAxis: {
    boundaryGap: false,
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
  },
  yAxis: {
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
        type: 'scatter',
        symbolSize: 3,
        data: sampleData,
      areaStyle: {}
    }
  ],
});
</script>

<template>
  <div>
    <client-only>
      <v-chart id="chart" class="chart3" :option="option" autoresize />
    </client-only>
  </div>
</template>


<style>
.chart3 {
  height: 500px;
  width: 100%;
}
</style>
