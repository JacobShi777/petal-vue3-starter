import { type ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default defineConfig(({ mode }: ConfigEnv) => {
  return {
    server: {
      port: 7101,
      open: true,
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 指定需要缓存的svg图标文件夹，即需要识别的svg都应该放在这个文件夹下
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }
})
