<script lang="ts" setup>
import LocaleSwitch from '@/components/LocaleSwitch/index.vue'
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'
import Setting from '@/components/Setting/index.vue'
import UserLogin from '@/components/UserLogin/index.vue'
import TabBar from './TabBar.vue'
import { useBreadcrumbStore } from '@/store/breadcrumb'
import { useI18n } from 'vue-i18n'
import { type NavbarState, useSettingStore } from '@/store/setting'

const { t } = useI18n()
const breadcrumbStore = useBreadcrumbStore()
const settingStore = useSettingStore()

const handleNavbarVisible = (navbarState: NavbarState) => {
  settingStore.navbarState = navbarState
  settingStore.navbarWidth = navbarState === 'collapse' ? 56 : 220
}
</script>

<template>
  <div class="header">
    <div class="up">
      <div class="breadcrumb">
        <svg-icon
          v-if="settingStore.navbarState === 'expand'"
          name="shrink"
          size="20px"
          class="svg-icon"
          @click="handleNavbarVisible('collapse')"
        ></svg-icon>
        <svg-icon v-else name="unfold" size="20px" class="svg-icon" @click="handleNavbarVisible('expand')"></svg-icon>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(item, index) in breadcrumbStore.matched" :key="index">
            {{ item.meta.title && t(item.meta.title) }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="action-area">
        <ThemeSwitch />
        <LocaleSwitch />
        <Setting />
        <UserLogin />
      </div>
    </div>
    <TabBar />
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 82px;

  .up {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 50px;
    line-height: 50px;

    .breadcrumb {
      display: flex;
      align-items: center;

      .svg-icon {
        margin-right: 20px;

        &:hover {
          cursor: pointer;
          color: var(--el-color-primary);
        }
      }
    }

    .action-area {
      display: flex;
      align-items: center;

      > * {
        margin-left: 20px;
      }
    }
  }
}
</style>
