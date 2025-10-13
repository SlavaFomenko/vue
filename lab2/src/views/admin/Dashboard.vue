<template>
  <div>
    <h2 class="page-title">Dashboard</h2>

    <div class="tabs">
      <button
        @click="activeTab = 'overview'"
        :class="['tab', { 'tab-active': activeTab === 'overview' }]"
      >
        Overview
      </button>
      <button
        @click="activeTab = 'activity'"
        :class="['tab', { 'tab-active': activeTab === 'activity' }]"
      >
        Activity
      </button>
    </div>

    <div class="tab-content">
      <div v-if="activeTab === 'overview'" class="card">
        <div class="icon">📊</div>
        <h3 class="card-title">Overview</h3>
        <p class="card-text">
          Загальний огляд системи. Компонент зберігає стан завдяки KeepAlive.
        </p>
        <div class="counter">
          <p class="counter-text">Лічильник: {{ activityCount }}</p>
          <button @click="activityCount++" class="counter-button counter-button-green">
            Збільшити
          </button>
        </div>
      </div>
    </div>

    <div class="info-box">
      <p class="info-text">
        <strong>KeepAlive демонстрація:</strong> При перемиканні вкладок стан лічильників зберігається.
        У Vue це реалізується через компонент KeepAlive з параметрами include/exclude/max.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue';

const activeTab = ref('overview');
const overviewCount = ref(0);
const activityCount = ref(0);

onMounted(() => {
  console.log('Dashboard: onMounted');
});

onUnmounted(() => {
  console.log('Dashboard: onUnmounted');
});

onActivated(() => {
  console.log('Dashboard: onActivated (компонент активовано через KeepAlive)');
});

onDeactivated(() => {
  console.log('Dashboard: onDeactivated (компонент деактивовано через KeepAlive)');
});
</script>

<style scoped>
.page-title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1f2937;
}

.tabs {
  display: flex;
  gap: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
  margin-bottom: 1.5rem;
}

.tab {
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.2s;
}

.tab:hover {
  color: #1f2937;
}

.tab-active {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
}

.tab-content {
  min-height: 300px;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.card-text {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.counter {
  margin-top: 1.5rem;
}

.counter-text {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.counter-button {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
}

.counter-button:hover {
  background: #2563eb;
}

.counter-button-green {
  background: #10b981;
}

.counter-button-green:hover {
  background: #059669;
}

.info-box {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #fef3c7;
  border: 1px solid #fcd34d;
  border-radius: 0.5rem;
}

.info-text {
  font-size: 0.875rem;
  color: #92400e;
}
</style>
