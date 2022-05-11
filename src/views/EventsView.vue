<template>
  <main class="main">
    <div class="main-container">
      <div class="main-top">
        <h1 class="g-title__h1">
          Карточка мероприятия
          <span class="main-top__span">Обновлено</span>
        </h1>
        <div class="main-top-right">
          <button class="main-top__button">Материалы проверки</button>
          <PageControl />
        </div>
      </div>
      <div class="main-content">
        <article class="g-article main-content__article">
          <h2 class="g-title__h2">Структура предприятия</h2>
          <hr noshade class="article__hr__dark" />
          <ul class="article__ul">
            <li
              v-for="(struct, index) in structure"
              :key="struct.id"
              class="article__li"
            >
              <div class="g-text-main__bold article__li-content">
                <span class="li-header"
                  >{{ struct.name }}
                  <div @click="$set(fileShown, index, !fileShown[index])">
                    <icon-base
                      class="li-header-icon"
                      :style="{
                        transform: fileShown[index]
                          ? 'rotateX(180deg)'
                          : 'rotateX(0deg)',
                      }"
                      icon-name="arrow"
                      width="13"
                      height="13"
                      viewBox="0 0 13 7"
                      ><icon-arrow
                    /></icon-base>
                  </div>
                  <icon-base
                    v-if="fileShown[index]"
                    class="li-header-file"
                    icon-name="file"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    ><icon-file /></icon-base
                ></span>
                <span class="li-text__small-300">{{ struct.description }}</span>
              </div>
              <div class="g-text-main article__li-content">
                Директор: {{ struct.director }}
                <span class="li-text__small-400">{{ struct.contract }}</span>
              </div>
              <div class="g-text-main article__li-content">
                <span class="li-icon-text"
                  ><icon-base
                    class="li-icon"
                    icon-name="point"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    ><icon-point /></icon-base
                  >{{ struct.address }}</span
                >
                <span class="li-icon-text"
                  ><icon-base
                    class="li-icon"
                    icon-name="person"
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    ><icon-person /></icon-base
                  >{{ struct.staff }}</span
                >
              </div>
              <div
                v-if="struct.previous"
                class="g-text-main__bold article__li-content"
              >
                Наименование организации до реорганизации
                <ul class="article__ul article__ul__inner">
                  <li
                    v-for="(prev, idx) in struct.previous"
                    :key="idx"
                    class="li-icon-text g-text-second"
                  >
                    <icon-base
                      class="li-icon g-text-main"
                      icon-name="signature"
                      width="17"
                      height="17"
                      viewBox="0 0 12 12"
                      ><icon-signature /></icon-base
                    >{{ prev }}
                  </li>
                </ul>
              </div>
              <hr noshade class="article__hr__dark" />
            </li>
          </ul>
        </article>
        <div class="main-content-col">
          <article class="g-article main-content__article">
            <ul class="article__ul">
              <li class="article__li">
                <div class="article__li-content-row">
                  <span class="g-text-main__bold">Справка&nbsp;проверки</span>
                  <hr noshade class="article__hr" />
                  <button class="article__button">Сформировать</button>
                </div>
              </li>
              <li class="article__li">
                <div class="article__li-content-row">
                  <span class="g-text-main__bold">Акт&nbsp;проверки</span>
                  <hr noshade class="article__hr" />
                  <button class="article__button">Сформировать</button>
                </div>
              </li>
              <li class="article__li">
                <div class="article__li-content-row">
                  <span class="g-text-main__bold">Схема&nbsp;проверки</span>
                  <hr noshade class="article__hr" />
                  <button class="article__button">Сформировать</button>
                </div>
              </li>
            </ul>
          </article>
          <form class="g-article main-content__article form" action="#">
            <div class="form-item">
              <label class="g-text-main form-item__label" for="decisionText">
                Решение о проведении проверки
              </label>
              <textarea
                class="g-text-third form-item__textarea"
                id="decisionText"
                placeholder="Введите текст"
                rows="2"
              >
              </textarea>
            </div>
            <hr noshade class="article__hr__dark" />
            <div class="form-item">
              <label class="g-text-main form-item__label" for="organizationIn">
                Организация
              </label>
              <input
                class="g-text-third form-item__input"
                id="organizationIn"
                placeholder='ООО "РесерчХолд"'
              />
            </div>
            <div class="form-item">
              <label class="g-text-main form-item__label" for="typeIn">
                Вид проверки
              </label>
              <select class="g-text-third form-item__select" id="typeIn">
                <option value="1" selected>Плановая</option>
                <option value="2">Внеплановая</option>
              </select>
            </div>
            <div class="form-item">
              <label class="g-text-main form-item__label" for="formIn">
                Форма проверки
              </label>
              <select class="g-text-third form-item__select" id="formIn">
                <option value="1" selected>Выездная</option>
                <option value="2">Документарная</option>
              </select>
            </div>
            <div class="form-item">
              <label class="g-text-main form-item__label" for="methodIn">
                Метод проверки
              </label>
              <select class="g-text-third form-item__select" id="methodIn">
                <option value="1" selected>Фактическая</option>
                <option value="2">Документальная</option>
              </select>
            </div>
            <div class="form-item">
              <label class="g-text-main form-item__label" for="dateIn">
                Сроки проведения проверки
              </label>
              <input
                class="g-text-third form-item__input"
                id="dateIn"
                placeholder="02.08.2020 - 05.08.2020"
              />
            </div>
            <div class="form-item">
              <label class="g-text-main form-item__label" for="placeIn">
                Место проведения проверки
              </label>
              <input
                class="g-text-third form-item__input"
                id="placeIn"
                placeholder="г. Москва, Лененский пр-т 178, к4"
              />
            </div>
            <button class="article__button form__button" type="submit">
              Написать
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapState } from "vuex";
import PageControl from "@/components/PageControl.vue";
import IconBase from "@/components/IconBase.vue";
import IconPerson from "@/components/icon/IconPerson.vue";
import IconPoint from "@/components/icon/IconPoint.vue";
import IconSignature from "@/components/icon/IconSignature.vue";
import IconArrow from "@/components/icon/IconArrow.vue";
import IconFile from "@/components/icon/IconFile.vue";

