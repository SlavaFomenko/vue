<template>
  <div class="notfound-container">
    <div class="notfound-content">
      <h1 class="notfound-title">404</h1>
      <p class="notfound-text">Сторінку не знайдено</p>
      <button @click="$router.push('/')" class="home-button">
        На головну
      </button>
    </div>
  </div>
</template>

<style scoped>
.notfound-container {
  min-height: 100vh;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.notfound-content {
  text-align: center;
}

.notfound-title {
  font-size: 6rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
}

.notfound-text {
  font-size: 1.5rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.home-button {
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.home-button:hover {
  background: #2563eb;
}
</style>
