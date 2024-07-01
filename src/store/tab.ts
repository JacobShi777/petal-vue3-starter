import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'

interface TabItem {
  fullPath: string
  path: string
  title: string
}

export const useTabStore = defineStore(
  'tab',
  () => {
    const tabs = ref<TabItem[]>([])

    const addTab = (tab: TabItem) => {
      if (!tabs.value.some((item) => item.fullPath === tab.fullPath)) {
        tabs.value.push(tab)
      }
    }

    const removeTab = (fullPath: string) => {
      tabs.value = tabs.value.filter((item) => item.fullPath !== fullPath)
    }

    return {
      tabs,
      addTab,
      removeTab,
    }
  },
  {
    persist: true,
  },
)
