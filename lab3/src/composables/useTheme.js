import { ref, watch, onMounted } from 'vue';

const THEME_KEY = 'vue-news-theme';

const theme = ref('light');

export function useTheme() {
    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
    };

    const setTheme = (newTheme) => {
        theme.value = newTheme;
    };

    watch(theme, (newTheme) => {
        localStorage.setItem(THEME_KEY, newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    });

    onMounted(() => {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme) {
            theme.value = savedTheme;
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            theme.value = prefersDark ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-theme', theme.value);
    });

    return {
        theme,
        toggleTheme,
        setTheme
    };
}