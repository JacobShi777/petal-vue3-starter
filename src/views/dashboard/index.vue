<script lang="ts" setup>
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
</script>

<template>
  <div>Dashboard</div>
  {{ userStore.username }}
</template>
