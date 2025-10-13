<template>
  <div class="home-container">
    <div class="home-content">
      <h1 class="home-title">Вітаємо в системі</h1>
      <p class="home-subtitle">Vue 3 лабораторна робота</p>
      <div class="home-buttons">
        <button @click="$router.push('/login')" class="btn btn-primary">
          Увійти
        </button>
        <button @click="$router.push('/register')" class="btn btn-secondary">
          Зареєструватись
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #faf5ff 0%, #dbeafe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.home-content {
  text-align: center;
}

.home-title {
  font-size: 3rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
}

.home-subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.home-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: #6b7280;
  color: white;
}

.btn-secondary:hover {
  background: #4b5563;
}
</style>
