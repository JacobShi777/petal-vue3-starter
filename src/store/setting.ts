import { ref } from 'vue'
import { defineStore } from 'pinia'

export type NavbarState = 'collapse' | 'expand' | 'invisible'

export const useSettingStore = defineStore(
  'setting',
  () => {
    // Navbar 导航栏
    const navbarState = ref<NavbarState>('expand')
    const navbarLeft = ref<number>(0)
    const navbarWidth = ref<number>(220)

    // Tab 标签页
    const tabPersist = ref<boolean>(false)

    return {
      navbarState,
      navbarLeft,
      navbarWidth,
      tabPersist,
    }
  },
  {
    persist: true,
  },
)
