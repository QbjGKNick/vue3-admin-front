/*
 * @Author: jiangqb jiangqb@citycloud.com.cn
 * @Date: 2022-12-02 20:06:05
 * @LastEditors: jiangqb jiangqb@citycloud.com.cn
 * @LastEditTime: 2022-12-02 20:10:00
 * @FilePath: /vue3-admin-front/src/hooks/useGenerateTheme.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useSettingsStore } from "@/stores/settings"
import { generateColors, setColors } from "@/utils/color"

export const useGenerateTheme = () => {
  // 获得settingStore
  const store = useSettingsStore()
  const theme = computed(() => store.settings.theme) // 默认主题
  const originalTheme = computed(() => store.settings.originalTheme)
  const generateTheme = (primary: string) => {
    const colors = Object.assign(
      // 根据当前主题生成
      {
        primary: theme.value
      },
      generateColors(primary)
    )
    setColors(colors)
  }
  // 用户选择的主题和当前主题不一致，则生成主题
  if (theme.value !== originalTheme.value) {
    generateTheme(theme.value)
    // 同步最新主题
    store.changeSetting({ key: "originalTheme", value: theme.value })
  }
  return {
    generateTheme
  }
}
