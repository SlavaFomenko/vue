export const storage = {
    TASKS_KEY: 'vue-todo-tasks',

    loadTasks() {
        try {
            const tasks = localStorage.getItem(this.TASKS_KEY);
            return tasks ? JSON.parse(tasks) : [];
        } catch (error) {
            console.error('Помилка завантаження завдань:', error);
            return [];
        }
    },

    saveTasks(tasks) {
        try {
            localStorage.setItem(this.TASKS_KEY, JSON.stringify(tasks));
        } catch (error) {
            console.error('Помилка збереження завдань:', error);
        }
    }
};