<script lang="ts" setup>
import { Close } from '@element-plus/icons-vue'
</script>

<template>
  <div class="tab-wrapper">
    <div class="tab active">
      <div>首页</div>
      <el-icon class="close"><Close /></el-icon>
    </div>
    <div class="tab">
      <div>管理</div>
      <el-icon class="close"><Close /></el-icon>
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

  &:hover {
    background-color: var(--el-color-primary-light-8);

    .close {
      visibility: visible;
    }
  }

  .close {
    margin-left: 4px;
    visibility: hidden;
  }

  // 选中
  &.active {
    background-color: var(--el-color-primary-light-8);

    .close {
      visibility: visible;
    }
  }
}
</style>
