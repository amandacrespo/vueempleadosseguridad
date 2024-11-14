import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";
import SubordinadosComponent from "./components/SubordinadosComponent.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('bearer_token');
            if (token) {
                next(); // Si tiene token, accede
            } else {
                next('/login'); // Si no tiene token, redirige a login
            }
        }
    },
    {
        path: '/login',
        component: LoginComponent,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('bearer_token');
            if (!token) {
                next(); 
            } else {
                next('/');
            }
        }
    },
    {
        path: '/perfil',
        component: PerfilComponent,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('bearer_token');
            if (token) {
                next();
            } else {
                next('/login');
            }
        }
    },
    {
        path: '/subordinados',
        component: SubordinadosComponent,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('bearer_token');
            if (token) {
                next();
            } else {
                next('/login');
            }
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;