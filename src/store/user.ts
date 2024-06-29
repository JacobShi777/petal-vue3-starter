import { defineStore } from 'pinia'
import { ref } from 'vue'

// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStore = defineStore('user', () => {
  const username = ref<string>('John')

  const setUsername = (name: string) => {
    username.value = name
  }

  return {
    username,
    setUsername,
  }
})
