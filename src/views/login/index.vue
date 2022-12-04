<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-04 17:11:29
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-04 19:55:52
 * @FilePath: /vue3-admin-front/src/views/login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
      ref="loginFormRef"
    >
      <div class="admin-logo">
        <img src="../../assets/vue.svg" alt="logo" class="logo" />
        <h1 class="name">Vue3 Admin</h1>
      </div>
      <el-form-item prop="username">
        <el-input
          placeholder="请输入用户名"
          v-model.trim="loginForm.username"
          ref="usernameRef"
          autocomplete="off"
          tabindex="1"
        >
          <template #prepend>
            <span class="svg-container">
              <svg-icon icon-class="user"></svg-icon>
            </span>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          autocomplete="on"
          v-model.trim="loginForm.password"
          tabindex="2"
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
import { FormInstance } from "element-plus"
import { useUserStore } from "@/stores/user"

const loading = ref(false)
// form ref
const loginFormRef = ref<FormInstance | null>(null)
// form username ref
const usernameRef = ref<HTMLInputElement | null>(null)
// form password ref
const passwordRef = ref<HTMLInputElement | null>(null)
// 登录所需信息
const loginState = reactive({
  loginForm: {
    username: "",
    password: ""
  },
  loginRules: {
    username: [
      {
        required: true,
        trigger: "blur",
        message: "请输入用户名！"
      }
    ],
    password: [
      {
        required: true,
        trigger: "blur",
        message: "请输入密码！"
      }
    ]
  }
})
// 处理登录逻辑
const userStore = useUserStore()
const router = useRouter()
const handleLogin = () => {
  loginFormRef.value?.validate(async (valid) => {
    if (valid) {
      // console.log(loginState.loginForm)
      loading.value = true
      try {
        await userStore.login(loginState.loginForm)
        router.push({ path: "/" })
      } finally {
        loading.value = false
      }
    } else {
      console.log("error submit")
    }
  })
}
// 解构
const { loginForm, loginRules } = toRefs(loginState)

// 自动获取焦点
onMounted(() => {
  if (loginState.loginForm.username === "") {
    usernameRef.value?.focus()
  } else if (loginState.loginForm.password === "") {
    passwordRef.value?.focus()
  }
})
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;
.login-container {
  .el-form-item {
    .el-input {
      height: 40px;
    }
  }
}
</style>

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
