<template>
  <div v-if="currentUser" class="user-info">
    <div class="user-avatar">
      {{ currentUser.name.charAt(0).toUpperCase() }}
    </div>
    <span class="user-name">{{ currentUser.name }}</span>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const currentUser = inject('currentUser');
</script>

<style scoped>
.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #374151;
}

.user-avatar {
  width: 2rem;
  height: 2rem;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.user-name {
  font-weight: 500;
}
</style>
