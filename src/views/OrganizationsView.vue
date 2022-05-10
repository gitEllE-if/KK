<template>
  <main class="main">
    <div class="main-container">
      <div class="main-top">
        <h1 class="g-title__h1">Организации</h1>
        <div class="main-top-right">
          <input
            class="main-top__input"
            placeholder="Поиск организации по ИНН или ОГРН"
          />
          <button class="main-top__button">Найти</button>
          <PageControl />
        </div>
      </div>
      <div class="main-content">
        <article class="g-article">
          <div class="article-table g-text-second__small organizations-table">
            <v-client-table
              :data="organizations"
              :columns="columns"
              :options="options"
            >
              <template v-slot:name="props"
                ><div class="col-name">
                  <icon-base
                    :class="'rating' + props.row.rating"
                    icon-name="bar"
                    width="18"
                    height="18"
                    viewBox="0 0 17 19"
                    ><icon-bar
                  /></icon-base>
                  {{
                    props.row.name.length > 25
                      ? props.row.name.substring(0, 25) + "..."
                      : props.row.name
                  }}
                </div></template
              >
              <template v-slot:rating>
                <icon-base
                  icon-name="edit"
                  width="18"
                  height="18"
                  viewBox="0 0 15 14"
                  ><icon-edit
                /></icon-base>
              </template>
            </v-client-table>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import PageControl from "@/components/PageControl.vue";
import IconBase from "@/components/IconBase.vue";
import IconEdit from "@/components/icon/IconEdit.vue";
import IconBar from "@/components/icon/IconBar.vue";

export default {
  name: "OrganizationsView",
  components: {
    PageControl,
    IconBase,
    IconEdit,
    IconBar,
  },
  data() {
    return {
      options: {
        filterable: false,
        perPage: 14,
        pagination: {
          show: false,
          // dropdown: false,
          chunk: 14,
        },
        headings: {
          name: "Наименование организации",
          inn: "ИНН",
          director: "Руководитель",
          address: "Адрес",
          rating: " ",
        },
      },
    };
  },
  created() {
    this.$store.dispatch("getOrganizations");
  },
  computed: {
    ...mapState({
      organizations: (state) => state.organizations,
    }),
    columns: function () {
      return Object.keys(this.organizations[0]) || [];
    },
  },
};
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
    &-right {
      display: flex;
    }
    &__input {
      width: 465px;
      padding: 0 10px;
      background: #3e4459;
      border: none;
      outline: none;
      border-radius: 5px;
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
    &__button {
      padding: 7px 30px;
      margin: 0 30px;
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
    &__article {
      position: relative;
      width: 340px;
      height: 230px;
      margin-bottom: 30px;
    }
  }
}
</style>

<style lang="scss">
@import "@/assets/style/_variables.scss";
.organizations-table {
  .VueTables {
    .VueTables__table {
      text-align: left;
      thead {
        height: 50px;
        color: white;
        th:not(:first-child) {
          padding-left: 24px;
          padding-right: 24px;
        }
      }
      .VueTables__row {
        height: 50px;
        &:not(:last-child) {
          border-bottom: 1px solid $gray-dark;
        }
        td {
          &:not(:first-child) {
            padding-left: 24px;
            padding-right: 24px;
          }
          &:not(:last-child) {
            border-right: 1px solid $gray-dark;
          }
        }
      }
    }
  }
  .row {
    display: none;
  }
  .col-name {
    display: flex;
    align-items: center;
    .rating1 {
      &:first-child {
        margin-right: 10px;
      }
      .bar1 {
        fill: $red-main;
      }
      .bar2 {
        fill: $gray-light;
      }
      .bar3 {
        fill: $gray-light;
      }
    }
    .rating2 {
      &:first-child {
        margin-right: 10px;
      }
      .bar1 {
        fill: $blue-dark;
      }
      .bar2 {
        fill: $blue-dark;
      }
      .bar3 {
        fill: $gray-light;
      }
    }
    .rating3 {
      &:first-child {
        margin-right: 10px;
      }
      .bar1 {
        fill: $blue-main;
      }
      .bar2 {
        fill: $blue-main;
      }
      .bar3 {
        fill: $blue-main;
      }
    }
  }
}
</style>
