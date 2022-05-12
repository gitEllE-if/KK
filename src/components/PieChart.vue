<template>
  <Pie
    :chart-data="chartData"
    :chart-options="chartOptions"
    class="pie-chart"
  />
</template>
<script>
import { Pie } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  ChartDataLabels
);

export default {
  name: "PieChart",
  components: { Pie },
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    chartOptions: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.pie-chart {
  display: flex;
  height: 210px;
  position: absolute;
  top: 25px;
  right: 20px;
  font-size: 20px;
}
@media (max-width: 700px) {
  .pie-chart {
    height: 70%;
    top: 50px;
  }
}
@media (max-width: 500px) {
  .pie-chart {
    display: none;
  }
}
</style>
