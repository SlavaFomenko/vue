<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="close">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="close" aria-label="Close modal">
            ✕
          </button>

          <div class="modal-body">
            <div class="modal-image">
              <img :src="adData.image" :alt="adData.title" />
            </div>

            <h2 class="modal-title">{{ adData.title }}</h2>
            <p class="modal-description">{{ adData.description }}</p>

            <div class="modal-features">
              <div
                  v-for="(feature, index) in adData.features"
                  :key="index"
                  class="feature-item"
              >
                <span class="feature-icon">✓</span>
                <span>{{ feature }}</span>
              </div>
            </div>

            <button class="modal-cta" @click="handleCTA">
              {{ adData.ctaText }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  adData: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close', 'cta-click']);

const close = () => {
  emit('close');
};

const handleCTA = () => {
  emit('cta-click');
  close();
};

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: var(--z-modal-overlay);
}

.modal-content {
  background-color: var(--bg-card);
  border-radius: var(--radius-xl);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: var(--z-modal);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
}

.modal-close:hover {
  background-color: var(--accent);
  color: white;
  transform: rotate(90deg);
}

.modal-body {
  padding: 2rem;
}

.modal-image {
  width: 100%;
  height: 250px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.modal-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.modal-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-primary);
}

.feature-icon {
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--accent);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
}

.modal-cta {
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--accent);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-cta:hover {
  background-color: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.modal-cta:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .modal-content {
    max-height: 95vh;
  }

  .modal-body {
    padding: 1.5rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }
}
</style>