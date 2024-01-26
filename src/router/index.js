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
import AccountsIndexView from "@/views/Accounts/AccountsIndexView.vue";
import AccountEditView from "@/views/Accounts/AccountEditView.vue";
import AccountDetailsView from "@/views/Accounts/AccountDetailsView.vue";
import DealEditView from "@/views/Deals/DealEditView.vue";
import DealDetailsView from "@/views/Deals/DealDetailsView.vue";
import DealsIndexView from "@/views/Deals/DealsIndexView.vue";
import UsersIndexView from "@/views/Users/UsersIndexView.vue";
import UserEditView from "@/views/Users/UserEditView.vue";
import UserDetailsView from "@/views/Users/UserDetailsView.vue";
import HomeIndexView from "@/views/Home/HomeIndexView.vue";


const routes = [
    {
        path: "/home",
        name: "home",
        component: HomeIndexView,
    },

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
        path: "/accounts",
        name: "accounts",
        component: AccountsIndexView,
    },
    {
        path: "/accounts/create",
        name: "accounts-create",
        component: AccountEditView,
    },
    {
        path: "/accounts/:id",
        name: "accounts-details",
        component: AccountDetailsView,
    },
    {
        path: "/accounts/:id/edit",
        name: "accounts-edit",
        component: AccountEditView,
    },
    {
        path: "/deals",
        name: "deals",
        component: DealsIndexView,
    },
    {
        path: "/deals/create",
        name: "deals-create",
        component: DealEditView,
    },
    {
        path: "/deals/:id",
        name: "deals-details",
        component: DealDetailsView,
    },
    {
        path: "/deals/:id/edit",
        name: "deals-edit",
        component: DealEditView,
    },


    {
        path: "/users",
        name: "users",
        component: UsersIndexView,
    },
    {
        path: "/users/create",
        name: "users-create",
        component: UserEditView,
    },
    {
        path: "/users/:id",
        name: "users-details",
        component: UserDetailsView,
    },
    {
        path: "/users/:id/edit",
        name: "users-edit",
        component: UserEditView,
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
