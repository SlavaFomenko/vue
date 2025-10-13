<template>
  <div class="not-found">
    <div class="not-found-content">
      <div class="error-animation">
        <span class="error-number">4</span>
        <span class="error-icon">🔍</span>
        <span class="error-number">4</span>
      </div>

      <h1 class="error-title">Page Not Found</h1>
      <p class="error-text">
        Oops! The page you're looking for doesn't exist.
      </p>

      <router-link to="/" class="home-button">
        Go Back Home
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.not-found-content {
  text-align: center;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.error-animation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 6rem;
  font-weight: 800;
}

.error-number {
  color: var(--accent);
  animation: bounce 1s ease infinite;
}

.error-number:first-child {
  animation-delay: 0s;
}

.error-number:last-child {
  animation-delay: 0.2s;
}

.error-icon {
  animation: rotate 2s linear infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.error-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.error-text {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.home-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--accent);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all 0.3s ease;
}

.home-button:hover {
  background-color: var(--accent-hover);
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 768px) {
  .error-animation {
    font-size: 4rem;
  }

  .error-title {
    font-size: 2rem;
  }

  .error-text {
    font-size: 1rem;
  }
}
</style>