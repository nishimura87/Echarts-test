import { use } from 'echarts/core'

import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, PieChart, GaugeChart, ScatterChart} from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import {
  GridComponent,
  AriaComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  DataZoomComponent
} from 'echarts/components'
import 'echarts/lib/component/markLine'

export default defineNuxtPlugin(() => {
  use([
    CanvasRenderer,
    BarChart,
    LineChart,
    PieChart,
    GaugeChart,
    ScatterChart,
    GridComponent,
    TooltipComponent,
    TitleComponent,
    AriaComponent,
    LegendComponent,
    LabelLayout,
    DataZoomComponent
  ])
})