export default {
  name: "EventsView",
  components: {
    PageControl,
    IconBase,
    IconPerson,
    IconPoint,
    IconSignature,
    IconArrow,
    IconFile,
  },
  data() {
    return {
      fileShown: [true, true, true],
    };
  },
  created() {
    this.$store.dispatch("getStructure");
  },
  computed: {
    ...mapState({
      structure: (state) => state.structure,
    }),
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/_variables.scss";
ul {
  margin: 0;
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
    &-right {
      display: flex;
    }
    &__span {
      font-weight: 600;
      font-size: 16px;
      color: $blue-main;
      margin-left: 10px;
    }
    &__button {
      padding: 7px 30px;
      margin-right: 30px;
      font-weight: 600;
      font-size: 16px;
      color: black;
      background: white;
      border-radius: 6px;
      border: none;
      outline: none;
      &:hover {
        color: white;
        background-color: black;
      }
    }
  }
  &-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &-col {
      display: flex;
      flex-direction: column;
    }
    &__article {
      position: relative;
      width: 525px;
      margin-bottom: 30px;
    }
    &__svg {
      position: absolute;
      bottom: 30px;
      right: 25px;
    }
  }
}
.article__ul {
  list-style: none;
  padding: 0;
  .article__li {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    &-content {
      display: flex;
      flex-direction: column;
      &:not(:nth-last-child(2)) {
        margin-bottom: 20px;
      }
      .li-header {
        display: flex;
        justify-content: space-between;
      }
      .li-text__small-300 {
        font-weight: 300;
        font-size: 12px;
        color: $red-main;
      }
      .li-text__small-400 {
        font-weight: 400;
        font-size: 12px;
      }
      .li-icon-text {
        display: flex;
        margin-bottom: 10px;
        .li-icon {
          margin-right: 10px;
        }
      }
    }
    &-content-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
}
.li-header {
  position: relative;
  &-icon {
    cursor: pointer;
  }
  &-file {
    position: absolute;
    top: 35px;
    right: 0;
  }
}
.article__ul__inner {
  margin-top: 15px;
}
.article__button {
  border: none;
  background-color: black;
  font-weight: 600;
  font-size: 16px;
  color: $blue-main;
  border-radius: 6px;
  padding: 7px 30px;
  cursor: pointer;
  &:hover {
    background-color: $blue-main;
    color: black;
  }
}
.article__hr {
  width: 100%;
  border: 0;
  border-bottom: 1px solid white;
  margin-left: 10px;
  margin-right: 10px;
}
.article__hr__dark {
  margin: 25px 0;
  border: 0;
  border-bottom: 1px solid $gray-dark;
  background-color: $gray-dark;
  position: relative;
  left: -20px;
  width: calc(100% + 40px);
}
.article__li:last-child .article__hr__dark {
  display: none;
}

.form-item__input,
.form-item__textarea {
  &::-webkit-input-placeholder {
    font-weight: 300;
    font-size: 14px;
    color: $gray-lightest;
  }
  &:-ms-input-placeholder {
    font-weight: 300;
    font-size: 14px;
    color: $gray-lightest;
  }
  &::placeholder {
    font-weight: 300;
    font-size: 14px;
    color: $gray-lightest;
  }
}
.form {
  display: flex;
  flex-direction: column;
  &__button {
    margin: 0 auto;
  }
  &-item {
    display: flex;
    flex-direction: column;
    &:not(:first-child) {
      margin-bottom: 20px;
    }
    &__label {
      margin-bottom: 6px;
    }
    &__input {
      padding: 0 5px;
      height: 32px;
      background: #3e4459;
      border: 0;
      outline: none;
      border-radius: 5px;
    }
    &__select {
      padding: 0 5px;
      width: 303px;
      height: 32px;
      background: #3e4459;
      border: none;
      outline: none;
      border-radius: 5px;
    }
    &__textarea {
      height: 56px;
      font-family: inherit;
      padding: 0 5px;
      resize: none;
      background: #3e4459;
      border: none;
      outline: none;
      border-radius: 5px;
    }
  }
}
.invisible {
  display: none;
}
</style>
