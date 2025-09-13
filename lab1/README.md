# Vue.js To-Do App - Lab 1

## Кроки запуску

1. Клонувати репозиторій:
```bash
git clone https://github.com/[username]/VueJSLabs2025.git
cd VueJSLabs2025/lab1
```

2. Встановити залежності:
```bash
npm install
```

3. Запустити проект:
```bash
npm run dev
```


## Де застосовані ref/reactive

**ref** - для примітивних значень:
- `tasks` - масив завдань
- `currentPage` - номер поточної сторінки

**reactive** - для об'єктів:
- `newTask` - дані нової задачі (title, description, priority)
- `filters` - об'єкт фільтрів (title, description, status, priority, dateFrom, dateTo)

## Computed властивості

- `totalTasks` - загальна кількість завдань
- `activeTasks` - кількість активних завдань
- `completedTasks` - кількість виконаних завдань
- `filteredTasks` - завдання після фільтрації
- `paginatedTasks` - завдання для поточної сторінки

## Watch

- `watch(tasks, ..., { deep: true })` - збереження в LocalStorage при зміні завдань
- `watch(filteredTasks)` - скидання пагінації при зміні фільтрів

## Директиви

**v-model** - прив'язка інпутів:
```vue
<input v-model="newTask.title">
<select v-model="newTask.priority">
<input type="date" v-model="filters.dateFrom">
```

**v-on (@)** - івенти:
```vue
<form @submit.prevent="addTask">
<button @click="toggleTaskStatus(task.id)">
<button @click="deleteTask(task.id)">
```

**v-bind (:)** - атрибути:
```vue
<div :class="{ done: task.status === 'done' }">
<button :disabled="currentPage === 1">
```

**v-for** - списки:
```vue
<div v-for="task in paginatedTasks" :key="task.id">
```

**v-if/else** - умови:
```vue
<div v-if="!task.editing">Перегляд</div>
<div v-else>Редагування</div>
```

## DevTools

**Де зберігається список:** LocalStorage, ключ `vue-todo-tasks`

**Де рахується кількість:** Computed властивості в useTodos.js:
- totalTasks
- activeTasks
- completedTasks

**Як зберігається:** Watch з deep: true записує в LocalStorage при будь-яких змінах