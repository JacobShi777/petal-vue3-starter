<script lang="ts" setup>
import { useRouteStore } from '@/store/route'
import NavbarItem from './NavbarItem.vue'
import { useRoute } from 'vue-router'
import { useSettingStore } from '@/store/setting'
import { computed } from 'vue'

const settingStore = useSettingStore()
const routeStore = useRouteStore()
const route = useRoute()

const navbarLeft = computed(() => {
  return settingStore.navbarLeft + 'px'
})
const navbarWidth = computed(() => {
  return settingStore.navbarWidth + 'px'
})
</script>

<template>
  <div class="navbar">
    <div class="logo">
      <SvgIcon name="dandelion" size="36px" style="margin-right: 10px; color: var(--el-color-primary)" />
      <div
        v-if="settingStore.navbarState === 'expand'"
        style="font-size: 24px; font-weight: bold; color: var(--el-text-color-primary)"
      >
        Vue3 Vite
      </div>
    </div>
    <el-menu :default-active="route.path" :collapse="settingStore.navbarState === 'collapse'">
      <template v-if="routeStore.routes">
        <NavbarItem :routes="routeStore.routes" prePath="" />
      </template>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    flex-shrink: 0;
  }
}

.navbar {
  width: v-bind(navbarWidth);
  height: 100%;
  position: fixed;
  top: 0;
  left: v-bind(navbarLeft);
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
  border-right: 1px solid var(--el-border-color-light);
  transition: all 0.5s ease-in-out;
  overflow: hidden;
}

:deep(.el-menu) {
  border-right: none;

  .el-menu-item {
    &.is-active {
      background-color: var(--el-color-primary-light-9);
    }
  }
}

:deep(.el-menu--collapse) {
  width: 56px;

  .el-tooltip__trigger {
    padding: 0;
    display: flex;
    justify-content: center;
  }
}
</style>
