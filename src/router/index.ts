import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Events from "../pages/Events.vue";
import Merchants from "../pages/Merchants.vue";
import Maintenance from "../pages/Maintenance.vue";
import Dashboard from "../pages/Dashboard.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/events",
        name: "Events",
        component: Events,
    },
    {
        path: "/merchants",
        name: "Merchants",
        component: Merchants,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/maintenance",
        name: "Maintenance",
        component: Maintenance,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;