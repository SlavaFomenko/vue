<template>
  <section class="form-section">
    <h2>➕ Додати нове завдання</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-grid">
        <div class="form-group">
          <label for="taskTitle">Назва завдання *</label>
          <input
              type="text"
              id="taskTitle"
              v-model.trim="newTask.title"
              class="form-input"
              placeholder="Введіть назву завдання..."
              required
          >
        </div>
        <div class="form-group">
          <label for="taskPriority">Пріоритет</label>
          <select
              id="taskPriority"
              v-model="newTask.priority"
              class="priority-select"
              :class="`priority-${newTask.priority}`"
          >
            <option value="low">🟢 Низький</option>
            <option value="medium">🟡 Середній</option>
            <option value="high">🔴 Високий</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="taskDescription">Опис</label>
        <!-- v-model для textarea -->
        <textarea
            id="taskDescription"
            v-model.trim="newTask.description"
            class="form-input form-textarea"
            placeholder="Опишіть завдання детальніше..."
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">
        ✅ Додати завдання
      </button>
    </form>
  </section>
</template>

<script setup>
const props = defineProps({
  newTask: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['add-task']);

const handleSubmit = () => {
  emit('add-task');
};
</script>