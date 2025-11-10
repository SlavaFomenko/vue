import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
    const locale = ref('ua')

    function setLocale(lang) {
        locale.value = lang
    }

    return {
        locale,
        setLocale
    }
}, {
    persist: {
        key: 'app-settings',
        pick: ['locale']
    }
})