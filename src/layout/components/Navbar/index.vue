<template>
  <div class="navbar">
    <hamburger @toggleClick="toggleSidebar" :is-active="sidebar.opened" />
    <breadcrumb></breadcrumb>

    <div class="right-menu">
      <screenfull class="right-menu-item hover-effect"></screenfull>

      <!-- element 组件size切换 -->
      <el-tooltip content="Global Size" effect="dark" placement="bottom">
        <size-select class="right-menu-item hover-effect" />
      </el-tooltip>
      <avatar />
      <div
        @click="openShowSetting"
        class="setting right-menu-item hover-effect"
      >
        <el-icon><Setting /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app"
import { storeToRefs } from "pinia"
import { Setting } from "@element-plus/icons-vue"
const emit = defineEmits<{
  (event: "showSetting", isShow: boolean): void
}>()
// 打开设置面板，触发对应的事件
const openShowSetting = () => {
  emit("showSetting", true)
}

const store = useAppStore()
const { sidebar } = storeToRefs(store)
const toggleSidebar = () => {
  store.toggleSidebar()
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  background: #fff;
  border-bottom: 1px solid rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .right-menu {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 15px;
  }
}
</style>
