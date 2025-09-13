<template>
  <div class="app-container">
    <header class="app-header">
      <h1>📋 Vue.js To-Do Manager</h1>
      <p>Організуйте свої завдання ефективно</p>
      <TodoStats
          :total-tasks="totalTasks"
          :active-tasks="activeTasks"
          :completed-tasks="completedTasks"
      />
    </header>

    <main class="main-content">
      <TodoForm
          :new-task="newTask"
          @add-task="addTask"
      />

      <TodoFilters
          :filters="filters"
          :filtered-count="filteredTasks.length"
          @clear-filters="clearFilters"
      />

      <TodoList
          :tasks="paginatedTasks"
          :is-empty-list="tasks.length === 0"
          @toggle-status="toggleTaskStatus"
          @delete-task="deleteTask"
          @start-edit="startEdit"
          @save-edit="saveEdit"
          @cancel-edit="cancelEdit"
      />

      <TodoPagination
          v-model:current-page="currentPage"
          :total-pages="totalPages"
      />
    </main>
  </div>
</template>

<script setup>
import { useTodos } from './composables/useTodos.js';
import TodoStats from './components/TodoStats.vue';
import TodoForm from './components/TodoForm.vue';
import TodoFilters from './components/TodoFilters.vue';
import TodoList from './components/TodoList.vue';
import TodoPagination from './components/TodoPagination.vue';

const {
  tasks,
  newTask,
  filters,
  currentPage,

  totalTasks,
  activeTasks,
  completedTasks,
  filteredTasks,
  paginatedTasks,
  totalPages,

  addTask,
  toggleTaskStatus,
  deleteTask,
  startEdit,
  saveEdit,
  cancelEdit,
  clearFilters
} = useTodos();
</script>