<script lang="ts" setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/store/locale'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useThemeStore } from './store/theme'

const localeStore = useLocaleStore()
const lang = computed(() => {
  return localeStore.locale === 'zh-cn' ? zhCn : en
})

const themeStore = useThemeStore()
themeStore.initTheme()
</script>

<template>
  <div>
    <RouterLink to="/">Go to Dashboard</RouterLink>
    <RouterLink to="/user">Go to User</RouterLink>
    <el-config-provider :locale="lang">
      <RouterView />
    </el-config-provider>
  </div>
</template>
