<template>
  <!-- 如果 iconClass 是带协议的图标链接 则通过 style 属性方式渲染 -->
  <div
    class="svg-icon svg-external-icon"
    v-if="isExt"
    :style="styleExternalIcon"
    v-bind="$attrs"
  ></div>
  <!-- SVG icon 通过名称使用 -->
  <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <!-- SVG 中 的 use 元素可以调用其他 SVG 文件的元素，<use xlink:href="#symbolId"></use> -->
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { isExternal } from "@/utils/validate"
import { computed } from "vue"
const props = defineProps<{ iconClass: string; className?: string }>()
// 是否是带协议的图片链接
const isExt = computed(() => isExternal(props.iconClass || ""))
// 拼接成 symbolId 在 loader 配置中指定了 SymbolId 格式  icon-图标名称
const iconName = computed(() => `#icon-${props.iconClass}`)
// 添加类名 props.className 外部传入自定义类名
const svgClass = computed(() =>
  props.className ? `svg-icon ${props.className}` : "svg-icon"
)
// 如果 iconClass 是带协议的图标链接 则通过 style css 属性方式渲染
const styleExternalIcon = computed(() => ({
  mask: `url(${props.iconClass}) no-repeat 50% 50%`,
  "-webkit-mask": `url(${props.iconClass}) no-repeat 50% 50%`
}))
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
