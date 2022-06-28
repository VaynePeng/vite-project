<script setup lang="ts">
import avatar from '@/assets/images/avatar.jpg'
</script>

<template>
  <el-dropdown class="user-info" trigger="click">
    <div class="user-info--content">
      <img class="user-info--avatar" :src="avatar" />
      <span>Admin</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item> 测试菜单 </el-dropdown-item>
        <el-dropdown-item divided> 退出登录 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="less">
.user-info {
  &--content {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 var(--menu-padding);
  }
  &--avatar {
    width: 25px;
    height: 25px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 5px;
  }
}
</style>
