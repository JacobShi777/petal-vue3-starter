<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { type Locale, localeList, useLocaleStore } from '@/store/locale'

const { locale, t } = useI18n()
const localeStore = useLocaleStore()

const command = (command: Locale) => {
  locale.value = command
  localeStore.setLocale(command)
}
</script>

<template>
  <el-dropdown @command="command">
    <span class="dropdown-link">
      <svg-icon name="global"></svg-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in localeList"
          :key="item.key"
          :command="item.key"
          :disabled="item.key === localeStore.locale"
        >
          {{ item.name }}
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
    width: 20px;
    height: 20px;
  }
}
</style>
