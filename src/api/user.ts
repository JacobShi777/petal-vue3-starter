import request from '@/utils/request'

export const login = (data: LoginRequest) => request.post<UserInfo>({ url: '/user/login', data })

export const getUserInfo = () => request.get<UserInfo>({ url: '/user/info' })

export const test = () => request.get({ url: '/test' })
