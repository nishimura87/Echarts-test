
import { BarChart } from 'echarts/charts';

<template>
  <div class="main">
    <div class="chart_con">
      <BarChart />
    </div>
    <div class="chart_con">
      <BarChart2 />
    </div>
    <div class="chart_con">
      <BarChart3 />
    </div>
    <div class="chart_con">
      <AreaChart />
    </div>
    <div class="chart_con">
      <GaugeChart />
    </div>
  </div>
</template>

<style>
.main {
  background-color: black;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
}
.chart_con {
  width: 40%;
  margin: 1%;
  border: 2px solid blue;
  border-radius: 10px;
  padding: 10px;
}
</style>