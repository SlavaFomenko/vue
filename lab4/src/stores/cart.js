import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const items = ref([])

    const totalCount = computed(() => {
        return items.value.reduce((sum, item) => sum + item.qty, 0)
    })

    const totalPrice = computed(() => {
        return items.value.reduce((sum, item) => sum + (item.price * item.qty), 0)
    })

    function add(product) {
        const existingItem = items.value.find(item => item.id === product.id)

        if (existingItem) {
            existingItem.qty++
        } else {
            items.value.push({
                id: product.id,
                title: product.title,
                price: product.price,
                qty: 1
            })
        }
    }

    function remove(id) {
        const index = items.value.findIndex(item => item.id === id)
        if (index > -1) {
            items.value.splice(index, 1)
        }
    }

    function clear() {
        items.value = []
    }

    return {
        items,
        totalCount,
        totalPrice,
        add,
        remove,
        clear
    }
})