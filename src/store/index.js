import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import api from "./../../api/server";
import { strCapitalize } from "@/utils/strHelper";
import { pressFromHpaToMm } from "@/utils/unitsHelper";
import { getDayName, getFormattedDate } from "@/utils/dateHelper";

const weatherAPI =
  "https://api.openweathermap.org/data/2.5/weather?id=538555&APPID=1f4abda6ef9ca8875835acee3f4d620f&units=metric&lang=ru";
const morpherAPI = [
  "http://ws3.morpher.ru/russian/declension?s=",
  "&format=json&token=3d7223c7-27ac-4953-a683-00e33aafc2e5",
];
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    organizations: [],
    statistics: [],
    report: [],
    employees: [],
    technic: [],
    weather: {},
  },
  getters: {},
  mutations: {
    setOrganizations(state, newOrganizations) {
      state.organizations = newOrganizations;
    },
    setStatistics(state, newStatistics) {
      state.statistics = newStatistics;
    },
    setReport(state, newReport) {
      state.report = newReport;
    },
    setEmployees(state, newEmployees) {
      state.employees = newEmployees;
    },
    setTechnic(state, newTechnic) {
      state.technic = newTechnic;
    },
    setWeather(state, newWeather) {
      state.weather = newWeather;
    },
  },
  actions: {
    async getOrganizations({ commit }) {
      try {
        const res = await api.get("organizations");
        if (res) {
          commit("setOrganizations", res);
        }
      } catch (err) {
        console.warn("FAIL => get organizations: " + err);
      }
    },
    async getStatistics({ commit }) {
      try {
        const res = await api.get("statistics");
        if (res) {
          commit("setStatistics", res);
        }
      } catch (err) {
        console.warn("FAIL => get statistics: " + err);
      }
    },
    async getReport({ commit }) {
      try {
        const res = await api.get("report");
        if (res) {
          commit("setReport", res);
        }
      } catch (err) {
        console.warn("FAIL => get report: " + err);
      }
    },
    async getEmployees({ commit }) {
      try {
        const res = await api.get("employees");
        if (res) {
          commit("setEmployees", res);
        }
      } catch (err) {
        console.warn("FAIL => get employees: " + err);
      }
    },
    async getTechnic({ commit }) {
      try {
        const res = await api.get("technic");
        if (res) {
          commit("setTechnic", res);
        }
      } catch (err) {
        console.warn("FAIL => get technic: " + err);
      }
    },
    async getWeather({ commit }) {
      try {
        let res = await fetch(weatherAPI);
        if (res && res.status == 200) {
          res = await res.json();
        }
        if (res && res.cod == 200) {
          const weather = {};
          weather.city = res.name;
          weather.cityPcase = null;
          weather.temperature =
            res.main.temp > 0
              ? `+${Math.round(res.main.temp)}`
              : Math.round(res.main.temp);
          weather.pressure = Math.round(pressFromHpaToMm(res.main.pressure));
          weather.humidity = res.main.humidity;
          weather.description = strCapitalize(res.weather[0].description);
          weather.wind = res.wind.speed.toFixed(1);
          weather.day = getDayName(res.dt * 1000);
          weather.date = getFormattedDate(res.dt * 1000);
          res = await fetch(morpherAPI[0] + weather.city + morpherAPI[1]);
          if (res && res.status == 200) {
            res = await res.json();
          }
          if (res && res.П) {
            weather.cityPcase = res.П;
          }
          commit("setWeather", weather);
        }
      } catch (err) {
        console.warn("FAIL => get weather: " + err);
      }
    },
  },
  modules: {},
  plugins: [new VuexPersistence().plugin],
});
