<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-02 22:56:14
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-02 23:00:27
 * @FilePath: /vue3-admin-front/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <router-link to="/home">首页</router-link>
  <router-link to="/about">关于</router-link> -->
  <el-config-provider :size="size" :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
  <!-- <Counter></Counter> -->
</template>

<script setup lang="ts">
// import Counter from "@/components/Counter/index.vue"
import zhCn from "element-plus/dist/locale/zh-ch.mjs"
import { storeToRefs } from "pinia"
import { useGenerateTheme } from "@/hooks/useGenerateTheme"
import { useAppStore } from "./stores/app"
const store = useAppStore()

const { size } = storeToRefs(store)
useGenerateTheme()
</script>
