import { defineStore } from 'pinia'
import { LANGUE } from '@/locales'

interface State {
  langue: LANGUE
}

const useLangue = defineStore('langue', {
  state: (): State => ({
    langue: LANGUE.ZH_CN
  }),
  actions: {
    changeLang(langue: LANGUE) {
      this.langue = langue
    }
  }
})

export default useLangue
