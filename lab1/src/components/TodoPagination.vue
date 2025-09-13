<template>
  <div v-if="totalPages > 1" class="pagination">
    <button
        @click="$emit('update:current-page', 1)"
        :disabled="currentPage === 1"
        class="page-btn"
    >
      ⏮️ Перша
    </button>
    <button
        @click="$emit('update:current-page', currentPage - 1)"
        :disabled="currentPage === 1"
        class="page-btn"
    >
      ⬅️ Попередня
    </button>

    <template v-for="page in visiblePages" :key="page">
      <button
          @click="$emit('update:current-page', page)"
          :class="['page-btn', { active: currentPage === page }]"
      >
        {{ page }}
      </button>
    </template>

    <button
        @click="$emit('update:current-page', currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="page-btn"
    >
      Наступна ➡️
    </button>
    <button
        @click="$emit('update:current-page', totalPages)"
        :disabled="currentPage === totalPages"
        class="page-btn"
    >
      Остання ⏭️
    </button>

    <div class="page-info">
      Сторінка {{ currentPage }} з {{ totalPages }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
});

defineEmits(['update:current-page']);

const visiblePages = computed(() => {
  const pages = [];
  const total = props.totalPages;
  const current = props.currentPage;

  let start = Math.max(1, current - 2);
  let end = Math.min(total, current + 2);

  if (end - start < 4) {
    if (start === 1) {
      end = Math.min(total, start + 4);
    } else {
      start = Math.max(1, end - 4);
    }
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});
</script>