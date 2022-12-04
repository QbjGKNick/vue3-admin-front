/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-04 20:16:04
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-04 20:20:04
 * @FilePath: /vue3-admin-front/src/permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from "@/router"
import nProgress from "nprogress"
import "nprogress/nprogress.css" // progress bar style
import { getToken } from "./utils/auth"

nProgress.configure({ showSpinner: false })

const whiteList = ["/login"] // 白名单
router.beforeEach((to) => {
  nProgress.start()
  const hasToken = getToken()
  if (hasToken) {
    // 有token代表已登录
    if (to.path === "/login") {
      nProgress.done()
      return {
        path: "/",
        replace: true
      }
    }
    nProgress.done()
    return true
  } else {
    if (whiteList.includes(to.path)) {
      nProgress.done()
      return true
    }
    nProgress.done()
    return {
      path: "/login",
      query: {
        redirect: to.path,
        ...to.query
      }
    }
  }
})

router.afterEach(() => {
  nProgress.done()
})
