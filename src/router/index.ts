import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PrimaryPage from "../views/PrimaryPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "PrimaryPage",
    component: PrimaryPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
