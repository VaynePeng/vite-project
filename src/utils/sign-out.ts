// useRouter 只能在 setup 中生效，在这里使用会返回 undefined
import router from '@/router'
import clearCookies from '@/utils/clear-cookies'

const signOut = (name = 'Login'): void => {
  // 清空所有cookie
  clearCookies()
  try {
    router.push({ name })
  } catch (error) {
    console.log('router error', error)
    router.push({ name: 'Login' })
  }
}

export default signOut
