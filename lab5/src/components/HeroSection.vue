<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Керуйте проєктами легко та ефективно</h1>
        <p class="hero-subtitle">
          TaskFlow - сучасна платформа для управління задачами,
          яка допоможе вашій команді працювати продуктивніше
        </p>

        <div class="hero-actions">
          <Button
              label="Почати безкоштовно"
              icon="pi pi-arrow-right"
              iconPos="right"
              size="large"
          />
          <Button
              label="Дивитись демо"
              icon="pi pi-play"
              outlined
              size="large"
          />
        </div>

        <div class="hero-stats">
          <div class="stat">
            <div class="stat-number">50K+</div>
            <div class="stat-label">Активних користувачів</div>
          </div>
          <div class="stat">
            <div class="stat-number">1M+</div>
            <div class="stat-label">Виконаних задач</div>
          </div>
          <div class="stat">
            <div class="stat-number">99.9%</div>
            <div class="stat-label">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from 'primevue/button'
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 2rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255,255,255,0.2);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }
}
</style>