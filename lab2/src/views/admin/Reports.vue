<template>
  <div>
    <h2 class="page-title">Звіти</h2>

    <div class="card">
      <table class="reports-table">
        <thead>
        <tr>
          <th>ID</th>
          <th>Назва</th>
          <th>Дата</th>
          <th>Статус</th>
          <th>Дії</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="item in reports" :key="item.id">
          <slot name="row" :item="item">
            <tr class="table-row">
              <td>{{ item.id }}</td>
              <td class="report-title">{{ item.title }}</td>
              <td class="report-date">{{ item.date }}</td>
              <td>
                  <span :class="['status-badge', `status-${item.color}`]">
                    {{ item.status }}
                  </span>
              </td>
              <td>
                <button @click="viewReport(item.id)" class="action-btn action-view">
                  Переглянути
                </button>
                <button @click="deleteReport(item.id)" class="action-btn action-delete">
                  Видалити
                </button>
              </td>
            </tr>
          </slot>
        </template>
        </tbody>
      </table>
    </div>

    <div class="info-box">
      <p class="info-text">
        <strong>Scoped Slot:</strong> Рядки таблиці можуть бути перевизначені через слот #row="{ item }",
        що демонструє концепцію scoped slot у Vue. Батьківський компонент може передати свій власний
        шаблон для рендерингу рядків.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const reports = ref([
  { id: 1, title: 'Звіт продажів Q1 2024', date: '2024-03-31', status: 'Готово', color: 'green' },
  { id: 2, title: 'Аналіз користувачів', date: '2024-04-15', status: 'В процесі', color: 'yellow' },
  { id: 3, title: 'Фінансовий звіт Q1', date: '2024-04-20', status: 'Очікується', color: 'gray' },
  { id: 4, title: 'Звіт про продуктивність', date: '2024-04-25', status: 'Готово', color: 'green' },
  { id: 5, title: 'Маркетинговий аналіз', date: '2024-05-01', status: 'В процесі', color: 'yellow' }
]);

const viewReport = (id) => {
  alert(`Перегляд звіту #${id}`);
};

const deleteReport = (id) => {
  if (confirm(`Видалити звіт #${id}?`)) {
    reports.value = reports.value.filter(r => r.id !== id);
  }
};
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

.reports-table {
  width: 100%;
  border-collapse: collapse;
}

.reports-table thead {
  background: #f9fafb;
}

.reports-table th {
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.reports-table td {
  padding: 1rem 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.table-row:hover {
  background: #f9fafb;
}

.report-title {
  font-weight: 500;
  color: #1f2937;
}

.report-date {
  color: #6b7280;
  font-size: 0.875rem;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.status-green {
  background: #d1fae5;
  color: #065f46;
}

.status-yellow {
  background: #fef3c7;
  color: #92400e;
}

.status-gray {
  background: #e5e7eb;
  color: #374151;
}

.action-btn {
  padding: 0.375rem 0.75rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: all 0.2s;
}

.action-view {
  background: #dbeafe;
  color: #1e40af;
}

.action-view:hover {
  background: #bfdbfe;
}

.action-delete {
  background: #fee2e2;
  color: #991b1b;
}

.action-delete:hover {
  background: #fecaca;
}

.info-box {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #dbeafe;
  border: 1px solid #93c5fd;
  border-radius: 0.5rem;
}

.info-text {
  font-size: 0.875rem;
  color: #1e40af;
}
</style>
