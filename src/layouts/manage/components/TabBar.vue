<script lang="ts" setup>
import { Close } from '@element-plus/icons-vue'
import { useTabStore } from '@/store/tab'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const tabStore = useTabStore()
const route = useRoute()
const router = useRouter()

const handleClose = (fullPath: string) => {
  tabStore.removeTab(fullPath)
  if (route.fullPath === fullPath) {
    router.push(tabStore.tabs[tabStore.tabs.length - 1].fullPath)
  }
}
</script>

<template>
  <div class="tab-wrapper">
    <div
      class="tab"
      :class="{ active: route.fullPath === item.fullPath }"
      v-for="item in tabStore.tabs"
      :key="item.fullPath"
      @click="router.push(item.fullPath)"
    >
      <div>{{ item.title && t(item.title) }}</div>
      <el-icon class="close" @click.stop="handleClose(item.fullPath)"><Close /></el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab-wrapper {
  display: flex;
  margin-top: 4px;
  box-sizing: border-box;
  height: 32px;
  border-bottom: 1px solid var(--el-border-color);
  font-size: 14px;
  padding: 0 20px;
  align-items: flex-end;
  overflow-x: auto;
}

.tab {
  box-sizing: border-box;
  padding: 0 15px 0 20px;
  height: 28px;
  border: 1px solid var(--el-border-color);
  cursor: pointer;
  border-bottom: none;
  margin-right: 2px;
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;

  &:hover {
    background-color: var(--el-color-primary-light-9);

    .close {
      visibility: visible;

      &:hover {
        color: var(--el-color-primary-light-5);
      }
    }
  }

  .close {
    margin-left: 4px;
    visibility: hidden;
  }

  // 选中
  &.active {
    background-color: var(--el-color-primary-light-9);

    .close {
      visibility: visible;
    }
  }

  &:only-child {
    background-color: var(--el-color-primary-light-9);

    .close {
      visibility: hidden;

      &:hover {
        visibility: hidden;
      }
    }
  }
}
</style>
