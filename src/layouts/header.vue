<script setup lang="ts">
import UserInfo from './components/user-info.vue'
import Locale from './components/locale.vue'
</script>

<template>
  <div class="header full-height-flex">
    <div class="header--item full-height-flex">
      <Locale />
    </div>
    <div class="header--item full-height-flex">
      <UserInfo />
    </div>
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
  box-shadow: 0 1px 3px #f5f5f5;
  &--item {
    cursor: pointer;
    padding: 0 10px;
    &:hover {
      background-color: #f6f6f6;
    }
  }
}
</style>
