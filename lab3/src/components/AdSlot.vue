<template>
  <div class="ad-slot" :style="adStyle">
    <div class="ad-content">
      <p class="ad-label">Advertisement</p>
      <h3 class="ad-title">{{ title }}</h3>
      <p class="ad-description">{{ description }}</p>
      <button @click="$emit('click')" class="ad-button">
        Learn More
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: '#3b82f6'
  }
});

defineEmits(['click']);

// v-bind() у CSS - динамічні стилі
const adStyle = computed(() => ({
  '--ad-bg-color': props.bgColor
}));
</script>

<style scoped>
.ad-slot {
  background: linear-gradient(135deg, var(--ad-bg-color), var(--ad-bg-color)dd);
  border-radius: var(--radius-lg);
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: var(--shadow-lg);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.ad-slot::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.ad-slot:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

.ad-content {
  position: relative;
  z-index: 1;
  color: white;
}

.ad-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.8;
  margin-bottom: 0.5rem;
}

.ad-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.ad-description {
  opacity: 0.9;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.ad-button {
  background: white;
  color: var(--ad-bg-color);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.ad-button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.ad-button:active {
  transform: scale(0.98);
}
</style>