<script setup lang="ts"></script>

<template>
  <div class="home">
    <el-date-picker type="date" placeholder="Pick a day" />
    <el-button> {{ $t('submit') }} </el-button>
  </div>
</template>

<style scoped lang="less">
.home {
}
</style>
