<template>
  <component :is="type" v-bind="linkProps">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { isExternal } from "@/utils/validate"

// 针对路径是外链 就渲染为 a 标签 如果是正常路由路径 就渲染为 router-link

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
// 判断接收的路径 是不是外链
const isExt = computed(() => isExternal(props.to))
const type = computed(() => {
  if (isExt.value) {
    return "a"
  }
  return "router-link"
})

const linkProps = computed(() => {
  if (isExt.value) {
    return {
      // a 标签的一些原生属性
      href: props.to,
      target: "_blank",
      rel: "noopener"
    }
  }
  // router-link 只需要一个 to props
  return {
    to: props.to
  }
})
</script>

<style lang="scss" scoped></style>
