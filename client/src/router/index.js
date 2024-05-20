import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/signin',
            name: 'Signin',
            component: () => import('../views/SignIn.vue')
        }
    ]
})

export default router