<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <i class="pi pi-bolt"></i>
          <span>TaskFlow</span>
        </div>

        <nav class="nav">
          <a href="#features">Переваги</a>
          <a href="#pricing">Тарифи</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Контакти</a>
        </nav>

        <div class="header-actions">
          <Button label="Увійти" text />
          <Button label="Спробувати безкоштовно" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Button from 'primevue/button'
</script>

<style scoped>
.header {
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 2rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #6366f1;
}

.logo i {
  font-size: 2rem;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  text-decoration: none;
  color: #64748b;
  font-weight: 500;
  transition: color 0.3s;
}

.nav a:hover {
  color: #6366f1;
}

.header-actions {
  display: flex;
  gap: 1rem;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
}
</style>