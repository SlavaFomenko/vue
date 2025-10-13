<template>
  <div>
    <div
      v-if="isOpen"
      class="sidebar-overlay"
      @click="$emit('close')"
    ></div>

    <aside :class="['sidebar', { 'sidebar-open': isOpen }]">
      <div class="sidebar-header">
        <h1 class="sidebar-title">Admin Panel</h1>
        <button @click="$emit('close')" class="close-button">✕</button>
      </div>
      <nav class="sidebar-nav">
        <slot></slot>
      </nav>
    </aside>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean
});

defineEmits(['close']);
</script>

<style scoped>
.sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 40;
}

@media (min-width: 1024px) {
  .sidebar-overlay {
    display: none;
  }
}

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 16rem;
  background: #1f2937;
  color: white;
  transform: translateX(-100%);
  transition: transform 0.3s;
  z-index: 50;
}

@media (min-width: 1024px) {
  .sidebar {
    position: static;
    transform: translateX(0);
  }
}

.sidebar-open {
  transform: translateX(0);
}

.sidebar-header {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #374151;
}

.sidebar-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.close-button {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem;
}

@media (min-width: 1024px) {
  .close-button {
    display: none;
  }
}

.sidebar-nav {
  margin-top: 1rem;
}
</style>
