<template>
  <div>
    <h1>Dashboard page</h1>
    <svg-icon icon-class="bug"></svg-icon>
    <!-- icon-class svg 图标名称 class-name 额外的自定义类名 @click 绑定事件 -->
    <svg-icon
      icon-class="404"
      class-name="custom-class"
      @click="sayHi"
    ></svg-icon>
    <br />
    <br />
    <br />
    缓存测试 <input type="text" />
    <el-button>按钮</el-button>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: "Dashboard" })
// import { getCurrentInstance } from "vue"
const { proxy } = getCurrentInstance()!
const sayHi = () => {
  // alert("hi svg")
  proxy?.$message.success("恭喜你，这是一条成功消息")
}
</script>

<style lang="scss">
.custom-class {
  // 自定义样式 404
  font-size: 200px;
  color: green;
}
</style>
