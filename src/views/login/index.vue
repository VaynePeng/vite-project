<script setup lang="ts">
import Cookies from 'js-cookie'
import { useRouter } from 'vue-router'

const router = useRouter()

const login = () => {
  Cookies.set('token', 'success')
  router.push({ name: 'Home' })
}
</script>

<template>
  <div class="login">
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<style scoped></style>
