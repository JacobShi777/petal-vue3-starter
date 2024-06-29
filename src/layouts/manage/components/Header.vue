<script lang="ts" setup>
import LocaleSwitch from '@/components/LocaleSwitch/index.vue'
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'
import UserLogin from '@/components/UserLogin/index.vue'
import TabBar from './TabBar.vue'
</script>

<template>
  <div class="header">
    <div class="up">
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="action-area">
        <ThemeSwitch />
        <LocaleSwitch />
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
