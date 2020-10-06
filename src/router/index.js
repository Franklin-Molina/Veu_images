import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import About from '../views/About.vue'

const routes = [{
        path: '/',
        name: 'Index',
        component: Index

    },
    {
        path: '/Home',
        name: 'Home',
        component: Home


    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router