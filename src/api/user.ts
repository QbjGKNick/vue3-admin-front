/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-04 19:42:14
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-04 19:49:24
 * @FilePath: /vue3-admin-front/src/api/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "./config/request"
import { ApiResponse } from "./type"

interface UserLoginData {
  username: string
  password: string
}

interface LoginResponseData {
  token: string
}

export const login = (
  data: UserLoginData
): Promise<ApiResponse<LoginResponseData>> => {
  return request.post("/auth/login", data)
}
