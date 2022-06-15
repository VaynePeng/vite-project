<script setup lang="ts">
import { menuList } from '@/router/routes'
</script>

<template>
  <el-menu
    active-text-color="#ffffff"
    background-color="#001529"
    class="aside"
    default-active="0"
    text-color="#bfcbd9"
  >
    <template v-for="(item, index) in menuList" :key="index">
      <template v-if="item.children?.length">
        <el-sub-menu :index="`${index}`">
          <template #title>
            <el-icon>
              <component :is="item.meta?.icon" />
            </el-icon>
            <span>{{ item.meta?.name }}</span>
          </template>
          <el-menu-item-group>
            <template v-for="(element, i) in item.children" :key="i">
              <el-menu-item :index="`${index}-${i}`">
                {{ element.meta?.title }}
              </el-menu-item>
            </template>
          </el-menu-item-group>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :index="`${index}`">
          <el-icon>
            <component :is="item.meta?.icon" />
          </el-icon>
          <span>{{ item.meta?.title }}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<style scoped lang="less">
.aside {
  height: 100%;
}
</style>
