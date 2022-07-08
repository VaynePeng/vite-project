import { createI18n } from 'vue-i18n'
import elementLocale from '@/locales/ element-ui'
import { LANGUE, localeMap } from './config'
import langue from './langue'

const i18n = createI18n({
  locale: LANGUE.ZH_CN,
  fallbackLocale: LANGUE.ZH_CN,
  globalInjection: true,
  messages: {
    ...langue
  }
})

export { LANGUE, localeMap, elementLocale, i18n }
