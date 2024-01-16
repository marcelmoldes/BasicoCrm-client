import {createRouter, createWebHistory} from "vue-router";
import DashboardIndexView from "../views/Dashboard/DashboardIndexView.vue";
import ContactsIndexView from "@/views/Contacts/ContactsIndexView.vue";
import ContactDetailsView from "@/views/Contacts/ContactDetailsView.vue";
import ContactEditView from "@/views/Contacts/ContactEditView.vue";
import RegisterIndexView from "@/views/Register/RegisterIndexView.vue";
import LoginIndexView from "@/views/LogIn/LoginIndexView.vue";
import ForgotPasswordIndexView from "@/views/LogIn/ForgotPasswordIndexView.vue";
import PersonalAccountIndexView from "@/views/PersonalAccount/PersonalAccountIndexView.vue";
import ActivitiesIndexView from "@/views/Activities/ActivitiesIndexView.vue";
import ActivityEditView from "@/views/Activities/ActivityEditView.vue";
import ActivityDetailsView from "@/views/Activities/ActivityDetailsView.vue";
import TasksIndexView from "@/views/Tasks/TasksIndexView.vue";
import TaskEditView from "@/views/Tasks/TaskEditView.vue";
import TaskDetailsView from "@/views/Tasks/TaskDetailsView.vue";


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
        path: "/activities",
        name: "activities",
        component: ActivitiesIndexView,
    },
    {
        path: "/activities/create",
        name: "activity-create",
        component: ActivityEditView,
    },
    {
        path: "/activities/:id",
        name: "activity-details",
        component: ActivityDetailsView,
    },
    {
        path: "/activities/:id/edit",
        name: "activity-edit",
        component: ActivityEditView,
    },



    {
        path: "/tasks",
        name: "tasks",
        component: TasksIndexView,
    },
    {
        path: "/tasks/create",
        name: "tasks-create",
        component: TaskEditView,
    },
    {
        path: "/tasks/:id",
        name: "tasks-details",
        component: TaskDetailsView,
    },
    {
        path: "/tasks/:id/edit",
        name: "task-edit",
        component: TaskEditView,
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
