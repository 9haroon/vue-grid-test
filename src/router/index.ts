import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PrimaryPage from "../assignment/features/primarypage/page/PrimaryPage.vue";
import overview from "../components/overview.vue"
import AssignRouter from "../assignment/AssignRouter"
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "",
    redirect: "assign/primary",
    component: overview,
    children: [...AssignRouter()]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
