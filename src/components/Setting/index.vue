<script lang="ts" setup>
import { ref } from 'vue'
import { Setting } from '@element-plus/icons-vue'

const drawer = ref(false)
</script>

<template>
  <el-icon @click="drawer = true" size="20" class="el-icon"><Setting /></el-icon>

  <el-drawer v-model="drawer" title="I am the title" :with-header="false" size="400">
    <span>Hi there!</span>
  </el-drawer>
</template>

<style lang="scss" scoped>
.el-icon {
  cursor: pointer;
}
</style>
