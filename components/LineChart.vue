<script setup lang="ts">
import VChart from "vue-echarts";
import { ref, watch } from "vue";


const sessionTimes: any = await import('~/assets/json/sessionTime.json');
const sessionTime: number[] = sessionTimes.default;
const minrange: number = sessionTime[0];
const maxrange: number = sessionTime.slice(-1)[0];

const sampleDatas: any = await import('~/assets/json/line.json');
const sampleData1: number[] = sampleDatas.default[0];
const sampleData2: number[] = sampleDatas.default[1];
const sampleData3: number[] = sampleDatas.default[2];
const sampleData4: number[] = sampleDatas.default[3];
const sampleData5: number[] = sampleDatas.default[4];
const sampleData6: number[] = sampleDatas.default[5];

const sliderValue = ref<number>(0);
watch(sliderValue, () => {
});

const option = ref({
  title: {
    text: "LineChart",
    left: "center",
    textStyle: {
      color: "#fff",
      lineHeight: 30,
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  axisPointer: {
    link: [
      {
        xAxisIndex: "all",
      },
    ],
    label: {
      backgroundColor: "#777",
    },
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 0,
      data: sessionTime,
    },
    {
      type: "category",
      boundaryGap: false,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 1,
      data: sessionTime,
    },
    {
      type: "category",
      boundaryGap: false,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 2,
      data: sessionTime,
    },
    {
      type: "category",
      boundaryGap: false,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 3,
      data: sessionTime,
    },
    {
      type: "category",
      boundaryGap: false,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 4,
      data: sessionTime,
    },
    {
      type: "category",
      boundaryGap: false,
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 5,
      data: sessionTime,
    },
  ],
  yAxis: [
    {
      type: "value",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 0,
    },
    {
      type: "value",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 1,
    },
    {
      type: "value",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 2,
    },
    {
      type: "value",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 3,
    },
    {
      type: "value",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 4,
    },
    {
      type: "value",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      gridIndex: 5,
    },
  ],
  dataZoom: [
    {
      type: "inside",
      start: 0,
      end: 100,
      height: 30,
      xAxisIndex: [0, 1, 2, 3, 4, 5],
    },
    {
      type: "slider",
      start: 0,
      end: 100,
      height: 30,
      xAxisIndex: [0, 1, 2, 3, 4, 5],
    },
  ],
  grid: [
    {
      bottom: "10%",
      left: 10,
      right: 10,
      height: "15%",
    },
    {
      bottom: "27%",
      left: 10,
      right: 10,
      height: "15%",
    },
    {
      bottom: "44%",
      left: 10,
      right: 10,
      height: "15%",
    },
    {
      bottom: "61%",
      left: 10,
      right: 10,
      height: "15%",
    },
    {
      bottom: "77%",
      left: 10,
      right: 10,
      height: "15%",
    },
    {
      bottom: "77%",
      left: 10,
      right: 10,
      height: "15%",
    },
  ],
  series: [
    {
      name: "Fake Data1",
      type: "line",
      symbol: "none",
      sampling: "lttb",
      itemStyle: {
        color: "red",
      },
      data: sampleData1,
      markLine: {
        animation: false,
        symbol: "none",
        label: {
          show: false,
        },
        lineStyle: {
          type: "dashed",
          color: "red",
          width: "3",
        },
        data: [{ xAxis: sliderValue }],
      },
    },
    {
      name: "Fake Data2",
      type: "line",
      symbol: "none",
      sampling: "lttb",
      itemStyle: {
        color: "green",
      },
      data: sampleData2,
      xAxisIndex: 1,
      yAxisIndex: 1,
      markLine: {
        animation: false,
        symbol: "none",
        label: {
          show: false,
        },
        lineStyle: {
          type: "dashed",
          color: "red",
          width: "3",
        },
        data: [{ xAxis: sliderValue }],
      },
    },
    {
      name: "Fake Data3",
      type: "line",
      symbol: "none",
      sampling: "lttb",
      itemStyle: {
        color: "pink",
      },
      data: sampleData3,
      xAxisIndex: 2,
      yAxisIndex: 2,
      markLine: {
        animation: false,
        symbol: "none",
        label: {
          show: false,
        },
        lineStyle: {
          type: "dashed",
          color: "red",
          width: "3",
        },
        data: [{ xAxis: sliderValue }],
      },
    },
    {
      name: "Fake Data4",
      type: "line",
      symbol: "none",
      sampling: "lttb",
      itemStyle: {
        color: "yellow",
      },
      data: sampleData4,
      xAxisIndex: 3,
      yAxisIndex: 3,
      markLine: {
        animation: false,
        symbol: "none",
        label: {
          show: false,
        },
        lineStyle: {
          type: "dashed",
          color: "red",
          width: "3",
        },
        data: [{ xAxis: sliderValue }],
      },
    },
    {
      name: "Fake Data5",
      type: "line",
      symbol: "none",
      sampling: "lttb",
      itemStyle: {
        color: "rgba(0, 0, 255, 1)",
      },
      data: sampleData5,
      xAxisIndex: 4,
      yAxisIndex: 4,
      markLine: {
        animation: false,
        symbol: "none",
        label: {
          show: false,
        },
        lineStyle: {
          type: "dashed",
          color: "red",
          width: "3",
        },
        data: [{ xAxis: sliderValue }],
      },
    },
    {
      name: "Fake Data5",
      type: "line",
      symbol: "none",
      sampling: "lttb",
      itemStyle: {
        color: "rgba(114, 114, 114, 0.7)",
      },
      data: sampleData6,
      xAxisIndex: 5,
      yAxisIndex: 5,
    },
  ],
});
</script>


<template>
  <div>
    <v-chart id="chart2" class="chart2" :option="option" autoresize />
    <input id="range" v-model.number="sliderValue" type="range" :max="maxrange" :min="minrange" class="slider" />
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

.white {
  color: #fff;
  font-weight: bold;
}
</style>
