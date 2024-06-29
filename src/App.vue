<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)

const list = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
]
</script>

<template>
  <div>
    <h1>App</h1>
    <div>
      {{ count }}
    </div>
  </div>
</template>
