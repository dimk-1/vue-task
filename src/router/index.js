import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "user-list",
      component: () => import("../views/UserList.vue"),
    },
    {
      path: "/details/:login",
      name: "user-details",
      component: () => import("../views/UserDetails.vue"),
    },
  ],
});

export default router;
