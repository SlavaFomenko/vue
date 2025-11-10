<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-links">
        <RouterLink to="/profile" class="nav-link">
          {{ t('nav.profile') }}
        </RouterLink>
        <RouterLink to="/cart" class="nav-link">
          {{ t('nav.cart') }}
          <span v-if="totalCount > 0" class="badge">{{ totalCount }}</span>
        </RouterLink>
        <RouterLink to="/products" class="nav-link">
          {{ t('nav.products') }}
        </RouterLink>
      </div>

      <LanguageSwitcher />
    </div>
  </nav>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useCartStore } from '../stores/cart'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const cartStore = useCartStore()
const { totalCount } = storeToRefs(cartStore)
</script>

<style scoped>
.navbar {
  background: #2c3e50;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link:hover {
  color: #3498db;
}

.nav-link.router-link-active {
  color: #3498db;
}

.badge {
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
}
</style>