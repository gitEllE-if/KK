<template>
  <Pie :chart-data="chartData" :chart-options="chartOptions" :styles="styles" />
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
    return {
      styles: {
        display: "flex",
        height: "210px",
        position: "absolute",
        top: "25px",
        right: "20px",
        fontSize: "20px",
      },
    };
  },
  // mounted() {
  //   this.addPlugin(ChartPluginLabels);
  //   this.renderChart(this.chartdata, this.options);
  // },
  // watch: {
  //   chartdata() {
  //     this.renderChart(this.chartdata, this.options);
  //   },
  // },
};
</script>
