import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import { createPinia } from "pinia"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// 初始化css，重置 css 默认样式
import "normalize.css/normalize.css"
// 全局 css
import "@/styles/index.scss"
import "virtual:svg-icons-register"

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(createPinia())
app.mount("#app")
