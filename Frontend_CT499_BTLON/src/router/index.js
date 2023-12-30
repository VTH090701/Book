import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Details from "../components/Details.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/create",
        name: "Create",
        component: () =>
            import( /* webpackChunkName: "create" */ "../views/Create.vue"),
    },
    {
        path: "/update/:id",
        name: "Update",
        component: () =>
            import( /* webpackChunkName: "update" */ "../views/Update.vue"),
    },
    {
        path: "/details/:id",
        name: "Details",
        component: Details,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;