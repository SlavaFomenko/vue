<template>
  <div class="products-view">
    <h1>{{ t('products.title', {}, { modifier: 'capitalize' }) }}</h1>

    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <h3>{{ product.title }}</h3>
        <p class="product-price">
          {{ t('products.price') }}: {{ product.price }} {{ t('cart.currency') }}
        </p>
        <button @click="addToCart(product)" class="add-btn">
          {{ t('products.addToCart') }}
        </button>
      </div>
    </div>

    <div v-if="notification" class="notification">
      {{ notification }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'

const { t } = useI18n()
const productsStore = useProductsStore()
const cartStore = useCartStore()
const { products } = storeToRefs(productsStore)
const notification = ref('')

function addToCart(product) {
  cartStore.add(product)
  notification.value = t('products.added')

  setTimeout(() => {
    notification.value = ''
  }, 2000)
}
</script>

<style scoped>
.products-view {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.product-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.product-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.product-price {
  color: #3498db;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.add-btn {
  background: #2ecc71;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;
  width: 100%;
}

.add-btn:hover {
  background: #27ae60;
}

.notification {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #2ecc71;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>