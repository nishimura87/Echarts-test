import { use } from "echarts/core";

import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart, PieChart } from "echarts/charts";
import { LabelLayout } from 'echarts/features';
import { GridComponent, TooltipComponent, TitleComponent, } from "echarts/components";

export default defineNuxtPlugin(() => {
  use([
    CanvasRenderer,
    TitleComponent,
    BarChart,
    LineChart,
    PieChart,
    LabelLayout,
    GridComponent,
    TooltipComponent,
  ]);
});
