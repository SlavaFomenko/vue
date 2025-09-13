<template>
  <section class="tasks-section">
    <div v-if="tasks.length === 0" class="no-tasks">
      <div class="no-tasks-icon">📝</div>
      <h3>Завдання не знайдено</h3>
      <p v-if="isEmptyList">Додайте своє перше завдання!</p>
      <p v-else>Спробуйте змінити фільтри пошуку</p>
    </div>

    <transition-group name="fade" tag="div">
      <TodoItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @toggle-status="$emit('toggle-status', $event)"
          @delete-task="$emit('delete-task', $event)"
          @start-edit="$emit('start-edit', $event)"
          @save-edit="$emit('save-edit', $event)"
          @cancel-edit="$emit('cancel-edit', $event)"
      />
    </transition-group>
  </section>
</template>

<script setup>
import TodoItem from './TodoItem.vue';

defineProps({
  tasks: {
    type: Array,
    required: true
  },
  isEmptyList: {
    type: Boolean,
    default: false
  }
});

defineEmits(['toggle-status', 'delete-task', 'start-edit', 'save-edit', 'cancel-edit']);
</script>