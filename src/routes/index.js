import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import QuizView from '../views/QuizView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/quiz/:id',
            name: 'quiz',
            component: QuizView,
            props: true
        }
    ]
})

export default router;