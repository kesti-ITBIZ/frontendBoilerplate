import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Hello",
            component: () => import("./components/hello/Hello")
        },
        {
            path: "/world",
            name: "World",
            component: () => import("./components/world/World")
        }
    ]
});
