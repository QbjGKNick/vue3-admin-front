/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-04 19:44:28
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-04 20:41:12
 * @FilePath: /vue3-admin-front/src/stores/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia"
import { login as loginApi } from "@/api/user"
import { removeToken, setToken } from "@/utils/auth"
import { useTagsView } from "./tagsView"
// login params
export interface IUserInfo {
  username: string
  password: string
}

export const useUserStore = defineStore("user", () => {
  // 状态
  const state = reactive({
    token: ""
  })
  const login = async (userInfo: IUserInfo) => {
    try {
      const response = await loginApi(userInfo)
      const { data } = response
      state.token = data.token
      setToken(data.token)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  const { delAllView } = useTagsView()
  const resetToken = () => {
    // 清空store里token
    state.token = ""
    // 清空localStorage里的token
    removeToken()
  }
  const logout = () => {
    resetToken()
    // 清除所有tag views
    delAllView()
  }
  return { state, login, logout, resetToken }
})
