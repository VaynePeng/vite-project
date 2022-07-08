import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'
import useLangue from './modules/langue'

const pinia = createPinia()

pinia.use(piniaPersist)

export { pinia as default, useLangue }
