<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-04 17:11:29
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-04 17:23:08
 * @FilePath: /vue3-admin-front/src/views/login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="admin-logo">
        <img src="../../assets/vue.svg" alt="logo" class="logo" />
        <h1 class="name">Vue3 Admin</h1>
      </div>
      <el-form-item prop="usename">
        <el-input placeholder="请输入用户名">
          <template #prepend>
            <span class="svg-container">
              <svg-icon icon-class="user"></svg-icon>
            </span>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-input
          type="password"
          placeholder="请输入密码"
          autocomplete="on"
          show-password
        >
          <template #prepend>
            <span class="svg-container">
              <svg-icon icon-class="password"></svg-icon>
            </span>
          </template>
        </el-input>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        :loading="loading"
        @click="handleLogin"
        >Login</el-button
      >
    </el-form>
  </div>
</template>

<script setup lang="ts">
const loading = ref(false)
const handleLogin = () => {
  console.log("login")
}
</script>

<style lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
  .login-form {
    position: relative;
    width: 500px;
    max-width: 100%;
    margin: 0 auto;
    padding: 140px 35px 0;
    overflow: hidden;
    box-sizing: border-box;
    .admin-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      .logo {
        width: 60px;
        height: 60px;
      }
      .name {
        font-weight: normal;
        margin-left: 10px;
      }
    }
  }
}
</style>
