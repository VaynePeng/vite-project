<script setup lang="ts">
import { Sunny } from '@element-plus/icons-vue'
import { localeMap } from '@/locales'
</script>

<template>
  <el-dropdown class="locale" trigger="click">
    <div class="locale--content">
      <el-icon :size="20">
        <Sunny />
      </el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in localeMap" :key="item.lang">
          {{ item.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="less">
.locale {
  &--content {
    display: flex;
    align-items: center;
  }
}
</style>
