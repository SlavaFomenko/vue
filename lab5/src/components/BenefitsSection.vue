<template>
  <section id="features" class="benefits">
    <div class="container">
      <h2 class="section-title">Переваги TaskFlow</h2>
      <p class="section-subtitle">Все необхідне для ефективної роботи команди</p>

      <div class="benefits-grid">
        <Card v-for="benefit in benefits" :key="benefit.title">
          <template #header>
            <div class="benefit-icon">
              <i :class="benefit.icon"></i>
            </div>
          </template>
          <template #title>{{ benefit.title }}</template>
          <template #content>
            <p>{{ benefit.description }}</p>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from 'primevue/card'

const benefits = [
  {
    icon: 'pi pi-calendar',
    title: 'Планування задач',
    description: 'Створюйте, призначайте та відстежуйте задачі з зручними дедлайнами'
  },
  {
    icon: 'pi pi-users',
    title: 'Командна робота',
    description: 'Запрошуйте колег, розподіляйте ролі та працюйте разом'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Аналітика',
    description: 'Звіти та графіки для відстеження продуктивності команди'
  },
  {
    icon: 'pi pi-mobile',
    title: 'Мобільні додатки',
    description: 'Працюйте з будь-якого пристрою - iOS, Android, Desktop'
  },
  {
    icon: 'pi pi-bell',
    title: 'Сповіщення',
    description: 'Миттєві повідомлення про важливі події та зміни'
  },
  {
    icon: 'pi pi-shield',
    title: 'Безпека',
    description: 'Шифрування даних та резервне копіювання'
  }
]
</script>

<style scoped>
.benefits {
  background: white;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.benefit-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 80px;
  height: 80px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.benefit-icon i {
  font-size: 2.5rem;
  color: white;
}

@media (max-width: 768px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>