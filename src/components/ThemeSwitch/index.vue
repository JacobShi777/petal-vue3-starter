<script lang="ts" setup>
import { type Theme, themeList, useThemeStore } from '@/store/theme'

const themeStore = useThemeStore()

const command = (command: Theme) => {
  themeStore.setTheme(command)
}
</script>

<template>
  <el-dropdown @command="command">
    <span class="dropdown-link">
      <svg-icon name="theme"></svg-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in themeList"
          :key="item.key"
          :command="item.key"
          :disabled="item.key === themeStore.theme"
        >
          {{ $t(item.name) }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.dropdown-link {
  outline: none;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
  }
}
</style>
