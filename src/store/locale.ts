import { ref } from 'vue'
import { defineStore } from 'pinia'

export type Locale = 'zh-cn' | 'en'
export interface LocaleItem {
  key: Locale
  name: string
}

export const localeList: LocaleItem[] = [
  { key: 'zh-cn', name: '中文' },
  { key: 'en', name: 'English' },
]

export const useLocaleStore = defineStore(
  'locale',
  () => {
    const locale = ref<Locale>('zh-cn')

    function setLocale(_locale: Locale) {
      locale.value = _locale
    }
    return {
      locale,
      setLocale,
    }
  },
  {
    // persist: true,
    persist: {
      paths: ['locale'],
    },
  },
)
