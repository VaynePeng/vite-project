// useRouter 只能在 setup 中生效，在这里使用会返回 undefined
import router from '@/router'
import clearCookies from '@/utils/clear-cookies'

const logOut = (name = 'Login'): void => {
  // 清空所有cookie
  clearCookies()
  // 跳转到登录页
  try {
    router.push({ name })
  } catch (error) {
    console.log('router error', error)
    // 传入路由无效，自动导航到登录页
    router.push({ name: 'Login' })
  }
}

export default logOut
