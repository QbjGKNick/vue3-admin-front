/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-02 22:56:14
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-04 20:22:15
 * @FilePath: /vue3-admin-front/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE"
 */
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"
// 初始化css，重置 css 默认样式
import "normalize.css/normalize.css"
// 全局 css
import "@/styles/index.scss"

// 引入 icon 插件
import initSvgIcon from "@/icons/index"
import "virtual:svg-icons-register"

// 注册 element-plus
import installElementPlus from "./plugins/element"
import "./permission"

const app = createApp(App)
const pinia = createPinia()
// app.use(ElementPlus)
app.use(installElementPlus)
app.use(router)
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
// 使用 icon 组件
app.use(initSvgIcon)
app.mount("#app")
