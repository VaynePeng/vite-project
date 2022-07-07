<script setup lang="ts">
import { elementLocale } from '@/locales'
import { useLangue } from './store'

const langue = useLangue()
</script>

<template>
  <el-config-provider :locale="elementLocale[langue.langue]">
    <router-view />
  </el-config-provider>
</template>

<style lang="less">
html,
body {
  padding: 0;
  margin: 0;
}
</style>
