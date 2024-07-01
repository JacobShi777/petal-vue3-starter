import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { RouteRecordNormalized } from 'vue-router'

export const useBreadcrumbStore = defineStore('breadcrumb', () => {
  const matched = ref<RouteRecordNormalized[]>()

  const setMatched = (list: RouteRecordNormalized[]) => {
    matched.value = list
  }

  return {
    matched,
    setMatched,
  }
})
