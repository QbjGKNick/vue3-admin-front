<!--
 * @Author: jiangqb jiangqb@citycloud.com.cn
 * @Date: 2022-11-25 19:30:18
 * @LastEditors: jiangqb jiangqb@citycloud.com.cn
 * @LastEditTime: 2022-12-03 16:26:48
 * @FilePath: /vue3-admin-front/src/layout/components/Sidebar/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <h4 @click="isCollapse = !isCollapse">展收测试</h4> -->
  <div class="sidebar-wrapper">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <scroll-panel>
      <el-menu
        class="sidebar-container-menu"
        mode="vertical"
        :default-active="activeMenu"
        :background-color="scssVariables.menuBg"
        :text-color="scssVariables.menuText"
        :active-text-color="themeColor"
        :collapse="sidebar.opened"
        :collapse-transition="true"
      >
        <!-- 循环sidebar-item 组件 -->
        <sidebar-item
          v-for="route in menuRoutes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </scroll-panel>
  </div>
</template>

<script lang="ts" setup>
import scssVariables from "@/styles/variables.module.scss"

// 导入路由表
import { routes } from "@/router"

import { useAppStore } from "@/stores/app"
import { storeToRefs } from "pinia"
import { useSettingsStore } from "@/stores/settings"

const store = useAppStore()
const { sidebar } = storeToRefs(store)

// 获取主题色
const settingStore = useSettingsStore()
const themeColor = computed(() => settingStore.settings.theme)
// const isCollapse = ref(false)
// 渲染路由
const menuRoutes = computed(() => routes)

const route = useRoute()
// 根据路由路径 对应 当前激活的菜单 页面刷新后 激活当前路由匹配的菜单
const activeMenu = computed(() => {
  const { path, meta } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})

// 是否显示 logo
const showLogo = computed(() => settingStore.settings.sidebarLogo)
// 展开收起状态 稍后放 store 当前是展开就让它收起
const isCollapse = computed(() => store.sidebar.opened)

const logoHeight = computed(() => (showLogo.value ? 50 : 0) + "px")
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  .sidebar-container-menu {
    height: calc(100vh - v-bind(logoHeight));
  }
}
</style>
