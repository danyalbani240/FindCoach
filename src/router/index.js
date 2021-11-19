import { createRouter, createWebHistory } from "vue-router";
import Coaches from "../views/coaches/index.vue";
import CoachDetail from "../views/coaches/CoachDetail.vue";
import CoachRegister from "../views/coaches/TheRegister.vue";
import TheLogin from "../views/coaches/TheLogin.vue";
import TheRequests from "../views/coaches/TheRequests.vue";
import notFound from "../views/404.vue";

const routes = [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    path: "/coaches",
    component: Coaches,
  },

  {
    path: "/coaches/:id",
    component: CoachDetail,
  },
  {
    path: "/login",
    component: TheLogin,
  },
  {
    path: "/Register",
    component: CoachRegister,
  },
  {
    path: "/Requsets",
    component: TheRequests,
  },
  {
    path: "/:NotFound(.*)",
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
