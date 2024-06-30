<script lang="ts" setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/store/locale'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useThemeStore } from './store/theme'

const localeStore = useLocaleStore()
const locale = computed(() => (localeStore.locale === 'zh-cn' ? zhCn : en))

const themeStore = useThemeStore()
themeStore.initTheme()
</script>

<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>
