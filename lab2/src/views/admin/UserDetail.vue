<template>
  <div>
    <button @click="$router.back()" class="back-button">
      ← Назад до списку
    </button>

    <h2 class="page-title">Деталі користувача #{{ id }}</h2>

    <div class="card">
      <div class="user-header">
        <div class="user-avatar-large">
          {{ user.name.charAt(0).toUpperCase() }}
        </div>
        <div>
          <h3 class="user-name">{{ user.name }}</h3>
          <p class="user-email">{{ user.email }}</p>
        </div>
      </div>

      <div class="user-details">
        <div class="detail-row">
          <span class="detail-label">ID:</span>
          <span class="detail-value">{{ user.id }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Ім'я:</span>
          <span class="detail-value">{{ user.name }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Email:</span>
          <span class="detail-value">{{ user.email }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Роль:</span>
          <span class="detail-value">
            <span :class="['badge', user.role === 'Admin' ? 'badge-admin' : 'badge-user']">
              {{ user.role }}
            </span>
          </span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Дата реєстрації:</span>
          <span class="detail-value">{{ user.joined }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Статус:</span>
          <span class="detail-value">
            <span class="badge badge-success">Активний</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const users = {
  '1': { id: 1, name: 'Іван Петров', email: 'ivan@mail.com', role: 'Admin', joined: '2024-01-15' },
  '2': { id: 2, name: 'Марія Коваль', email: 'maria@mail.com', role: 'User', joined: '2024-02-20' },
  '3': { id: 3, name: 'Петро Сидоренко', email: 'petro@mail.com', role: 'User', joined: '2024-03-10' },
  '4': { id: 4, name: 'Олена Шевченко', email: 'olena@mail.com', role: 'User', joined: '2024-03-25' },
  '5': { id: 5, name: 'Андрій Мельник', email: 'andrii@mail.com', role: 'Admin', joined: '2024-04-01' }
};

const user = computed(() => users[props.id] || { id: props.id, name: 'Невідомий', email: '-', role: '-', joined: '-' });
</script>

<style scoped>
.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  color: #3b82f6;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.back-button:hover {
  text-decoration: underline;
}

.page-title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1f2937;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.user-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;
}

.user-avatar-large {
  width: 4rem;
  height: 4rem;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.user-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
}

.user-email {
  color: #6b7280;
  margin-top: 0.25rem;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.detail-label {
  font-weight: 600;
  color: #374151;
}

.detail-value {
  color: #6b7280;
}

.badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.badge-admin {
  background: #dbeafe;
  color: #1e40af;
}

.badge-user {
  background: #e5e7eb;
  color: #374151;
}

.badge-success {
  background: #d1fae5;
  color: #065f46;
}
</style>
