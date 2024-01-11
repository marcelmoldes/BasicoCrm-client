import {createRouter, createWebHistory} from "vue-router";
import DashboardIndexView from "../views/Dashboard/DashboardIndexView.vue";
import ContactsIndexView from "@/views/Contacts/ContactsIndexView.vue";
import ContactDetailsView from "@/views/Contacts/ContactDetailsView.vue";
import ContactEditView from "@/views/Contacts/ContactEditView.vue";
import RegisterIndexView from "@/views/Register/RegisterIndexView.vue";
import LoginIndexView from "@/views/LogIn/LoginIndexView.vue";
import ForgotPasswordIndexView from "@/views/LogIn/ForgotPasswordIndexView.vue";
import PersonalAccountIndexView from "@/views/PersonalAccount/PersonalAccountIndexView.vue";


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
        path: "/contacts/create",
        name: "contact-create",
        component: ContactEditView,
    },
    {
        path: "/contacts/:id",
        name: "contact-details",
        component: ContactDetailsView,
    },
    {
        path: "/contacts/:id/edit",
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
    {
        path: "/forgot-password",
        name: "forgot-password",
        component: ForgotPasswordIndexView,
    },
    {
        path: "/personal-account",
        name: "personal-account",
        component: PersonalAccountIndexView,
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
