import { ref } from 'vue'
import { defineStore } from 'pinia'

export type Theme = 'light' | 'dark' | 'light-green'
export interface ThemeItem {
  key: Theme
  name: string
}

export const themeList: ThemeItem[] = [
  { key: 'light', name: 'common.theme.light' },
  { key: 'dark', name: 'common.theme.dark' },
  { key: 'light-green', name: 'common.theme.light-green' },
]

export const useThemeStore = defineStore(
  'theme',
  () => {
    const theme = ref<Theme>('light')

    function setTheme(_theme: Theme) {
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
