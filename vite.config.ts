import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
// 自动导入
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import ElementPlus from "unplugin-element-plus/vite"
import DefineOptions from "unplugin-vue-define-options/vite"
// import {
//   createStyleImportPlugin,
//   ElementPlusResolve
// } from "vite-plugin-style-import"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src")
      }
    ]
  },
  plugins: [
    vue(),
    DefineOptions(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/icons/svg")], // icon 存放的目录
      symbolId: "icon-[name]", // symbol的id
      inject: "body-last", // 插入的位置
      customDomId: "__svg__icons__dom__" // svg的id
    }),
    // 自动导入
    AutoImport({
      imports: ["vue", "vue-router"], // 顺便自动导入 vue vue-router
      resolvers: [ElementPlusResolver()],
      eslintrc: { enabled: false }, // 改成true生成一次后禁用即可
      dts: "src/auto-import.d.ts" // 生成的全局变量放到此目录下
    }),
    Components({
      // 默认只针对 src/components 目录实现自动导入
      dirs: ["src/components", "src/layout/components"], // 后面布局组件也有相关的组件期望自动导入
      dts: "src/components.d.ts",
      resolvers: [ElementPlusResolver()] // 生成的组件的类型放到这里
    }),
    ElementPlus()
  ],
  server: {
    proxy: {
      "/dev-api": {
        target: "http://localhost:3000",
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev-api/, "/api")
      }
    }
  }
})
