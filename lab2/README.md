# Props & Emits
BaseInput.vue - приймає props (label, type, modelValue, placeholder, error) та емітує update:modelValue

AuthWrapper.vue - приймає prop title для відображення заголовка

Sidebar.vue - приймає prop isOpen та емітує close при закритті

UserDetail.vue - приймає prop id через router params


Приклад:
```angular2html
<script setup>
defineProps({
  label: String,
  type: { type: String, default: 'text' },
  modelValue: String,
  error: String
});
defineEmits(['update:modelValue']);
</script>
```
Взаємодія:
```javascript
Parent (Login.vue)
↓ props: label, modelValue, error
BaseInput.vue
↑ emit: update:modelValue
Parent (Login.vue) - оновлює дані
```
# Provide / Inject

App.vue - провайдить currentUser та setCurrentUser

UserInfo.vue - інжектить currentUser для відображення даних користувача

Приклад:
```angular2html

vue<!-- App.vue -->
<script setup>
import { provide, ref } from 'vue';

const currentUser = ref(null);
const setCurrentUser = (user) => {
  currentUser.value = user;
};

provide('currentUser', currentUser);
provide('setCurrentUser', setCurrentUser);
</script>

<!-- UserInfo.vue -->
<script setup>
import { inject } from 'vue';

const currentUser = inject('currentUser');
</script>
```
Переваги:

Уникнення prop drilling (передачі props через багато рівнів)

Глобальний доступ до даних без Vuex/Pinia

Простота використання для shared state

# Слоти (Slots)
Default Slot
AuthWrapper.vue - базова обгортка з дефолтним слотом:
```angular2html

<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <h2>{{ title }}</h2>
      </div>
      <slot></slot> <!-- Контент форми -->
    </div>
  </div>
</template>
```
Використання:
```angular2html
<AuthWrapper title="Вхід">
  <form>...</form>
</AuthWrapper>
```
Named Slot
Sidebar.vue - слот для навігаційного меню:
```angular2html
<template>
  <aside class="sidebar">
    <nav>
      <slot></slot> <!-- Навігаційні елементи -->
    </nav>
  </aside>
</template>
```

Використання:
```angular2html
<Sidebar>
  <router-link to="/admin/dashboard">Dashboard</router-link>
  <router-link to="/admin/users">Users</router-link>
</Sidebar>
```
Scoped Slot
Reports.vue - scoped slot для кастомного рендерингу рядків:
```angular2html

<template v-for="item in reports" :key="item.id">
  <slot name="row" :item="item">
    <!-- Дефолтний рендер -->
    <tr>
      <td>{{ item.id }}</td>
      <td>{{ item.title }}</td>
    </tr>
  </slot>
</template>
```
Батьківський компонент може перевизначити:
```angular2html
<Reports>
  <template #row="{ item }">
    <tr class="custom-row">
      <td>{{ item.id }}</td>
      <td><strong>{{ item.title }}</strong></td>
    </tr>
  </template>
</Reports>
```

# KeepAlive
Де застосовано:

AdminLayout.vue - обгортає router-view для кешування компонентів

Конфігурація:
```angular2html
<router-view v-slot="{ Component }">
<KeepAlive :include="['Dashboard']" :max="3">
<component :is="Component" />
</KeepAlive>
</router-view>
```
Параметри:

include="['Dashboard']" - кешувати тільки Dashboard

max="3" - максимум 3 кешованих екземпляри

Lifecycle hooks в Dashboard.vue:
```angular2html
<script setup>
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue';

onMounted(() => {
console.log('Dashboard: onMounted');
});

onUnmounted(() => {
console.log('Dashboard: onUnmounted');
});

onActivated(() => {
console.log('Dashboard: onActivated');
});

onDeactivated(() => {
console.log('Dashboard: onDeactivated');
});
</script>
```

# Роутинг (Vue Router)
Базова конфігурація
```javascript
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
history: createWebHistory(),
routes: [...],
linkActiveClass: 'active-link',
scrollBehavior(to, from, savedPosition) {
if (savedPosition) {
return savedPosition;
}
return { top: 0 };
}
});
```
Налаштування:

createWebHistory() - HTML5 History Mode (без #)

linkActiveClass - CSS клас для активних посилань

scrollBehavior - автоматичний скрол до верху при переході



# Lazy Loading

Admin сторінки завантажуються динамічно:

javascript// Звичайний імпорт (eager loading)
```javascript

import Home from '@/views/Home.vue';

// Lazy loading (завантаження при потребі)
const AdminLayout = () => import('@/views/admin/AdminLayout.vue');
const Dashboard = () => import('@/views/admin/Dashboard.vue');
const Users = () => import('@/views/admin/Users.vue');
```
Переваги:

- Менший розмір initial bundle
 - Швидше початкове завантаження
 - Код завантажується тільки при переході на роут



# Navigation Guards
Global beforeEach guard:
```javascript

router.beforeEach((to, from, next) => {
const isAuthenticated = localStorage.getItem('user');

// Якщо роут потребує автентифікації
if (to.meta.requiresAuth && !isAuthenticated) {
next('/login');
}
// Якщо користувач авторизований і йде на login/register
else if ((to.path === '/login' || to.path === '/register') && isAuthenticated) {
next('/admin/dashboard');
}
// Інакше дозволити перехід
else {
next();
}
});
```
Meta поля:
```javascript
{
path: '/admin',
component: AdminLayout,
meta: { requiresAuth: true }, // Потребує автентифікації
children: [...]
}
```

Nested Routes (Дочірні маршрути)
```javascript

{
path: '/admin',
component: AdminLayout,
meta: { requiresAuth: true },
children: [
{
path: '',
redirect: '/admin/dashboard'
},
{
path: 'dashboard',
name: 'Dashboard',
component: Dashboard
},
{
path: 'users',
name: 'Users',
component: Users
},
{
path: 'user/:id',
name: 'UserDetail',
component: UserDetail,
props: true // Передавати route params як props
}
]
}
```
Структура URL:

/admin → redirect → /admin/dashboard

/admin/dashboard → Dashboard component

/admin/users → Users component

/admin/user/123 → UserDetail component (id=123)



Catch-all (404) Route
```javascript

{
path: '/:pathMatch(.*)*',
name: 'NotFound',
component: NotFound
}
```
Відловлює всі неіснуючі маршрути та показує 404 сторінку.

Програмна навігація
```javascript

import { useRouter } from 'vue-router';

const router = useRouter();

// Перехід на іншу сторінку
router.push('/admin/dashboard');

// Повернення назад
router.back();

// Заміна поточного роуту
router.replace('/login');
```

