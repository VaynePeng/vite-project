<script setup lang="ts">
import { useLangue } from '@/store'

const langStore = useLangue()
</script>

<template>
  <div class="home">
    {{ langStore.lang }}
    <el-date-picker type="date" placeholder="Pick a day" />
    <el-button> 小维 </el-button>
  </div>
</template>

<style scoped lang="less">
.home {
}
</style>
