import { type ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }: ConfigEnv) => {
  return {
    server: {
      port: 7101,
      open: true,
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }
})
