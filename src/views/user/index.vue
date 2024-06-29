<script lang="ts" setup>
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
const setUsername = () => {
  userStore.setUsername('new username')
}
</script>

<template>
  <div>User</div>
  {{ userStore.username }}
  <button @click="setUsername">设置名称</button>
</template>
