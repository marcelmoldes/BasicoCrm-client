import { createRouter, createWebHistory } from "vue-router";
import DashboardIndexView from "../views/Dashboard/DashboardIndexView.vue";
import ContactsIndexView from "@/views/Contacts/ContactsIndexView.vue";
import ContactDetailsView from "@/views/Contacts/ContactDetailsView.vue";
import ContactEditView from "@/views/Contacts/ContactEditView.vue";
import RegisterIndexView from "@/views/Register/RegisterIndexView.vue";
import LoginIndexView from "@/views/LogIn/LoginIndexView.vue";

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardIndexView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsIndexView,
  },
  {
    path: "/contact-details",
    name: "contact-details",
    component: ContactDetailsView,
  },
  {
    path: "/contact-edit",
    name: "contact-edit",
    component: ContactEditView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterIndexView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginIndexView,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
