import { createApp } from 'vue'
import router from '@/router'
import pinia from '@/store'
import { i18n } from '@/locales'

import 'element-plus/dist/index.css'
import '@/assets/styles/element.less'
import '@/assets/styles/index.less'

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
