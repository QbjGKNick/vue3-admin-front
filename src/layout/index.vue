<!--
 * @Author: jiangqb jiangqb@citycloud.com.cn
 * @Date: 2022-12-02 14:19:18
 * @LastEditors: jiangqb jiangqb@citycloud.com.cn
 * @LastEditTime: 2022-12-03 15:40:50
 * @FilePath: /vue3-admin-front/src/layout/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar />
    </div>
    <div class="main-container">
      <div class="header">
        <!-- <div class="tags-view">tagsview</div> -->
        <navbar @showSetting="openSetting"></navbar>
        <tags-view></tags-view>
      </div>
      <!-- <div class="app-main">
        <h2>app main</h2>
        <router-view></router-view>
      </div> -->
      <app-main></app-main>
    </div>
    <!-- 增添right-panel -->
    <right-panel
      v-model="showSetting"
      title="样式风格设置"
      :size="settingsPanelWidth"
    >
      <!-- setting 面板设置组件，稍后实现 -->
      <settings />
    </right-panel>
  </div>
</template>

<script lang="ts" setup>
// import sidebar from "./components/Sidebar"
import variables from "@/styles/variables.module.scss"

const showSetting = ref(false)

const openSetting = () => {
  // 控制 right-panel 弹出
  showSetting.value = true
}
const settingsPanelWidth = computed(() => variables.settingPanelWidth)
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      background: cyan;
      .navbar {
        height: 50px;
        background: #fff;
      }
      .tags-view {
        height: 34px;
        background: #12efff;
      }
    }
    .app-main {
      /* main = 100% - navbar + tagsview */
      min-height: calc(100vh - 84px);
      background: red;
    }
  }
}
</style>
