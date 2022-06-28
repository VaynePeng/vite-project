<script setup lang="ts">
import Cookies from 'js-cookie'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

interface Login {
  username: string
  password: string
}

const loginForm = reactive<Login>({
  username: '',
  password: ''
})

const checkFormDataFull = (form: Login): boolean => {
  return Object.values(form).every((element) => element !== '')
}

const handleLogin = (): void => {
  const pass = checkFormDataFull(loginForm)
  if (!pass) {
    ElMessage({
      message: '请输入用户名和密码',
      type: 'warning'
    })
    return
  }
  Cookies.set('token', 'success')
  router.push({ name: 'Home' })
}
</script>

<template>
  <div className="login">
    <div className="login-context">
      <form className="login-form">
        <div className="system-name">数字化租赁运营管理系统</div>
        <el-input
          v-model="loginForm.username"
          class="login-form--input"
          placeholder="请输入用户名"
        />
        <el-input
          v-model="loginForm.password"
          class="login-form--input"
          type="password"
          show-password
          placeholder="请输入密码"
        />
        <el-button
          class="login-form--login-button"
          type="primary"
          @click="handleLogin"
        >
          登录
        </el-button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="less">
.login {
  height: 100vh;
  overflow: hidden;
  background-color: #757ce8;
  background-image: url('@/assets/images/login_bg.png');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  &-context {
    box-sizing: border-box;
    width: 400px;
    background-color: var(--white);
    padding: 50px 30px;
    box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
    border-radius: 2px;
    .login-form {
      .system-name {
        margin-bottom: 30px;
        text-align: center;
        font-size: 20px;
        letter-spacing: 2px;
        color: var(--theme-color);
      }
      &--input {
        margin-bottom: 30px;
      }
      &--login-button {
        width: 100%;
      }
    }
  }
}
</style>
