<template>
  <div class="admin-layout">
    <Sidebar :isOpen="sidebarOpen" @close="sidebarOpen = false">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        class="nav-item"
        active-class="nav-item-active"
        @click="sidebarOpen = false"
      >
        <span class="nav-icon">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
      </router-link>
    </Sidebar>

    <div class="main-content">
      <header class="header">
        <button @click="sidebarOpen = true" class="menu-button">☰</button>
        <div class="spacer"></div>
        <UserInfo />
        <button @click="handleLogout" class="logout-button">
          🚪 Вийти
        </button>
      </header>

      <main class="content">
        <router-view v-slot="{ Component }">
          <KeepAlive :include="['Dashboard']" :max="3">
            <component :is="Component" />
          </KeepAlive>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from '@/components/Sidebar.vue';
import UserInfo from '@/components/UserInfo.vue';
import { useAuth } from '@/composables/useAuth';

const { logout } = useAuth();
const sidebarOpen = ref(false);

const menuItems = [
  { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
  { path: '/admin/users', label: 'Користувачі', icon: '👥' },
  { path: '/admin/reports', label: 'Звіти', icon: '📄' }
];

const handleLogout = () => {
  logout();
};
</script>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
  background: #f3f4f6;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header {
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.menu-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem;
}

@media (min-width: 1024px) {
  .menu-button {
    display: none;
  }
}

.spacer {
  flex: 1;
}

.logout-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.2s;
}

.logout-button:hover {
  color: #dc2626;
}

.content {
  flex: 1;
  overflow: auto;
  padding: 1.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #d1d5db;
  text-decoration: none;
  transition: all 0.2s;
}

.nav-item:hover {
  background: #374151;
}

.nav-item-active {
  background: #3b82f6;
  color: white;
}

.nav-icon {
  font-size: 1.25rem;
}
</style>
