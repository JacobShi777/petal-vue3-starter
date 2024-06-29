import { ref } from 'vue'
import { defineStore } from 'pinia'

type ThemeState = 'light' | 'dark' | 'light-green'

export const useThemeStore = defineStore(
  'theme',
  () => {
    const theme = ref<ThemeState>('light')

    function setTheme(_theme: ThemeState) {
      theme.value = _theme
      document.documentElement.className = _theme
    }

    const initTheme = () => {
      if (!['light', 'dark', 'light-green'].includes(theme.value)) {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        theme.value = isDark ? 'dark' : 'light'
      }
      setTheme(theme.value)
    }

    return {
      theme,
      setTheme,
      initTheme,
    }
  },
  {
    persist: {
      paths: ['theme'],
    },
  },
)
