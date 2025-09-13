import { ref, reactive, computed, watch, onMounted } from 'vue';
import { storage } from '../utils/storage.js';

export function useTodos() {
    const tasks = ref([]);
    const currentPage = ref(1);
    const tasksPerPage = ref(5);
    
    const newTask = reactive({
        title: '',
        description: '',
        priority: 'medium'
    });

    const filters = reactive({
        title: '',
        description: '',
        status: '',
        priority: '',
        dateFrom: '',
        dateTo: ''
    });

    const totalTasks = computed(() => tasks.value.length);

    const activeTasks = computed(() =>
        tasks.value.filter(task => task.status === 'active').length
    );

    const completedTasks = computed(() =>
        tasks.value.filter(task => task.status === 'done').length
    );

    const filteredTasks = computed(() => {
        return tasks.value.filter(task => {
            if (filters.title && !task.title.toLowerCase().includes(filters.title.toLowerCase())) {
                return false;
            }

            if (filters.description && !task.description.toLowerCase().includes(filters.description.toLowerCase())) {
                return false;
            }

            if (filters.status && task.status !== filters.status) {
                return false;
            }

            if (filters.priority && task.priority !== filters.priority) {
                return false;
            }

            if (filters.dateFrom) {
                const taskDate = new Date(task.createdAt);
                const filterDate = new Date(filters.dateFrom);
                if (taskDate < filterDate) {
                    return false;
                }
            }

            if (filters.dateTo) {
                const taskDate = new Date(task.createdAt);
                const filterDate = new Date(filters.dateTo);
                filterDate.setHours(23, 59, 59); // Кінець дня
                if (taskDate > filterDate) {
                    return false;
                }
            }

            return true;
        });
    });

    const totalPages = computed(() =>
        Math.ceil(filteredTasks.value.length / tasksPerPage.value)
    );

    const paginatedTasks = computed(() => {
        const start = (currentPage.value - 1) * tasksPerPage.value;
        const end = start + tasksPerPage.value;
        return filteredTasks.value.slice(start, end);
    });

    watch(tasks, (newTasks) => {
        storage.saveTasks(newTasks);
        console.log('Завдання збережено в LocalStorage:', newTasks.length);
    }, { deep: true });

    watch(filteredTasks, () => {
        currentPage.value = 1;
    });

    const generateId = () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

    const addTask = () => {
        if (!newTask.title.trim()) {
            alert('Будь ласка, введіть назву завдання!');
            return false;
        }

        const task = {
            id: generateId(),
            title: newTask.title.trim(),
            description: newTask.description.trim(),
            status: 'active',
            priority: newTask.priority,
            createdAt: new Date().toISOString(),
            editing: false
        };

        tasks.value.unshift(task);

        newTask.title = '';
        newTask.description = '';
        newTask.priority = 'medium';

        return true;
    };

    const toggleTaskStatus = (taskId) => {
        const task = tasks.value.find(t => t.id === taskId);
        if (task) {
            task.status = task.status === 'active' ? 'done' : 'active';
        }
    };

    const deleteTask = (taskId) => {
        const index = tasks.value.findIndex(t => t.id === taskId);
        if (index !== -1) {
            tasks.value.splice(index, 1);
        }
    };

    const startEdit = (task) => {
        task.originalData = {
            title: task.title,
            description: task.description,
            priority: task.priority
        };
        task.editing = true;
    };

    const saveEdit = (task) => {
        if (!task.title.trim()) {
            alert('Назва завдання не може бути порожньою!');
            return false;
        }

        delete task.originalData;
        task.editing = false;
        return true;
    };

    const cancelEdit = (task) => {
        if (task.originalData) {
            task.title = task.originalData.title;
            task.description = task.originalData.description;
            task.priority = task.originalData.priority;
            delete task.originalData;
        }
        task.editing = false;
    };

    const clearFilters = () => {
        filters.title = '';
        filters.description = '';
        filters.status = '';
        filters.priority = '';
        filters.dateFrom = '';
        filters.dateTo = '';
    };

    const loadTasks = () => {
        const savedTasks = storage.loadTasks();
        tasks.value = savedTasks;
        console.log('Завдання завантажено з LocalStorage:', savedTasks.length);
    };

    onMounted(() => {
        loadTasks();
    });

    return {
        tasks,
        newTask,
        filters,
        currentPage,
        tasksPerPage,

        totalTasks,
        activeTasks,
        completedTasks,
        filteredTasks,
        paginatedTasks,
        totalPages,

        addTask,
        toggleTaskStatus,
        deleteTask,
        startEdit,
        saveEdit,
        cancelEdit,
        clearFilters
    };
}