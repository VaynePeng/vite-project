<script setup lang="ts">
import Header from './header.vue'
import Aside from './aside.vue'
</script>

<template>
  <div class="layout">
    <el-container class="layout--container">
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <Header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.layout {
  &--container {
    height: 100vh;
  }
}
</style>
