<template>
  <main class="main">
    <div class="main-container">
      <div class="main-top">
        <h1 class="g-title__h1">ИП Васильев</h1>
        <PageControl />
      </div>
      <div class="main-content">
        <article class="g-article main-content__article">
          <h2 class="g-title__h2">Работа с полями</h2>
          <icon-base
            class="main-content__svg"
            icon-name="field"
            width="187"
            height="148"
            viewBox="0 0 187 148"
            ><icon-field
          /></icon-base>
        </article>
        <article class="g-article main-content__article">
          <h2 class="g-title__h2">Статистика урожая</h2>
          <h4 class="g-title__h4">Поволжье</h4>
          <icon-base
            class="main-content__svg"
            icon-name="map"
            width="274"
            height="146"
            viewBox="0 0 284 155"
            ><icon-map
          /></icon-base>
        </article>
        <article class="g-article main-content__article">
          <h2 class="g-title__h2">
            Погода в {{ weather.cityPcase || weather.city }}
          </h2>
          <div class="article-content">
            <div class="article-content-col">
              <p class="g-text-main">
                {{ weather.date }}<br />{{ weather.day }}
              </p>
              <p class="g-text-second">
                {{ weather.pressure }} мм рт.ст.<br />{{ weather.wind }} м/с
              </p>
            </div>
            <div class="article-content-col">
              <p class="g-text-main temperature">
                {{ weather.temperature }}<sup>&deg;С</sup>
              </p>
              <p class="g-text-second">
                {{ weather.description }}<br />Осадки {{ weather.humidity }}%
              </p>
            </div>
          </div>
        </article>
        <article class="g-article main-content__article__large">
          <h2 class="g-title__h2">Отчеты и статистика</h2>
          <div class="article-table g-text-main report-table">
            <v-client-table
              :data="report"
              :columns="columns"
              :options="options"
            />
          </div>
          <icon-base
            class="main-content__svg"
            icon-name="barchart"
            width="167"
            height="175"
            viewBox="0 0 167 184"
            ><icon-barchart
          /></icon-base>
        </article>
        <article
          class="g-article main-content__article main-content__article__small"
        >
          <h2 class="g-title__h2">Сотрудники</h2>
          <ul class="article__ul">
            <li
              v-for="employee in employees"
              :key="employee.id"
              class="article__li"
            >
              <div class="g-text-main article__li-content">
                {{ employee.name
                }}<span class="g-text-second">{{ employee.profession }}</span>
              </div>
              <div class="article__li-icon">
                <icon-base
                  icon-name="phone"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  ><icon-phone
                /></icon-base>
                <icon-base
                  icon-name="mail"
                  width="18"
                  height="18"
                  viewBox="0 0 19 13"
                  ><icon-mail
                /></icon-base>
              </div>
            </li>
          </ul>
          <div class="article-bottom">Показать еще</div>
        </article>
        <article class="g-article main-content__article__medium">
          <h2 class="g-title__h2">Статистика пшена на полях ЦАО</h2>
          <ul class="article__ul">
            <li
              v-for="stat in statistics"
              :key="stat.id"
              class="article__li__markered"
            >
              <div class="article__li-content">
                <span class="g-text-main__bold li-name">{{ stat.name }}</span>
                <span class="g-text-second">
                  {{ stat.weight.toLocaleString("ru-RU") }}
                  {{ stat.unit }}</span
                >
                <span class="g-text-second">{{ stat.area }}</span>
              </div>
            </li>
          </ul>
          <PieChart :chartData="chartData" :chartOptions="chartOptions" />
        </article>
        <article class="g-article main-content__article__medium">
          <h2 class="g-title__h2">Арендуемая техника</h2>
          <h4 class="g-title__h4">ООО "Магнат Мед"</h4>
          <ul class="article__ul">
            <li
              v-for="tech in technic"
              :key="tech.id"
              class="article__li__markered"
            >
              <div class="article__li-content">
                <span class="g-text-main__bold li-name">{{ tech.name }}</span>
                <span class="g-text-second">
                  {{ tech.machine }}
                </span>
                <span class="g-text-second">{{ tech.area }}</span>
                <span class="g-text-second">{{ tech.company }}</span>
              </div>
            </li>
          </ul>
          <div class="article-bottom">Добавить технику</div>
          <icon-base
            class="main-content__svg"
            icon-name="graph"
            width="280"
            height="265"
            viewBox="0 0 295 270"
            ><icon-graph
          /></icon-base>
        </article>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import PageControl from "@/components/PageControl.vue";
import PieChart from "@/components/PieChart.vue";
import IconBase from "@/components/IconBase.vue";
import IconField from "@/components/icon/IconField.vue";
import IconMap from "@/components/icon/IconMap.vue";
import IconBarchart from "@/components/icon/IconBarchart.vue";
import IconPhone from "@/components/icon/IconPhone.vue";
import IconMail from "@/components/icon/IconMail.vue";
import IconGraph from "@/components/icon/IconGraph.vue";

