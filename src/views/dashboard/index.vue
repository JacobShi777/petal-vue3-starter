<script lang="ts" setup>
import { ref } from 'vue'
import LocaleSwitch from '@/components/LocaleSwitch/index.vue'
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="dashboard-page">
    <el-date-picker type="date" placeholder="Pick a day" />
    <el-button type="primary">配色</el-button>
    <ThemeSwitch />
    <div style="height: 10px"></div>
    <LocaleSwitch />
    <el-input :placeholder="t('common.username')"></el-input>
    {{ $t('common.username') }}
    <div>
      {{ t('common.theme.light') }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-page {
  padding: 20px;
}
</style>
