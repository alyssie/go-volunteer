import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Events from "../pages/Events.vue";
import Merchants from "../pages/Merchants.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;