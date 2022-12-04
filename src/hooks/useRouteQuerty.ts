/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-04 20:22:43
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-04 20:29:16
 * @FilePath: /vue3-admin-front/src/hooks/useRouteQuerty.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Ref } from "vue"
import { useRoute, LocationQueryRaw } from "vue-router"

interface RouteQuery {
  redirect: Ref<string>
  otherQuery: Ref<LocationQueryRaw | undefined>
}

const useRouteQuery = (): RouteQuery => {
  const route = useRoute()
  const query = route.query
  const redirect = ref("")
  const otherQuery = ref<LocationQueryRaw | undefined>(undefined)

  const getOtherQuery = (query: LocationQueryRaw) => {
    return Object.keys(query || {})
      .filter((q) => q !== "redirect")
      .reduce((obj, key) => {
        obj[key] = query[key]
        return obj
      }, {} as LocationQueryRaw)
  }

  otherQuery.value = getOtherQuery(query)

  watchEffect(() => {
    const query = route.query
    if (query) {
      redirect.value = query.redirect as string
      otherQuery.value = getOtherQuery(query as LocationQueryRaw)
    }
  })

  return {
    redirect,
    otherQuery
  }
}

export default useRouteQuery
