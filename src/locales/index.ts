import elementLocale from './ element-ui'

enum LANG {
  ZH_CN = 'zhCn',
  EN = 'en'
}

const localeMap = [
  {
    lang: LANG.ZH_CN,
    name: '简体中文'
  },
  {
    lang: LANG.EN,
    name: 'English'
  }
]

export { localeMap, LANG, elementLocale }
