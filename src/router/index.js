import { createRouter, createWebHistory } from "vue-router";
import DashboardIndexView from "../views/Dashboard/DashboardIndexView.vue";

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardIndexView,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
