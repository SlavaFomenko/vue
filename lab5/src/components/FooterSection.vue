<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <div class="footer-logo">
            <i class="pi pi-bolt"></i>
            <span>TaskFlow</span>
          </div>
          <p>Сучасна платформа для управління задачами та проєктами</p>
          <div class="social-icons">
            <Button icon="pi pi-facebook" rounded text />
            <Button icon="pi pi-twitter" rounded text />
            <Button icon="pi pi-linkedin" rounded text />
            <Button icon="pi pi-github" rounded text />
          </div>
        </div>

        <div class="footer-column">
          <h4>Продукт</h4>
          <ul>
            <li><a href="#features">Функції</a></li>
            <li><a href="#pricing">Тарифи</a></li>
            <li><a href="#">Інтеграції</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Компанія</h4>
          <ul>
            <li><a href="#">Про нас</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Кар'єра</a></li>
            <li><a href="#contact">Контакти</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Підтримка</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#">Документація</a></li>
            <li><a href="#">Навчальні матеріали</a></li>
            <li><a href="#">Статус системи</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Правова інформація</h4>
          <ul>
            <li><a href="#">Умови використання</a></li>
            <li><a href="#">Політика конфіденційності</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">GDPR</a></li>
          </ul>
        </div>
      </div>

      <Divider />

      <div class="footer-bottom">
        <p>&copy; 2025 TaskFlow. Всі права захищені.</p>
        <p>Зроблено з "<3"️ в Україні</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Button from 'primevue/button'
import Divider from 'primevue/divider'
</script>

<style scoped>
.footer {
  background: #1e293b;
  color: #e2e8f0;
  padding: 3rem 2rem 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #6366f1;
  margin-bottom: 1rem;
}

.footer-logo i {
  font-size: 2rem;
}

.footer-column p {
  color: #94a3b8;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.social-icons {
  display: flex;
  gap: 0.5rem;
}

.footer-column h4 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 0.75rem;
}

.footer-column ul li a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: #6366f1;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  color: #64748b;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>