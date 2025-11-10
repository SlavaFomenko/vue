import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
    const products = ref([
        { id: 1, title: 'Ноутбук', price: 25000 },
        { id: 2, title: 'Смартфон', price: 15000 },
        { id: 3, title: 'Навушники', price: 2000 },
        { id: 4, title: 'Миша', price: 500 },
        { id: 5, title: 'Клавіатура', price: 1500 },
        { id: 6, title: 'Монітор', price: 8000 }
    ])

    return {
        products
    }
})