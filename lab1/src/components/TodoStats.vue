<template>
  <div class="stats-container">
    <div class="stat-card">
      <span class="stat-number">{{ totalTasks }}</span>
      <div class="stat-label">Всього</div>
    </div>
    <div class="stat-card">
      <span class="stat-number">{{ activeTasks }}</span>
      <div class="stat-label">Активні</div>
    </div>
    <div class="stat-card">
      <span class="stat-number">{{ completedTasks }}</span>
      <div class="stat-label">Виконані</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  totalTasks: {
    type: Number,
    required: true
  },
  activeTasks: {
    type: Number,
    required: true
  },
  completedTasks: {
    type: Number,
    required: true
  }
});
</script>