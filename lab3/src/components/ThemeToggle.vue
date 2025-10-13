<template>
  <button
      @click="toggleTheme"
      class="theme-toggle"
      :class="{ 'dark-mode': theme === 'dark' }"
      :aria-label="theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
  >
    <Transition name="icon" mode="out-in">
      <span v-if="theme === 'light'" key="sun" class="icon">☀️</span>
      <span v-else key="moon" class="icon">🌙</span>
    </Transition>
  </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme';

const { theme, toggleTheme } = useTheme();
</script>

<style scoped>
.theme-toggle {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid var(--border-color);
  background-color: var(--bg-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.theme-toggle:hover {
  transform: rotate(180deg) scale(1.1);
  border-color: var(--accent);
  box-shadow: 0 0 20px var(--accent);
}

.theme-toggle:active {
  transform: rotate(180deg) scale(0.95);
}

.icon {
  display: block;
  line-height: 1;
}

/* Icon transition */
.icon-enter-active,
.icon-leave-active {
  transition: all 0.3s ease;
}

.icon-enter-from {
  opacity: 0;
  transform: rotate(-180deg) scale(0);
}

.icon-leave-to {
  opacity: 0;
  transform: rotate(180deg) scale(0);
}

@media (prefers-reduced-motion: reduce) {
  .theme-toggle,
  .theme-toggle:hover {
    transform: none;
  }

  .icon-enter-active,
  .icon-leave-active {
    transition: opacity 0.2s;
  }

  .icon-enter-from,
  .icon-leave-to {
    transform: none;
  }
}
</style>