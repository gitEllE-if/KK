<template>
  <div class="page-control">
    <icon-base
      class="page-control-item"
      icon-name="plus"
      width="32"
      height="32"
      viewBox="0 0 455 455"
      ><icon-plus
    /></icon-base>
    <icon-base
      class="page-control-item"
      icon-name="settings"
      width="32"
      height="32"
      viewBox="0 0 34 34"
      ><icon-settings
    /></icon-base>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconPlus from "@/components/icon/IconPlus.vue";
import IconSettings from "@/components/icon/IconSettings.vue";

export default {
  name: "PageControl",
  components: { IconBase, IconPlus, IconSettings },
};
</script>

<style scoped lang="scss">
.page-control {
  &-item {
    display: inline-block;
    cursor: pointer;
  }
  :first-child {
    margin-right: 28px;
  }
}
</style>
