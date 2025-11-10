<template>
  <section class="testimonials">
    <div class="container">
      <h2 class="section-title">Відгуки клієнтів</h2>
      <p class="section-subtitle">Що кажуть наші користувачі</p>

      <Carousel
          :value="testimonials"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
          :autoplayInterval="5000"
      >
        <template #item="{ data }">
          <Card class="testimonial-card">
            <template #header>
              <div class="testimonial-header">
                <Avatar
                    :label="data.author.charAt(0)"
                    size="large"
                    shape="circle"
                    style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;"
                />
              </div>
            </template>
            <template #content>
              <div class="rating">
                <i v-for="n in 5" :key="n" class="pi pi-star-fill"></i>
              </div>
              <p class="testimonial-text">"{{ data.text }}"</p>
            </template>
            <template #footer>
              <div class="testimonial-author">
                <strong>{{ data.author }}</strong>
                <span>{{ data.position }}</span>
                <Button
                    icon="pi pi-copy"
                    text
                    rounded
                    size="small"
                    @click="copyTestimonial(data)"
                    v-tooltip.top="'Копіювати відгук'"
                />
              </div>
            </template>
          </Card>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
import Card from 'primevue/card'
import Carousel from 'primevue/carousel'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const { proxy } = getCurrentInstance()

const testimonials = ref([
  {
    author: 'Олена Коваленко',
    position: 'CEO, TechStart',
    text: 'TaskFlow повністю змінив наш підхід до управління проєктами. Продуктивність зросла на 40%!'
  },
  {
    author: 'Максим Петренко',
    position: 'Project Manager, Digital Agency',
    text: 'Найкраща платформа для команд. Інтуїтивно зрозуміла та потужна водночас.'
  },
  {
    author: 'Анна Шевченко',
    position: 'Team Lead, StartupHub',
    text: 'Чудова підтримка та постійні оновлення. Рекомендую всім командам!'
  },
  {
    author: 'Ігор Мельник',
    position: 'CTO, FinTech Solutions',
    text: 'Безпека та надійність на вищому рівні. Довіряємо TaskFlow всі наші проєкти.'
  },
  {
    author: 'Марія Бойко',
    position: 'Founder, Creative Studio',
    text: 'Простота використання та функціональність - ідеальне поєднання для нашої команди.'
  }
])

const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
])

function copyTestimonial(testimonial) {
  const text = `Відгук: "${testimonial.text}"
Автор: ${testimonial.author}, ${testimonial.position}`

  if (proxy.$copyToClipboard(text)) {
    toast.add({
      severity: 'success',
      summary: 'Скопійовано',
      detail: 'Відгук скопійовано в буфер обміну',
      life: 3000
    })
  }
}
</script>

<style scoped>
.testimonials {
  background: #f8fafc;
}

.testimonial-card {
  margin: 1rem;
  height: 100%;
}

.testimonial-header {
  display: flex;
  justify-content: center;
  padding: 2rem 0 1rem;
}

.rating {
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  margin-bottom: 1rem;
  color: #fbbf24;
}

.testimonial-text {
  font-style: italic;
  color: #475569;
  text-align: center;
  line-height: 1.8;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.testimonial-author strong {
  color: #1e293b;
}

.testimonial-author span {
  color: #64748b;
  font-size: 0.875rem;
}
</style>