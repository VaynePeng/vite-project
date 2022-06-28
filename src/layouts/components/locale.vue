<script setup lang="ts">
import { Sunny } from '@element-plus/icons-vue'
import { LANG, localeMap } from '@/locales'
import { useLangue } from '@/store'

const langue = useLangue()

const handleChangeLang = (lang: LANG): void => {
  langue.changeLang(lang)
}
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
        <template v-for="item in localeMap" :key="item.lang">
          <el-dropdown-item @click="handleChangeLang(item.lang)">
            {{ item.name }}
          </el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="less">
.locale {
  &--content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 var(--menu-padding);
  }
}
</style>
