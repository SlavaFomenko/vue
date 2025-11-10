<template>
  <section id="faq" class="faq">
    <div class="container">
      <h2 class="section-title">Часті питання</h2>
      <p class="section-subtitle">Відповіді на популярні запитання</p>

      <Accordion :value="0">
        <AccordionPanel v-for="(faq, index) in faqs" :key="index" :value="index">
          <AccordionHeader>
            <span class="faq-question">{{ faq.question }}</span>
          </AccordionHeader>
          <AccordionContent>
            <p class="faq-answer">{{ faq.answer }}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <div class="faq-contact">
        <Message severity="info" :closable="false">
          <template #icon>
            <i class="pi pi-question-circle"></i>
          </template>
          Не знайшли відповідь?
          <a href="#contact">Напишіть нам</a> і ми з радістю допоможемо!
        </Message>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Message from 'primevue/message'

const faqs = ref([
  {
    question: 'Чи є безкоштовний пробний період?',
    answer: 'Так! Ми надаємо 14 днів безкоштовного доступу до всіх функцій Team плану. Кредитна картка не потрібна.'
  },
  {
    question: 'Чи можу я змінити план пізніше?',
    answer: 'Звичайно! Ви можете в будь-який момент перейти на вищий або нижчий план. Перерахунок вартості відбувається автоматично.'
  },
  {
    question: 'Які методи оплати ви приймаєте?',
    answer: 'Ми приймаємо всі основні банківські картки (Visa, Mastercard), а також банківські перекази для корпоративних клієнтів.'
  },
  {
    question: 'Чи безпечні мої дані?',
    answer: 'Абсолютно! Ми використовуємо шифрування SSL, регулярне резервне копіювання та сучасні стандарти безпеки для захисту ваших даних.'
  },
  {
    question: 'Чи є мобільні додатки?',
    answer: 'Так, у нас є нативні додатки для iOS та Android, а також прогресивний веб-додаток для всіх платформ.'
  },
  {
    question: 'Як працює підтримка?',
    answer: 'Basic план - email підтримка (відповідь протягом 24 годин). Team та Enterprise - пріоритетна підтримка через чат та email (відповідь протягом 2 годин).'
  },
  {
    question: 'Чи можна інтегрувати з іншими сервісами?',
    answer: 'Так! Ми підтримуємо інтеграції з Slack, Google Calendar, Jira, GitHub та багатьма іншими популярними сервісами.'
  },
  {
    question: 'Що відбувається після закінчення підписки?',
    answer: 'Ваші дані зберігаються протягом 30 днів. Ви можете експортувати всі дані або продовжити підписку в будь-який момент.'
  }
])
</script>

<style scoped>
.faq {
  background: white;
}

.faq-question {
  font-weight: 600;
  color: #1e293b;
  font-size: 1.1rem;
}

.faq-answer {
  color: #475569;
  line-height: 1.8;
}

.faq-contact {
  margin-top: 3rem;
  text-align: center;
}

.faq-contact a {
  color: #6366f1;
  font-weight: 600;
  text-decoration: none;
}

.faq-contact a:hover {
  text-decoration: underline;
}
</style>