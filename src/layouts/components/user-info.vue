<script setup lang="ts">
import avatar from '@/assets/images/avatar.jpg'

import signOut from '@/utils/sign-out'

const handleSignOut = (): void => {
  signOut()
}
</script>

<template>
  <el-dropdown class="user-info" trigger="click">
    <div class="user-info--content">
      <img class="user-info--avatar" :src="avatar" />
      <span>Admin</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleSignOut">
          {{ $t('signOut') }}
        </el-dropdown-item>
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
    padding: 0 10px;
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
