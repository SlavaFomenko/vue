<template>
  <div class="cart-view">
    <h1>{{ t('cart.title', {}, { modifier: 'upper' }) }}</h1>

    <div v-if="items.length === 0" class="empty-cart">
      <p>{{ t('cart.empty') }}</p>
    </div>

    <div v-else>
      <div class="cart-items">
        <div v-for="item in items" :key="item.id" class="cart-item">
          <div class="item-info">
            <h3>{{ item.title }}</h3>
            <p class="item-price">{{ item.price }} {{ t('cart.currency') }}</p>
            <p class="item-qty">Qty: {{ item.qty }}</p>
          </div>
          <button @click="cartStore.remove(item.id)" class="remove-btn">
            {{ t('cart.remove') }}
          </button>
        </div>
      </div>

      <div class="cart-summary">
        <div class="summary-row">
          <span>{{ t('cart.count') }}:</span>
          <strong>{{ totalCount }}</strong>
        </div>
        <div class="summary-row total">
          <span>{{ t('cart.total') }}:</span>
          <strong>{{ totalPrice }} {{ t('cart.currency') }}</strong>
        </div>
        <button @click="cartStore.clear()" class="clear-btn">
          {{ t('cart.clear') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useCartStore } from '../stores/cart'

const { t } = useI18n()
const cartStore = useCartStore()
const { items, totalCount, totalPrice } = storeToRefs(cartStore)
</script>

<style scoped>
.cart-view {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.empty-cart {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  color: #7f8c8d;
  font-size: 1.2rem;
}

.cart-items {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #ecf0f1;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-info h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.item-price {
  color: #3498db;
  font-weight: bold;
  font-size: 1.1rem;
}

.item-qty {
  color: #7f8c8d;
  margin-top: 0.25rem;
}

.remove-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.remove-btn:hover {
  background: #c0392b;
}

.cart-summary {
  background: white;
  border-radius: 12px;
  padding: 2rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  font-size: 1.1rem;
}

.summary-row.total {
  border-top: 2px solid #ecf0f1;
  margin-top: 1rem;
  padding-top: 1rem;
  font-size: 1.3rem;
  color: #2c3e50;
}

.clear-btn {
  width: 100%;
  background: #95a5a6;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background 0.3s;
}

.clear-btn:hover {
  background: #7f8c8d;
}
</style>