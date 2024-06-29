<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import { useLocaleStore } from '@/store/locale'
import { useThemeStore } from '@/store/theme'

const userStore = useUserStore()

const localeStore = useLocaleStore()
const toggleLanguage = () => {
  localeStore.changeLocale(localeStore.locale === 'zhCn' ? 'en' : 'zhCn')
}

const themeStore = useThemeStore()
</script>

<template>
  <div class="dashboard-page">
    <div>Dashboard</div>
    {{ userStore.username }}
    <svg-icon name="dashboard" />
    <el-button @click="toggleLanguage">切换语言</el-button>
    {{ localeStore.locale }}
    <el-date-picker type="date" placeholder="Pick a day" />
    <el-select v-model="themeStore.theme" @change="themeStore.setTheme(themeStore.theme)" style="width: 100px">
      <el-option value="light" label="浅色"></el-option>
      <el-option value="dark" label="深色"></el-option>
      <el-option value="light-green" label="浅绿"></el-option>
    </el-select>
    <!-- <el-button @click="themeStore.setTheme(themeStore.theme === 'light' ? 'dark' : 'light')">切换主题</el-button> -->
    {{ themeStore.theme }}
    <el-button type="primary">配色</el-button>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-page {
  padding: 20px;
}
</style>
