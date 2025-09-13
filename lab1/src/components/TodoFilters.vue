<template>
  <section class="filters-section">
    <h2>🔍 Фільтри та пошук</h2>
    <div class="filters-grid">
      <div class="form-group">
        <label>Пошук за назвою</label>
        <input
            type="text"
            v-model="filters.title"
            class="form-input"
            placeholder="Назва завдання..."
        >
      </div>
      <div class="form-group">
        <label>Пошук за описом</label>
        <input
            type="text"
            v-model="filters.description"
            class="form-input"
            placeholder="Опис завдання..."
        >
      </div>
      <div class="form-group">
        <label>Статус</label>
        <select v-model="filters.status" class="priority-select">
          <option value="">Всі статуси</option>
          <option value="active">Активні</option>
          <option value="done">Виконані</option>
        </select>
      </div>
      <div class="form-group">
        <label>Пріоритет</label>
        <select v-model="filters.priority" class="priority-select">
          <option value="">Всі пріоритети</option>
          <option value="high">Високий</option>
          <option value="medium">Середній</option>
          <option value="low">Низький</option>
        </select>
      </div>
      <div class="form-group">
        <label>Дата від</label>
        <input
            type="date"
            v-model="filters.dateFrom"
            class="form-input"
        >
      </div>
      <div class="form-group">
        <label>Дата до</label>
        <input
            type="date"
            v-model="filters.dateTo"
            class="form-input"
        >
      </div>
    </div>
    <div class="filter-actions">
      <button @click="$emit('clear-filters')" class="btn btn-secondary">
        🗑️ Очистити фільтри
      </button>
      <span class="filter-results">
        Знайдено: {{ filteredCount }} завдань
      </span>
    </div>
  </section>
</template>

<script setup>
defineProps({
  filters: {
    type: Object,
    required: true
  },
  filteredCount: {
    type: Number,
    required: true
  }
});

defineEmits(['clear-filters']);
</script>