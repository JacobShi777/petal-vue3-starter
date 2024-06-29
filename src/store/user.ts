import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as api from '@/api/user'
import { setToken, removeToken } from '@/utils'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>('')
  const userInfo = ref<UserInfo>()

  const { t } = useI18n()
  const router = useRouter()

  const login = async (data: LoginRequest) => {
    const res = await api.login(data)
    if (res.code === 1) {
      token.value = res.data.token
      setToken(res.data.token)
      ElMessage.success(t('common.user.login.success'))
      router.push({ path: '/' })
    } else {
      ElMessage.error(res.msg)
    }
  }

  const getUserInfo = async () => {
    const res = await api.getUserInfo()
    if (res.code === 1) {
      userInfo.value = res.data
    } else {
      ElMessage.error(res.msg)
    }
  }

  const logout = () => {
    token.value = ''
    userInfo.value = undefined
    removeToken()
    console.log('11')
    router.push('/login')
  }

  return {
    login,
    getUserInfo,
    logout,
  }
})
