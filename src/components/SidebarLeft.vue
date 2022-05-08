<template>
  <nav class="sidebar">
    <div class="sidebar-top">
      <router-link to="/" class="sidebar-item"
        ><icon-base icon-name="home" width="20" height="20"
          ><icon-home /></icon-base
        ><span>Главная</span></router-link
      >
      <router-link to="#" class="sidebar-item">
        <icon-base icon-name="user" viewBox="0 0 17 18" width="20" height="20"
          ><icon-user /></icon-base
        ><span>Константин Константиновский</span></router-link
      >
    </div>
    <router-link to="/events" class="sidebar-item"
      ><icon-base
        icon-name="calendar"
        viewBox="0 0 17 19"
        width="20"
        height="20"
        ><icon-calendar /></icon-base
      ><span>Мероприятия</span></router-link
    >
    <router-link to="#" class="sidebar-item">
      <icon-base icon-name="people" viewBox="0 0 22 14" width="20" height="20"
        ><icon-people /></icon-base
      ><span>Сотрудники</span></router-link
    >
    <router-link to="#" class="sidebar-item"
      ><icon-base icon-name="script" viewBox="0 0 20 19" width="20" height="20"
        ><icon-script /></icon-base
      ><span>Заметки</span></router-link
    >
    <router-link to="#" class="sidebar-item"
      ><icon-base icon-name="chart" viewBox="0 0 19 19" width="20" height="20"
        ><icon-chart /></icon-base
      ><span>Статистика</span></router-link
    >
    <router-link to="#" class="sidebar-item"
      ><icon-base
        icon-name="clipboard"
        viewBox="0 0 17 20"
        width="20"
        height="20"
        ><icon-clipboard /></icon-base
      ><span>Удобрения</span></router-link
    >
    <router-link to="#" class="sidebar-item"
      ><icon-base icon-name="cloud" viewBox="0 0 20 20" width="20" height="20"
        ><icon-cloud /></icon-base
      ><span>Погода</span></router-link
    >
    <router-link to="/organizations" class="sidebar-item"
      ><icon-base
        icon-name="bullhorn"
        viewBox="0 0 23 17"
        width="20"
        height="20"
        ><icon-bullhorn /></icon-base
      ><span>Организации</span></router-link
    >
  </nav>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconHome from "@/components/icon/IconHome.vue";
import IconUser from "@/components/icon/IconUser.vue";
import IconCalendar from "@/components/icon/IconCalendar.vue";
import IconPeople from "@/components/icon/IconPeople.vue";
import IconScript from "@/components/icon/IconScript.vue";
import IconBullhorn from "@/components/icon/IconBullhorn.vue";
import IconChart from "@/components/icon/IconChart.vue";
import IconClipboard from "@/components/icon/IconClipboard.vue";
import IconCloud from "@/components/icon/IconCloud.vue";
export default {
  name: "SidebarLeft",
  components: {
    IconBase,
    IconHome,
    IconUser,
    IconCalendar,
    IconPeople,
    IconBullhorn,
    IconScript,
    IconChart,
    IconClipboard,
    IconCloud,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/_variables.scss";

.sidebar {
  width: 241px;
  background-color: $gray-dark;
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  &-item {
    height: 45px;
    padding-left: 6px;
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-decoration: none;
    :first-child {
      flex-shrink: 0;
    }
    & span {
      margin-left: 10px;
    }
    &:hover {
      background: radial-gradient(
          133.33% 2508.35% at -4.59% -10%,
          #32e6ff 0%,
          rgba(0, 255, 209, 0.81) 100%
        ),
        #43e8ff;
      color: black;
    }
    &:active {
      background: linear-gradient(
          124.04deg,
          rgba(182, 26, 255, 0.5) -6.27%,
          rgba(0, 26, 255, 0.5) 98.36%
        ),
        #656cff;
    }
  }
  .sidebar-top {
    margin-bottom: 85px;
  }
}
</style>
