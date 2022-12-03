<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-02 22:56:14
 * @LastEditors: jiangqb jiangqb@citycloud.com.cn
 * @LastEditTime: 2022-12-03 15:28:23
 * @FilePath: /vue3-admin-front/src/components/RightPanel/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="right-panel">
    <el-drawer
      :model-value="modelValue"
      :direction="direction"
      :show-close="showClose"
      :custom-class="customClass"
      :with-header="withHeader"
      :title="title"
      :size="size"
      @close="handleClose"
    >
      <slot />
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    validator(val: string) {
      return ["rtl", "ltr", "ttb", "bbt"].includes(val)
    },
    default: "rtl"
  },
  title: {
    type: String,
    default: "自定义title"
  },
  size: {
    type: [String, Number]
  },
  customClass: {
    type: String,
    default: "setting-panel"
  },
  showClose: {
    type: Boolean,
    default: true
  },
  withHeader: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(["update:modelValue", "close"])
const handleClose = () => {
  emit("update:modelValue", false)
  emit("close")
}
</script>

<style scoped></style>
