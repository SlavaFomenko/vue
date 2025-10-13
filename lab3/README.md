# Lab 3 - Стилізація компонентів у Vue.js

> Міні-сайт новин з темами, анімаціями та модальними вікнами

## 🚀 Запуск проекту

```bash
npm install
npm run dev
```

## ✅ Що реалізовано

### Маршрути
- `/` - список новин
- `/article/:id` - детальна стаття
- `/about` - про сайт
- `*` - 404 сторінка

### Компоненти
1. **AppHeader.vue** - хедер з навігацією (scoped styles)
2. **AppFooter.vue** - футер (scoped styles)
3. **ThemeToggle.vue** - перемикач теми з анімацією (scoped)
4. **AdSlot.vue** - рекламний блок (v-bind() в CSS)
5. **AdModal.vue** - модальне вікно (Teleport + Transition)
6. **NewsCard** - картка новини (CSS Modules)

### Теми (Light/Dark)
- Перемикач у хедері
- Збереження в localStorage
- Плавні переходи кольорів

### Анімації
- Fade, Slide, Scale переходи між сторінками
- Анімація модального вікна
- Hover ефекти на картках
- Keyframes анімації

---

## 🎨 Стилізація - Де що застосовано

### 1. Scoped Styles
**Файли:** AppHeader.vue, AppFooter.vue, ThemeToggle.vue, Article.vue, About.vue

```vue
<style scoped>
.header {
  background-color: var(--bg-card);
}
</style>
```

**Особливість:** Стилі ізольовані для кожного компонента. Vue додає унікальний атрибут `data-v-xxx`.

---

### 2. CSS Modules
**Файл:** NewsCard.module.css

```vue
<template>
  <div :class="$style.card">
    <h2 :class="$style.title">Title</h2>
  </div>
</template>

<style module src="@/components/NewsCard.module.css"></style>
```

**Особливість:** Класи отримують унікальні хеш-імена (наприклад `card_a3f2d`). Стилі винесені в окремий файл.

---

### 3. v-bind() у CSS
**Файли:** AdSlot.vue, Article.vue

```vue
<script setup>
const props = defineProps({
  bgColor: String
});

const adStyle = computed(() => ({
  '--ad-bg-color': props.bgColor
}));
</script>

<template>
  <div :style="adStyle">...</div>
</template>

<style scoped>
.ad-slot {
  background: var(--ad-bg-color);
}
</style>
```

**Використання:**
```vue
<AdSlot bg-color="#10b981" />  <!-- Зелений фон -->
<AdSlot bg-color="#8b5cf6" />  <!-- Фіолетовий фон -->
```

**Особливість:** Динамічні стилі через props. Кожен AdSlot може мати свій колір.

---

### 4. CSS Variables (глобальні)
**Файл:** src/assets/styles/variables.css

```css
:root {
  --spacing-md: 1rem;
  --radius-lg: 0.75rem;
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.light {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

.dark {
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
}
```

**Особливість:** Одні змінні для всього проекту. Зміна теми = зміна значень змінних.

---

## 🔄 Transition між сторінками

**App.vue:**
```vue
<router-view v-slot="{ Component, route }">
  <Transition :name="route.meta.transition || 'fade'" mode="out-in">
    <component :is="Component" :key="route.path" />
  </Transition>
</router-view>
```

**Router:**
```javascript
{
  path: '/',
  meta: { transition: 'fade' }
},
{
  path: '/article/:id',
  meta: { transition: 'slide' }
}
```

**transitions.css:**
```css
.fade-enter-active { transition: opacity 0.3s; }
.fade-enter-from { opacity: 0; }

.slide-enter-active { transition: all 0.4s; }
.slide-enter-from { transform: translateX(30px); opacity: 0; }
```

---

## 📦 Teleport для модалок

**AdModal.vue:**
```vue
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="close">
        <div class="modal-content" @click.stop>
          <!-- Контент -->
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
```

**Навіщо?** Модалка рендериться прямо в `<body>`, а не всередині компонента. Це вирішує проблеми з z-index та overflow.

---

## 🎭 Система тем

**useTheme.js:**
```javascript
const theme = ref('light');

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };
  
  watch(theme, (newTheme) => {
    localStorage.setItem('vue-news-theme', newTheme);
  });
  
  return { theme, toggleTheme };
}
```

**Використання:**
```vue
<script setup>
const { theme, toggleTheme } = useTheme();
</script>

<template>
  <div :class="theme">
    <button @click="toggleTheme">Toggle</button>
  </div>
</template>
```

---

## 📊 Висновки про стилізацію

### Scoped Styles
**Плюси:** Просто, швидко, ізольовано  
**Мінуси:** Важче переоюиковувати стилі  
**Коли:** Більшість компонентів (80%)

### CSS Modules
**Плюси:** Гарантована унікальність, окремі файли  
**Мінуси:** Додатковий синтаксис `$style.`  
**Коли:** Design system компоненти (15%)

### v-bind() в CSS
**Плюси:** Динамічні стилі через props, реактивність  
**Мінуси:** Тільки прості значення  
**Коли:** Динамічні кольори, розміри (5%)

### CSS Variables
**Плюси:** Глобальні значення, теми, швидкість  
**Мінуси:** Менша підтримка старих браузерів  
**Коли:** Завжди для дизайн-системи

**Рекомендація:** Комбінуйте всі підходи. Scoped для базових стилів, Modules для переоюикористовуваних, v-bind() для динаміки, Variables для глобальних значень.

---

#