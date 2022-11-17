<template>
  <div class="sidebar-item-container" v-if="!item.meta || !item.meta.hidden">
    <!-- 如果有一个孩子，或者没孩子，或者有一个孩子但是被hidden了 -->
    <template v-if="theOnlyOneChildRoute">
      <!-- 如果没有meta属性意味着不必渲染了 -->
      <el-menu-item
        :index="resolvePath(theOnlyOneChildRoute.path)"
        v-if="theOnlyOneChildRoute.meta"
      >
        <el-icon v-if="icon">
          <svg-icon class="menu-icon" :icon-class="icon"></svg-icon>
        </el-icon>
        <template #title>
          <span>{{ theOnlyOneChildRoute.meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 多个子路由时 -->
    <el-sub-menu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template #title>
        <el-icon v-if="item.meta?.icon">
          <svg-icon class="menu-icon" :icon-class="item.meta.icon"> </svg-icon>
        </el-icon>
        <span class="submenu-title">{{ item.meta?.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      >
      </sidebar-item>
    </el-sub-menu>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import type { RouteRecordRaw } from "vue-router"
import path from "path-browserify"
const props = defineProps({
  item: {
    type: Object as PropType<RouteRecordRaw>,
    required: true
  },
  basePath: {
    // 父路由路径（子路由路径如果是相对的 要基于父路径）
    type: String,
    required: true
  }
})

// 渲染菜单主要先看子路由
// 比如我们的路由 一级路由一般都是 layout 组件 二级路由才是我们考虑要渲染成菜单的
const showingChildNumber = computed(() => {
  // hidden 路由排除掉 只算可渲染子路由
  const children = (props.item.children || []).filter((child) => {
    if (child?.meta?.hidden) return false
    return true
  })
  return children.length
})

// 要渲染的单个路由 如果该路由只有一个子路由 默认直接渲染这个子路由
// theOnlyOneChildRoute 直接通过 el-menu-item 组件来渲染
const { item } = toRefs(props)
const theOnlyOneChildRoute = computed(() => {
  // 多个 children 时 直接 return null 多 children 需要用 el-submenu 来渲染并递归
  if (showingChildNumber.value > 1) {
    return null
  }

  // 只有一个子路由 还要筛选路由 meta 里有无 hidden 属性 hidden: true 则过滤出去 不用管
  // 路由 meta 里我们会配置 hidden 属性表示不渲染成菜单，比如 login 401 404 页面是不渲染成菜单的

  if (item.value.children) {
    for (const child of item.value.children) {
      if (!child.meta || !child.meta.hidden) {
        return child
      }
    }
  }

  // showingChildNumber === 0 无可渲染的子路由（可能有子路由 hidden 属性为 true）
  // 无可渲染 children 时 把当前路由 item 作为仅有的子路由渲染
  return {
    ...props.item,
    path: "" // resolvePath 避免 resolve 拼接时 拼接重复
  }
})

// menu icon
const icon = computed(() => {
  // 子路由 如果没有 icon 就用父路由的
  return (
    theOnlyOneChildRoute.value?.meta?.icon ||
    (props.item.meta && props.item.meta.icon)
  )
})

// 利用 path.resolve 根据父路径 + 子路径 解析成正确路径 子路径可能是相对的
// resolvePath 在模板中使用
const resolvePath = (childPath: string) => {
  return path.resolve(props.basePath, childPath)
}
</script>
