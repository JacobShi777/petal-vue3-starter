import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import _ from 'lodash-es'
import { getToken } from '.'

const service: AxiosInstance = axios.create()

service.interceptors.request.use((config) => {
  return config
})

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const validCodes = [0, 1]
    const data = response.data
    if (validCodes.includes(data.code)) {
      return data
    } else {
      return Promise.reject({
        message: '响应数据格式错误',
        data,
      })
    }
  },
  (err) => {
    const status = err.response.status
    if (status === 401) {
      ElMessage.error('登录过期，请重新登录')
    }
    return Promise.reject({
      message: 'http请求错误, 响应码非200',
      err,
    })
  },
)

const sendRequest = <T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  const token = getToken()
  const baseConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_PROXY_KEY,
    timeout: 5000,
    headers: {
      token: token ? `${token}` : undefined,
      'Content-Type': 'application/json',
    },
    data: {},
  }
  const mergedConfig = _.merge({}, baseConfig, config)
  return new Promise((resolve, reject) => {
    service(mergedConfig)
      .then((res) => {
        resolve(res as unknown as Promise<ApiResponse<T>>)
      })
      .catch((e: Error | AxiosError) => {
        reject(e)
      })
  })
}

const request = {
  get<T = any>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return sendRequest<T>({ ...config, method: 'get' })
  },
  post<T = any>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return sendRequest({ ...config, method: 'post' })
  },
  put<T = any>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return sendRequest({ ...config, method: 'put' })
  },
  delete<T = any>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return sendRequest({ ...config, method: 'delete' })
  },
}

export default request
