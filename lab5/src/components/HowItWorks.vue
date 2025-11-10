<template>
  <section class="how-it-works">
    <div class="container">
      <h2 class="section-title">Як це працює</h2>
      <p class="section-subtitle">Почніть за 3 простих кроки</p>

      <Timeline :value="steps" align="alternate">
        <template #marker="{ item }">
          <span class="step-marker">
            <i :class="item.icon"></i>
          </span>
        </template>
        <template #content="{ item }">
          <Card>
            <template #title>{{ item.title }}</template>
            <template #content>
              <p>{{ item.description }}</p>
            </template>
          </Card>
        </template>
      </Timeline>
    </div>
  </section>
</template>

<script setup>
import Timeline from 'primevue/timeline'
import Card from 'primevue/card'

const steps = [
  {
    icon: 'pi pi-user-plus',
    title: 'Крок 1: Реєстрація',
    description: 'Створіть аккаунт за 30 секунд. Email, пароль - і готово!'
  },
  {
    icon: 'pi pi-cog',
    title: 'Крок 2: Налаштування',
    description: 'Створіть свій перший проєкт та запросіть команду'
  },
  {
    icon: 'pi pi-check-circle',
    title: 'Крок 3: Почніть працювати',
    description: 'Додавайте задачі, призначайте виконавців та відстежуйте прогрес'
  }
]
</script>

<style scoped>
.how-it-works {
  background: #f8fafc;
}

.step-marker {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1.5rem;
}
</style>