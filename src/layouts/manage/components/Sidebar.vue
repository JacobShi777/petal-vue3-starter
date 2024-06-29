<script lang="ts" setup></script>

<template>
  <div class="sidebar">
    <div>
      <h1>Sidebar</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 200px;
  height: 100%;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
}
</style>
