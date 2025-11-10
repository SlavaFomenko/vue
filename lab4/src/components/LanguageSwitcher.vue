<template>
  <div class="language-switcher">
    <button
        @click="changeLanguage('ua')"
        :class="{ active: locale === 'ua' }"
        class="lang-btn"
    >
      UA
    </button>
    <button
        @click="changeLanguage('en')"
        :class="{ active: locale === 'en' }"
        class="lang-btn"
    >
      EN
    </button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '../stores/settings'

const settingsStore = useSettingsStore()
const { locale } = storeToRefs(settingsStore)

function changeLanguage(lang) {
  settingsStore.setLocale(lang)
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.25rem;
}

.lang-btn {
  background: transparent;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.lang-btn.active {
  background: #3498db;
}
</style>