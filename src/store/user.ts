import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as api from '@/api/user'
import { setToken, removeToken } from '@/utils'
import { useRouter } from 'vue-router'
import { UserRoleEnum } from '@/constants/user'
import store from '.'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>('')
  const role = ref<UserRoleEnum>()
  const userInfo = ref<UserInfo>()

  const router = useRouter()

  const login = async (data: LoginRequest) => {
    const res = await api.login(data)
    if (res.code === 1) {
      token.value = res.data.token
      setToken(res.data.token)
      router.push({ path: '/' })
    } else {
      ElMessage.error(res.msg)
    }
    return res
  }

  const getUserInfo = async () => {
    const res = await api.getUserInfo()
    if (res.code === 1) {
      userInfo.value = res.data
      role.value = res.data.roleId
    } else {
      role.value = UserRoleEnum.GUEST
      ElMessage.error(res.msg)
    }
  }

  const logout = () => {
    token.value = ''
    userInfo.value = undefined
    removeToken()
    router.push('/login')
  }

  return {
    token,
    role,
    login,
    getUserInfo,
    logout,
  }
})

export const useUserStoreHook = () => useUserStore(store)
