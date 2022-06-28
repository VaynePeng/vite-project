import { defineStore } from "pinia";
import { LANG } from "@/locales";

interface State {
  lang: LANG;
}

const useLangue = defineStore("langue", {
  state: (): State => ({
    lang: LANG.ZH_CN,
  }),
  actions: {
    changeLang(lang: LANG) {
      this.lang = lang;
    },
  },
});

export default useLangue;
