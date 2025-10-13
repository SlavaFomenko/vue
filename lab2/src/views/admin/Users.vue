<template>
  <div>
    <h2 class="page-title">Користувачі</h2>

    <div class="card">
      <table class="users-table">
        <thead>
        <tr>
          <th>ID</th>
          <th>Ім'я</th>
          <th>Email</th>
          <th>Роль</th>
          <th>Дії</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
              <span :class="['badge', user.role === 'Admin' ? 'badge-admin' : 'badge-user']">
                {{ user.role }}
              </span>
          </td>
          <td>
            <router-link :to="`/admin/user/${user.id}`" class="action-link">
              Деталі
            </router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const users = ref([
  { id: 1, name: 'Іван Петров', email: 'ivan@mail.com', role: 'Admin' },
  { id: 2, name: 'Марія Коваль', email: 'maria@mail.com', role: 'User' },
  { id: 3, name: 'Петро Сидоренко', email: 'petro@mail.com', role: 'User' },
  { id: 4, name: 'Олена Шевченко', email: 'olena@mail.com', role: 'User' },
  { id: 5, name: 'Андрій Мельник', email: 'andrii@mail.com', role: 'Admin' }
]);
</script>

<style scoped>
.page-title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1f2937;
}

.card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.users-table {
  width: 100%;
  border-collapse: collapse;
}

.users-table thead {
  background: #f9fafb;
}

.users-table th {
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.users-table td {
  padding: 1rem 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.users-table tbody tr:hover {
  background: #f9fafb;
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

.action-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
}

.action-link:hover {
  text-decoration: underline;
}
</style>
