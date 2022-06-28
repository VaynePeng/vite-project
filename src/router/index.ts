import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = Cookies.get("token");
  if (to.name !== "Login" && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