export default {
  name: "MainView",
  components: {
    PageControl,
    PieChart,
    IconBase,
    IconField,
    IconMap,
    IconBarchart,
    IconPhone,
    IconMail,
    IconGraph,
  },
  data() {
    return {
      options: {
        filterable: false,
        pagination: {
          show: false,
        },
        headings: {
          2020: "2020 год",
          2019: "2019 год",
          2018: "2018 год",
        },
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        plugins: {
          datalabels: {
            formatter: function (value, context) {
              let sum = 0;
              let dataArr = context.chart.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              let percentage = ((value * 100) / sum).toFixed(0) + "%";
              return percentage;
            },
            color: "#fff",
            font: {
              size: 18,
              weight: 700,
            },
          },
        },
      },
      gradient: [],
    };
  },
  created() {
    this.$store.dispatch("getWeather");
    this.$store.dispatch("getEmployees");
    this.$store.dispatch("getReport");
    this.$store.dispatch("getStatistics");
    this.$store.dispatch("getTechnic");
  },
  mounted() {
    let canvas = document.getElementById("pie-chart");
    this.gradient.push(
      canvas.getContext("2d").createLinearGradient(0, 0, 200, 200)
    );
    this.gradient[0].addColorStop(0, "rgb(67, 232, 255)");
    this.gradient[0].addColorStop(1, "rgb(0, 171, 171)");
    this.gradient.push(
      canvas.getContext("2d").createLinearGradient(0, 0, 200, 200)
    );
    this.gradient[1].addColorStop(0, "rgb(182, 26, 255)");
    this.gradient[1].addColorStop(1, "rgb(0, 26, 255)");
  },
  computed: {
    ...mapState({
      weather: (state) => state.weather,
      report: (state) => state.report,
      statistics: (state) => state.statistics,
      employees: (state) => state.employees,
      technic: (state) => state.technic,
    }),
    columns: function () {
      return Object.keys(this.report[0]);
    },
    chartData: function () {
      return {
        datasets: [
          {
            data: this.statistics.map((el) => el.weight),
            backgroundColor: this.gradient,
            borderWidth: 0,
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_variables.scss";

.main {
  background-color: $gray-medium;
  padding: 55px 40px;
  width: 100%;
  &-container {
    margin: 0 auto;
    max-width: 1080px;
  }
  &-top {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &__article {
      position: relative;
      width: 340px;
      height: 230px;
      margin-bottom: 30px;
      order: 0;
    }
    &__article__small {
      order: 2;
    }
    &__article__large {
      position: relative;
      width: 710px;
      height: 230px;
      margin-bottom: 30px;
      order: 1;
    }
    &__article__medium {
      position: relative;
      width: 525px;
      height: 270px;
      margin-bottom: 30px;
      order: 3;
    }
    &__svg {
      position: absolute;
      bottom: 30px;
      right: 25px;
    }
  }
}
.article-content {
  display: flex;
  &-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &:last-child {
      flex-grow: 1;
      align-items: center;
    }
    p:last-child {
      margin-top: 30px;
    }
    .temperature {
      font-weight: 300;
      font-size: 80px;
      letter-spacing: -0.05em;
      line-height: 72px;
      & sup {
        font-size: 36px;
      }
    }
  }
}
.article-table {
  margin-top: 20px;
}
.article__ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 30px;
  .article__li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    &-content {
      display: flex;
      flex-direction: column;
    }
    &-icon {
      width: 60px;
      display: flex;
      justify-content: space-between;
    }
  }
  .article__li__markered {
    display: flex;
    margin-bottom: 20px;
    .li-name {
      margin-bottom: 10px;
    }
    &::before {
      content: "";
      height: 14px;
      width: 14px;
      margin-right: 20px;
      margin-top: 3px;
      background: linear-gradient(141.65deg, #43e9ff 22.09%, #00abab 67.48%),
        #646981;
      border-radius: 5px;
    }
    &:nth-child(2n)::before {
      background: linear-gradient(
          124.04deg,
          rgba(182, 26, 255, 0.5) -6.27%,
          rgba(0, 26, 255, 0.5) 98.36%
        ),
        #656cff;
    }
  }
}
.article-bottom {
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: $blue-main;
  cursor: pointer;
}

@media (max-width: 1370px) {
  .main {
    &-container {
      max-width: 710px;
    }
    &-content {
      &__article__small {
        order: 1;
      }
      &__article__large {
        order: 2;
      }
      &__article__medium {
        width: 100%;
      }
    }
  }
}

@media (max-width: 780px) {
  .main {
    &-container {
      max-width: 500px;
    }
    &-content {
      &__article {
        width: 100%;
      }
      &__article__large {
        width: 100%;
        .main-content__svg {
          display: none;
        }
      }
      &__article__medium {
        .main-content__svg {
          display: none;
        }
      }
    }
  }
  .main-content__article__large + .main-content__svg {
    display: none;
  }
}
@media (max-width: 500px) {
  .main {
    padding: 20px;
    &-container {
      max-width: 350px;
    }
  }
  .main-content__article .main-content__svg {
    width: 80%;
  }
}
</style>

<style lang="scss">
@import "@/assets/style/_variables.scss";
.report-table {
  .VueTables {
    width: 374px;
    .VueTables__table {
      text-align: left;
      thead {
        height: 35px;
        th {
          padding-left: 10px;
        }
      }
      .VueTables__row {
        height: 35px;
        &:first-child {
          border-top: 1px solid $gray-dark;
        }
        &:not(:last-child) {
          border-bottom: 1px solid $gray-dark;
        }
        td {
          padding-left: 10px;
          &:not(:last-child) {
            border-right: 1px solid $gray-dark;
          }
        }
      }
    }
  }
}
@media (max-width: 500px) {
  .report-table {
    .VueTables {
      width: 100%;
      font-size: 12px;
    }
  }
}
</style>
