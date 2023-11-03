import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "", component: () => import("../pages/home.vue") },
    {
      path: "/history",
      component: () => import("../pages/profile/history.vue"),
    },
    {
      path: "/profile",
      component: () => import("../pages/profile/profile.vue"),
    },
    { path: "/honor", component: () => import("../pages/profile/honor.vue") },
    {
      path: "/contact",
      component: () => import("../pages/contact/contact.vue"),
    },
    { path: "/join", component: () => import("../pages/contact/join.vue") },
    {
      path: "/advantage",
      component: () => import("../pages/contact/advantage.vue"),
    },
    {
      path: "/dynamic",
      component: () => import("../pages/dynamic/dynamic.vue"),
    },
    {
      path: "/brand1",
      component: () => import("../pages/brands/brand1.vue"),
    },
    {
      path: "/brand2",
      component: () => import("../pages/brands/brand2.vue")
    }
  ],
});

export default router;
