<script lang="ts" setup>
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'
import LocaleSwitch from '@/components/LocaleSwitch/index.vue'
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'
import * as api from '@/api/user'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const { t } = useI18n()

const form = ref<LoginRequest>({
  username: 'admin',
  password: 'admin',
})

const handleLogin = async () => {
  userStore.login(form.value)
}

const handleTest = async () => {
  const res = await api.getUserInfo()
  console.log(res)
}
</script>

<template>
  <div class="login">
    <el-card style="width: 470px; border-radius: 10px">
      <div class="form-wrapper">
        <div class="title">Vue3 Vite Template</div>
        <el-input v-model="form.username" :placeholder="t('common.user.username')" :prefix-icon="User" />
        <el-input
          v-model="form.password"
          :placeholder="t('common.user.password')"
          :prefix-icon="Lock"
          type="password"
          show-password
        />
        <div>
          <el-button type="primary" style="width: 100%" @click="handleLogin">
            {{ t('common.user.login') }}
          </el-button>
        </div>
        <div>
          <el-button style="width: 100%">
            {{ t('common.user.register') }}
          </el-button>
        </div>
        <div>
          <el-button style="width: 100%" @click="handleTest"> 测试 </el-button>
        </div>
      </div>
    </el-card>
    <div class="action-area">
      <ThemeSwitch />
      <LocaleSwitch />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  .title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 30px;
    font-weight: bold;
  }
}

.action-area {
  position: fixed;
  top: 80px;
  right: 80px;
  display: flex;
  gap: 20px;
}
</style>
