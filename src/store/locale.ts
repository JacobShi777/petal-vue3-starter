import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLocaleStore = defineStore(
  'locale',
  () => {
    const locale = ref<'zhCn' | 'en'>('zhCn')

    function changeLocale(_locale: 'zhCn' | 'en') {
      locale.value = _locale
    }
    return {
      locale,
      changeLocale,
    }
  },
  {
    // persist: true,
    persist: {
      paths: ['locale'],
    },
  }
)
