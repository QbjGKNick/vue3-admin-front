<template>
  <div class="navbar">
    <hamburger @toggleClick="toggleSidebar" :is-active="true" />
  </div>
</template>

<script setup lang="ts">
const toggleSidebar = () => {
  console.log("click")
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
}
</style>
