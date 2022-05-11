<template>
  <div id="app">
    <div class="container">
      <SidebarLeft />
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarLeft from "./components/SidebarLeft.vue";

export default {
  components: { SidebarLeft },
};
</script>

<style lang="scss">
@import "@/assets/style/_variables.scss";
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
article,
form,
nav,
main {
  box-sizing: border-box;
}
.container {
  display: flex;
  min-height: 100vh;
  width: 100%;
}
.g-title__h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
}
.g-title__h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  margin: 0;
}
.g-title__h4 {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  margin-top: 0.5em;
}
.g-text-main {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  margin: 0;
}
.g-text-main__bold {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  margin: 0;
}
.g-text-second {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: $gray-light;
  margin: 0;
}
.g-text-second__small {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: $gray-light;
  margin: 0;
}
.g-text-third {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: $gray-lightest;
  margin: 0;
}
.g-article {
  background: $gray-main;
  box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.15);
  border-radius: 18px;
  padding: 25px 20px;
  color: #ffffff;
  &:hover {
    box-shadow: initial;
  }
}
@media (max-width: 420px) {
  .container {
    flex-direction: column;
  }
}
</style>
