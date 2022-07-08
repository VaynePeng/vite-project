import { defineStore } from 'pinia'
import { i18n, LANGUE } from '@/locales'

interface State {
  langue: LANGUE
}

const useLangue = defineStore('langue', {
  persist: true,
  state: (): State => ({
    langue: LANGUE.ZH_CN
  }),
  actions: {
    changeLang(langue: LANGUE) {
      this.langue = langue
      ;(i18n.global.locale as unknown as { value: LANGUE }).value = langue
    }
  }
})

export default useLangue
