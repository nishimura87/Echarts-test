<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LabelLayout } from 'echarts/features';
import { GaugeChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, defineComponent } from 'vue';

use([
  CanvasRenderer,
  GaugeChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LabelLayout
]);

const option = ref({
  title: {
    text: 'GaugeChart',
    left: 'center',
  },
  series: [
    {
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 200,
      endAngle: 200,
      min: 0,
      max: 300,
      itemStyle: {
        color: 'blue'
      },
      progress: {
        show: true,
        width: 30,
      },
      pointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 30,
        }
      },
      axisTick: {
        lineStyle: {
          width: 0,
        }
      },
      splitLine: {
        lineStyle: {
          width: 0,
        },
        
      },
      axisLabel: {
        fontSize: 0,
      },
      anchor: {
        show: false
      },
      title: {
        show: false
      },
      detail: {
        valueAnimation: true,
        offsetCenter: [0, '-5%'],
        fontSize: 20,
        fontWeight: 'bolder',
        formatter: '{value} km',
      },
      data: [
        {
          value: 150
        }
      ],
    },
  ]
});
</script>

<template>
  <div>
    <client-only>
      <v-chart class="chart" :option="option" />
    </client-only>
  </div>
</template>

<style>
.chart {
  height: 300px;
  width: 100%;
}
</style>