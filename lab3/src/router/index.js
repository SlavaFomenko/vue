import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Article from '@/views/Article.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { transition: 'fade' }
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: Article,
        meta: { transition: 'slide' },
        props: true
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { transition: 'scale' }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { top: 0, behavior: 'smooth' };
    }
});

export default router;