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
import VChart from 'vue-echarts';
import { ref } from "vue";

use([
  CanvasRenderer,
  GaugeChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LabelLayout
]);

const sampleDatas: any = await import('~/assets/json/gauge.json');
const sampleData: number[] = sampleDatas.default;

const option = ref({
  title: {
    text: 'GaugeChart',
    left: 'center',
    textStyle: {
      color: '#fff',
      lineHeight:30,
    }
  },
  series: [
    {
      type: 'gauge',
      radius: '45%',
      center: ['17%', '50%'],
      startAngle: 200,
      endAngle: 200,
      min: 0,
      max: 200,
      itemStyle: {
        color: 'blue'
      },
      progress: {
        show: true,
        width: 20,
      },
      pointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 20,
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
        textStyle: {
          color: "#fff",
          fontSize: 12,
        },
      },
      detail: {
        valueAnimation: true,
        offsetCenter: [0, '-5%'],
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bolder',
        formatter: '{value} km',
      },
      data: [
        {
          value: sampleData[0],
          name: 'SPEED_REAR',
        }
      ],
    },
    {
      type: 'gauge',
      radius: '45%',
      center: ['50%', '50%'],
      startAngle: 200,
      endAngle: 200,
      min: 0,
      max: 200,
      itemStyle: {
        color: 'blue'
      },
      progress: {
        show: true,
        width: 20,
      },
      pointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 20,
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
        textStyle: {
          color: "#fff",
          fontSize: 12,
        },
      },
      detail: {
        valueAnimation: true,
        offsetCenter: [0, '-5%'],
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bolder',
        formatter: '{value} km',
      },
      data: [
        {
          value: sampleData[1],
          name: 'SPEED_REAR',
        }
      ],
    },
    {
      type: 'gauge',
      radius: '45%',
      center: ['83%', '50%'],
      startAngle: 200,
      endAngle: 200,
      min: 0,
      max: 200,
      itemStyle: {
        color: 'blue'
      },
      progress: {
        show: true,
        width: 20,
      },
      pointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 20,
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
        textStyle: {
          color: "#fff",
          fontSize: 12,
        },
      },
      detail: {
        valueAnimation: true,
        offsetCenter: [0, '-5%'],
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bolder',
        formatter: '{value} km',
      },
      data: [
        {
          value: sampleData[2],
          name: 'SPEED_REAR',
        }
      ],
    },
  ],

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
