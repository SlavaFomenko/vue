import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import CartView from '../views/CartView.vue'
import ProductsView from '../views/ProductsView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/profile'
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView
        },
        {
            path: '/products',
            name: 'products',
            component: ProductsView
        }
    ]
})

export default router