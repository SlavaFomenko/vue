<template>
  <section id="pricing" class="pricing">
    <div class="container">
      <h2 class="section-title">Тарифні плани</h2>
      <p class="section-subtitle">Оберіть план, який підходить вашій команді</p>

      <div class="plans-grid">
        <Card v-for="plan in plans" :key="plan.name" :class="{ featured: plan.featured }">
          <template #header>
            <div class="plan-header">
              <Chip v-if="plan.featured" label="Популярний" class="featured-badge" />
              <h3>{{ plan.name }}</h3>
              <p class="plan-description">{{ plan.description }}</p>
              <div class="plan-price">
                <span class="price-amount">{{ plan.price }}</span>
                <span class="price-period">грн/міс</span>
              </div>
            </div>
          </template>
          <template #content>
            <ul class="features-list">
              <li v-for="feature in plan.features" :key="feature">
                <i class="pi pi-check"></i>
                {{ feature }}
              </li>
            </ul>
          </template>
          <template #footer>
            <Button
                :label="plan.buttonText"
                :outlined="!plan.featured"
                class="w-full"
                @click="copyPlanInfo(plan)"
            />
          </template>
        </Card>
      </div>

      <Divider />

      <div class="calculator">
        <Card>
          <template #title>Калькулятор вартості</template>
          <template #content>
            <div class="calculator-content">
              <div class="calculator-input">
                <label>Кількість користувачів</label>
                <InputNumber
                    v-model="userCount"
                    :min="1"
                    :max="1000"
                    showButtons
                    buttonLayout="horizontal"
                    decrementButtonIcon="pi pi-minus"
                    incrementButtonIcon="pi pi-plus"
                />
              </div>
              <div class="calculator-result">
                <h3>Орієнтовна вартість</h3>
                <div class="result-price">{{ calculatedPrice }} грн/міс</div>
                <Button
                    label="Копіювати розрахунок"
                    icon="pi pi-copy"
                    text
                    @click="copyCalculation"
                />
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, inject, getCurrentInstance } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Chip from 'primevue/chip'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const { proxy } = getCurrentInstance()

const userCount = ref(5)

const plans = [
  {
    name: 'Basic',
    description: 'Для малих команд та стартапів',
    price: 299,
    features: [
      'До 10 користувачів',
      '100 активних задач',
      'Базові звіти',
      'Email підтримка'
    ],
    buttonText: 'Обрати Basic'
  },
  {
    name: 'Team',
    description: 'Для зростаючих команд',
    price: 799,
    featured: true,
    features: [
      'До 50 користувачів',
      'Необмежені задачі',
      'Розширена аналітика',
      'Пріоритетна підтримка',
      'Інтеграції',
      'API доступ'
    ],
    buttonText: 'Обрати Team'
  },
  {
    name: 'Enterprise',
    description: 'Для великих організацій',
    price: 1999,
    features: [
      'Необмежена кількість користувачів',
      'Всі функції Team',
      'Персональний менеджер',
      'SLA гарантії',
      'Кастомізація',
      'Навчання команди'
    ],
    buttonText: 'Обрати Enterprise'
  }
]

const calculatedPrice = computed(() => {
  const basePrice = 50
  return userCount.value * basePrice
})

function copyPlanInfo(plan) {
  const text = `План: ${plan.name}
Ціна: ${plan.price} грн/міс
Опис: ${plan.description}
Функції: ${plan.features.join(', ')}`

  if (proxy.$copyToClipboard(text)) {
    toast.add({
      severity: 'success',
      summary: 'Скопійовано',
      detail: `Інформацію про план "${plan.name}" скопійовано в буфер обміну`,
      life: 3000
    })
  }
}

function copyCalculation() {
  const text = `Розрахунок вартості TaskFlow:
Кількість користувачів: ${userCount.value}
Вартість: ${calculatedPrice.value} грн/міс`

  if (proxy.$copyToClipboard(text)) {
    toast.add({
      severity: 'success',
      summary: 'Скопійовано',
      detail: 'Розрахунок вартості скопійовано в буфер обміну',
      life: 3000
    })
  }
}
</script>

<style scoped>
.pricing {
  background: white;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.plan-header {
  padding: 2rem;
  text-align: center;
  position: relative;
}

.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #10b981;
}

.featured {
  border: 2px solid #6366f1;
  transform: scale(1.05);
}

.plan-header h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

.plan-description {
  color: #64748b;
  margin-bottom: 1.5rem;
}

.plan-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
}

.price-amount {
  font-size: 3rem;
  font-weight: 700;
  color: #6366f1;
}

.price-period {
  color: #64748b;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 0.75rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #475569;
}

.features-list li i {
  color: #10b981;
  font-weight: 600;
}

.calculator-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.calculator-input label {
  display: block;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #1e293b;
}

.calculator-result {
  text-align: center;
}

.result-price {
  font-size: 3rem;
  font-weight: 700;
  color: #6366f1;
  margin: 1rem 0;
}

@media (max-width: 768px) {
  .plans-grid {
    grid-template-columns: 1fr;
  }

  .calculator-content {
    grid-template-columns: 1fr;
  }
}
</style>