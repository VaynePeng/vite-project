import { createPinia } from "pinia";
import useLangue from "./modules/langue";

const pinia = createPinia();

export { pinia as default, useLangue };
