<script lang="ts" setup></script>

<template>
  <el-dropdown>
    <div class="dropdown-link">
      <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
      <div>Admin</div>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item> {{ $t('common.user.logout') }} </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.dropdown-link {
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  > * {
    margin-left: 10px;
  }
}
</style>
