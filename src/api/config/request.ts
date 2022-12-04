import axios from "axios"
import { getToken } from "@/utils/auth"
import { ElMessage } from "element-plus"

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 100000
})

service.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      // 携带 token
      config.headers!.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use((response) => {
  const { code, message } = response.data
  if (code !== 0) {
    // 错误提示
    ElMessage.error(message)
    return Promise.reject(message)
  }
  return response.data
})

export default service
