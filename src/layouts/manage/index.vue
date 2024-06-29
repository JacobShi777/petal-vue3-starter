<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="layout">
    <Sidebar />
    <div class="right">
      <Header />
      <div class="app-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  height: 100%;
}
.right {
  margin-left: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .app-content {
    overflow-y: auto;
    flex: 1;
  }
}
</style>
