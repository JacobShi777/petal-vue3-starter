<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'currentColor',
  },
  size: {
    type: String,
    default: '1em',
  },
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg aria-hidden="true" class="svg-icon" :width="props.size" :height="props.size">
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>
