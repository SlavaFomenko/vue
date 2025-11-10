<template>
  <div id="app">
    <Navigation />
    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from './stores/settings'
import Navigation from './components/Navigation.vue'

const { locale } = useI18n()
const settingsStore = useSettingsStore()
const { locale: storeLocale } = storeToRefs(settingsStore)

locale.value = storeLocale.value

watch(storeLocale, (newLocale) => {
  locale.value = newLocale
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f5f5;
}

#app {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>