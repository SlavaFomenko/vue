<template>
  <router-view />
</template>

<script setup>
import { provide, ref } from 'vue';

// Provide/Inject: передаємо дані про користувача
const currentUser = ref(null);

const setCurrentUser = (user) => {
  currentUser.value = user;
};

provide('currentUser', currentUser);
provide('setCurrentUser', setCurrentUser);
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

#app {
  width: 100%;
  height: 100vh;
}
</style>
