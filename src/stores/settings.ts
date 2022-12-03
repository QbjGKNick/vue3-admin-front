/*
 * @Author: jiangqb jiangqb@citycloud.com.cn
 * @Date: 2022-12-02 16:37:43
 * @LastEditors: jiangqb jiangqb@citycloud.com.cn
 * @LastEditTime: 2022-12-03 15:57:53
 * @FilePath: /vue3-admin-front/src/stores/settings.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7
 */
import variables from "@/styles/variables.module.scss"
import { defineStore } from "pinia"
export const useSettingsStore = defineStore(
  "settings",
  () => {
    // theme是用户选择的主题
    // originalTheme是现在生效的主题，刷新需要重新生成无需存放到sessionStorage中
    const settings = reactive({
      theme: variables.theme,
      originalTheme: "",
      tagsView: true,
      sidebarLogo: true
    })

    type ISettings = typeof settings
    type ValueOf<T> = T[keyof T]

    // 修改配置
    const changeSetting = ({
      key,
      value
    }: {
      key: keyof ISettings
      value: ValueOf<ISettings>
    }) => {
      if (key in settings) {
        ;(settings[key] as ValueOf<ISettings>) = value
      }
    }
    return { settings, changeSetting }
  },
  {
    persist: {
      storage: window.localStorage,
      paths: ["settings.theme", "settings.tagsView", "settings.sidebarLogo"]
    }
  }
)
