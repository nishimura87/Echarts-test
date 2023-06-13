<script setup lang="ts">
import VChart from 'vue-echarts';
import { ref, watch } from "vue";

// sessionTimeをjsonから読み込み
const sessionTimes: any = await import('~/assets/json/sessionTime2.json');
const sessionTime: number[] = sessionTimes.default;

// sampleData(コース)をjsonから読み込み
const sampleDatas: any = await import('~/assets/json/course.json');
const sampleData: number[] = sampleDatas.default;

// jsonで読み込んだsessionTimeの最小値
const minrange: number = sessionTime[0];
// jsonで読み込んだsessionTimeの最大値
const maxrange: number = sessionTime.slice(-1)[0];

// markPointの初期位置
const initialValue: any = sampleData[0]

// シークバーの返却値からsessionTimeの近似値を探してインデックスを取得し、インデックスが一致するsanpleDataを取得する
const sliderValue = ref<number>(0);
const nearestIndex = ref<any>();
const presentValue = ref<any>(0);
const xPresentValue = ref<number>(initialValue[0]);
const yPresentValue = ref<number>(initialValue[1]);

watch(sliderValue, (newVal: any) => {
  let minDiff = Infinity;
  let resultIndex: number | null = null;

  for (let i = 0; i < sessionTime.length; i++) {
    const value = sessionTime[i];
    const diff = Math.abs(value - newVal);
    if (diff < minDiff) {
      minDiff = diff;
      resultIndex = i;
    }
  }

  nearestIndex.value = resultIndex;
  presentValue.value = sampleData[nearestIndex.value];
  xPresentValue.value = presentValue.value[0];
  yPresentValue.value = presentValue.value[1];

  console.log(sliderValue.value)
  console.log(nearestIndex.value)
});

const option = ref({
  title: {
    text: 'SmoothLineChart',
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
        type: 'line',
        symbol: 'none',
        data: sampleData,
        smooth: true,
        markPoint: {
        symbol: 'circle',
        itemStyle: {
          color: 'red'
        },
        data: [{
          xAxis: xPresentValue,
          yAxis: yPresentValue
        }],
        symbolSize: 20,
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
