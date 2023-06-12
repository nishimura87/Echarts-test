<script setup lang="ts">
import VChart from 'vue-echarts';
import { ref, watch } from "vue";

const sessionTimes: any = await import('~/assets/json/sessionTime2.json');
const sessionTime: number[] = sessionTimes.default;

// jsonで読み込んだsessionTimeの最小値
const minrange: number = sessionTime[0];
// jsonで読み込んだsessionTimeの最大値
const maxrange: number = sessionTime.slice(-1)[0];

const sampleDatas: any = await import('~/assets/json/course.json');
const sampleData: number[] = sampleDatas.default;

const sliderValue = ref<number>(0);
watch(sliderValue, () => {
  
});

// シークバーの返却値からsessionTimeの近似値を探してインデックスを取得
const nearestIndex = ref<number>(0);

function calculateNearestValue(): void {
  let minDiff = Infinity;
  let resultIndex: any = null;

  for (let i = 0; i < sessionTime.length; i++) {
    const value = sessionTime[i];
    const diff = Math.abs(value - sliderValue.value);
    if (diff < minDiff) {
      minDiff = diff;
      resultIndex = i;
    }
  }

  nearestIndex.value = resultIndex;
}

calculateNearestValue();

const presentValue:any = sampleData[nearestIndex.value];

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
      markPoint: {
        symbol: 'circle',
        itemStyle: {
          color:'red'
        },
        data: [{
          xAxis: presentValue[0],
          yAxis: presentValue[1]
        }],
        symbolSize: 20
      }
    }
  ],
});
</script>

<template>
  <div>
    <v-chart id="chart" class="chart3" :option="option" autoresize />
    <input id="range" v-model.number="sliderValue" type="range" :max="maxrange" :min="minrange" step="0.01" class="slider" />
  </div>
</template>


<style>
.chart3 {
  height: 500px;
  width: 100%;
}
</style>
