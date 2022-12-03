<!--
 * @Author: jiangqb jiangqb@citycloud.com.cn
 * @Date: 2022-12-02 19:39:24
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-03 11:34:12
 * @FilePath: /vue3-admin-front/src/components/ThemePicker/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-color-picker
    v-model="theme"
    class="theme-picker"
    :predefine="themeColor"
    popper-class="theme-picker-dropdown"
  />
</template>

<script setup lang="ts">
// 预设可选颜色
import { useSettingsStore } from "@/stores/settings"
import { useGenerateTheme } from "@/hooks/useGenerateTheme"

const store = useSettingsStore()
const { generateTheme } = useGenerateTheme()
const themeColor = [
  "#409EFF",
  "#1890ff",
  "#304156",
  "#212121",
  "#11a983",
  "#13c2c2",
  "#6959CD",
  "#f5222d"
]
// store中获取默认主题色
const defaultTheme = computed(() => store.settings.theme)
const theme = ref("")
// 监听默认样式
watch(
  defaultTheme,
  (value) => {
    theme.value = value
  },
  {
    immediate: true
  }
)

// 根据theme选择变化 重新生成主题
watch(theme, (value) => {
  // 同步 store
  store.changeSetting({ key: "theme", value })

  // 稍后这里生成主题
  generateTheme(value)
})
</script>

<style lang="scss">
.theme-picker {
  height: 26px !important;
  margin-right: 8px;
  .el-color-picker__trigger {
    height: 26px !important;
    width: 26px !important;
    padding: 2px;
  }
}

.theme-message,
.theme-picker-dropdown {
  z-index: 99999 !important;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
