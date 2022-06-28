<script setup lang="ts">
import UserInfo from './components/user-info.vue'
import Locale from './components/locale.vue'
</script>

<template>
  <div class="header full-height-flex">
    <Locale class="header--item full-height-flex" />
    <UserInfo class="header--item full-height-flex" />
  </div>
</template>

<style scoped lang="less">
.full-height-flex {
  height: 100%;
  display: flex;
  align-items: center;
}
.header {
  justify-content: flex-end;
  box-shadow: 0 1px 3px var(--box-shadow-color);
  &--item {
    cursor: pointer;
    &:hover {
      background-color: var(--hover-background-color);
    }
  }
}
</style>
