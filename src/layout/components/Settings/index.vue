<!--
 * @Author: jiangqb jiangqb@citycloud.com.cn
 * @Date: 2022-12-02 19:49:40
 * @LastEditors: jiangqb jiangqb@citycloud.com.cn
 * @LastEditTime: 2022-12-03 16:03:13
 * @FilePath: /vue3-admin-front/src/layout/components/Settings/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="drawer-container">
    <div class="drawer-item">
      <span>主题色</span>
      <theme-picker />
    </div>

    <div class="drawer-item">
      <span>Open Tags-view</span>
      <el-switch v-model="tagsView" class="drawer-switch"></el-switch>
    </div>

    <!-- 侧边栏Logo -->
    <div class="drawer-item">
      <span>Sidebar Logo</span>
      <el-switch v-model="showSidebarLogo" class="drawer-switch"></el-switch>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from "@/stores/settings"
const settingsStore = useSettingsStore()
const tagsView = computed({
  get() {
    // 获取 store 中 tagsView 状态
    return settingsStore.settings.tagsView
  },
  set(val) {
    settingsStore.changeSetting({
      key: "tagsView",
      value: val
    })
  }
})
const showSidebarLogo = computed({
  get() {
    // 获取store中 tagsView 状态
    return settingsStore.settings.sidebarLogo
  },
  set(val) {
    settingsStore.changeSetting({
      key: "sidebarLogo",
      value: val
    })
  }
})
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.65);
  }
}
</style>
