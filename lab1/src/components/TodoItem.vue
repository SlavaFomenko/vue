<template>
  <div :class="['task-item', { done: task.status === 'done' }]">
    <div v-if="!task.editing" class="task-content">
      <div class="task-header">
        <div class="task-info">
          <h3 :class="['task-title', { done: task.status === 'done' }]">
            {{ task.title }}
          </h3>
          <div class="task-meta">
            <span>📅 {{ formatDate(task.createdAt) }}</span>
            <span class="priority-badge" :class="task.priority">
              {{ getPriorityText(task.priority) }}
            </span>
            <span class="status-badge" :class="task.status">
              {{ task.status === 'active' ? 'Активне' : 'Виконане' }}
            </span>
          </div>
        </div>
      </div>

      <p v-if="task.description" class="task-description">
        {{ task.description }}
      </p>

      <div class="task-actions">
        <button
            @click="$emit('toggle-status', task.id)"
            :class="['btn', task.status === 'active' ? 'btn-success' : 'btn-warning']"
        >
          {{ task.status === 'active' ? '✅ Виконати' : '↩️ Повернути' }}
        </button>
        <button
            @click="$emit('start-edit', task)"
            class="btn btn-primary"
        >
          ✏️ Редагувати
        </button>
        <button
            @click="confirmDelete"
            class="btn btn-danger"
        >
          🗑️ Видалити
        </button>
      </div>
    </div>

    <div v-else class="task-content">
      <form @submit.prevent="handleSave" class="edit-form">
        <div class="form-grid">
          <div class="form-group">
            <label>Назва завдання *</label>
            <input
                type="text"
                v-model.trim="task.title"
                class="form-input"
                required
            >
          </div>
          <div class="form-group">
            <label>Пріоритет</label>
            <select
                v-model="task.priority"
                class="priority-select"
                :class="`priority-${task.priority}`"
            >
              <option value="low">🟢 Низький</option>
              <option value="medium">🟡 Середній</option>
              <option value="high">🔴 Високий</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Опис</label>
          <textarea
              v-model.trim="task.description"
              class="form-input form-textarea"
          ></textarea>
        </div>
        <div class="edit-actions">
          <button type="submit" class="btn btn-success">
            💾 Зберегти
          </button>
          <button
              type="button"
              @click="$emit('cancel-edit', task)"
              class="btn btn-secondary"
          >
            ❌ Скасувати
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['toggle-status', 'delete-task', 'start-edit', 'save-edit', 'cancel-edit']);

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('uk-UA');
};

const getPriorityText = (priority) => {
  const priorities = {
    low: '🟢 Низький',
    medium: '🟡 Середній',
    high: '🔴 Високий'
  };
  return priorities[priority] || priority;
};

const confirmDelete = () => {
  if (confirm('Ви впевнені, що хочете видалити це завдання?')) {
    emit('delete-task', props.task.id);
  }
};

const handleSave = () => {
  emit('save-edit', props.task);
};
</script>