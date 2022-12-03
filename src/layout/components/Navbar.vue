<template>
  <div class="navbar">
    <hambuger @toggleClick="toggleSidebar" :is-actvie="sidebar.opened" />
    <breadcrumb></breadcrumb>

    <div class="right-menu">
      <!-- 设置 -->
      <div
        @click="openShowSetting"
        class="setting right-menu-item hover-effect"
      >
        <el-icon><Setting /></el-icon>
      </div>
      <!-- ... -->
    </div>
  </div>
</template>

<script setup lang="ts">
// ...
import { Setting } from "@element-plus/icons-vue"
const emit = defineEmits<{
  (event: "showSetting", isShow: boolean): void
}>()
// 打开设置面板，触发对应的事件
const openShowSetting = () => {
  emit("showSetting", true)
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  background: #fff;
  border-bottom: 1px solid rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .right-menu {
    // ...
    .setting {
      font-size: 26px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
