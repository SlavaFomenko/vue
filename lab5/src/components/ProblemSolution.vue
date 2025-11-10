<template>
  <section class="problem-solution">
    <div class="container">
      <div class="problem">
        <h2 class="section-title">Проблема</h2>
        <Card>
          <template #content>
            <div class="problem-items">
              <div class="problem-item">
                <i class="pi pi-times-circle"></i>
                <h3>Розсіяні задачі</h3>
                <p>Задачі розкидані по email, месенджерах та блокнотах</p>
              </div>
              <div class="problem-item">
                <i class="pi pi-times-circle"></i>
                <h3>Відсутність контролю</h3>
                <p>Важко відстежити прогрес та дедлайни проєктів</p>
              </div>
              <div class="problem-item">
                <i class="pi pi-times-circle"></i>
                <h3>Погана комунікація</h3>
                <p>Команда не синхронізована, втрачається інформація</p>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <Divider align="center">
        <i class="pi pi-arrow-down" style="font-size: 2rem; color: #6366f1;"></i>
      </Divider>

      <div class="solution">
        <h2 class="section-title">Рішення</h2>
        <Card>
          <template #content>
            <div class="solution-items">
              <div class="solution-item">
                <i class="pi pi-check-circle"></i>
                <h3>Централізація</h3>
                <p>Всі задачі в одному місці з зручною організацією</p>
              </div>
              <div class="solution-item">
                <i class="pi pi-check-circle"></i>
                <h3>Контроль у реальному часі</h3>
                <p>Відстежуйте прогрес, дедлайни та пріоритети</p>
              </div>
              <div class="solution-item">
                <i class="pi pi-check-circle"></i>
                <h3>Ефективна співпраця</h3>
                <p>Команда завжди в курсі подій та змін</p>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from 'primevue/card'
import Divider from 'primevue/divider'
</script>

<style scoped>
.problem-solution {
  background: #f8fafc;
}

.problem-items,
.solution-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.problem-item,
.solution-item {
  text-align: center;
}

.problem-item i {
  font-size: 3rem;
  color: #ef4444;
  margin-bottom: 1rem;
}

.solution-item i {
  font-size: 3rem;
  color: #10b981;
  margin-bottom: 1rem;
}

.problem-item h3,
.solution-item h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

.problem-item p,
.solution-item p {
  color: #64748b;
}

@media (max-width: 768px) {
  .problem-items,
  .solution-items {
    grid-template-columns: 1fr;
  }
}
</style>