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
          <h2 class="g-title__h2">Погода в Курской области</h2>
          <div class="article-content">
            <div class="article-content-col">
              <p class="g-text-main">28.08.2020<br />Среда</p>
              <p class="g-text-second">750 мм рт.ст.<br />3.5 м/с</p>
            </div>
            <div class="article-content-col">
              <p class="g-text-main temperature">+28<sup>&deg;С</sup></p>
              <p class="g-text-second">Солнечно<br />Осадки 7%</p>
            </div>
          </div>
        </article>
        <article class="g-article main-content__article__large">
          <h2 class="g-title__h2">Отчеты и статистика</h2>
        </article>
        <article class="g-article main-content__article">
          <h2 class="g-title__h2">Сотрудники</h2>
        </article>
        <article class="g-article main-content__article__medium">
          <h2 class="g-title__h2">Статистика пшена на полях ЦАО</h2>
        </article>
        <article class="g-article main-content__article__medium">
          <h2 class="g-title__h2">Арендуемая техника</h2>
        </article>
      </div>
    </div>
  </main>
</template>

<script>
import PageControl from "@/components/PageControl.vue";
import IconBase from "@/components/IconBase.vue";
import IconField from "@/components/icon/IconField.vue";
import IconMap from "@/components/icon/IconMap.vue";
export default {
  name: "MainView",
  components: { PageControl, IconBase, IconField, IconMap },
};

//api.openweathermap.org/data/2.5/weather?lat=51.7373&lon=36.1874&APPID=1f4abda6ef9ca8875835acee3f4d620f
</script>

<style lang="scss" scoped>
@import "@/assets/style/_variables.scss";
article {
  box-sizing: border-box;
}
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
    }
    &__article__large {
      position: relative;
      width: 710px;
      height: 230px;
      margin-bottom: 30px;
    }
    &__article__medium {
      position: relative;
      width: 525px;
      height: 270px;
      margin-bottom: 30px;
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
</style>
