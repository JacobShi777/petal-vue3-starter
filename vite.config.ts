import { type ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

export default defineConfig(({ mode }: ConfigEnv) => {
  return {
    server: {
      host: true,
      port: 7101,
      open: true,
      proxy: {
        '/api': {
          target: 'http://localhost:7101',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        /** 指定需要缓存的svg图标文件夹，即需要识别的svg都应该放在这个文件夹下 */
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
      /** 自动导入
       * - https://element-plus.org/zh-CN/component/icon.html#%E8%87%AA%E5%8A%A8%E5%AF%BC%E5%85%A5
       * - https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58
       */
      AutoImport({
        // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),

          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
      Components({
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'],
          }),
          // Auto register Element Plus components
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: true,
      }),
    ],
    resolve: {
      alias: {
        '@': '/src',
      },
      /** 减少解析操作
       * - https://cn.vitejs.dev/guide/performance.html#reduce-resolve-operations
       * - extensions 默认为 ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
       * - 默认情况下解析一个 ts 导入路径需要进行 4 次文件系统检查
       * - 其他文件在导入时需指定后缀
       */
      extensions: ['.ts'],
    },
    build: {
      /** 构建后是否生成 source map 文件 */
      sourcemap: true,
      /** 自定义底层的 Rollup 打包配置 */
      rollupOptions: {
        output: {
          /** 该选项允许你创建自定义的公共 chunk
           * - https://cn.rollupjs.org/configuration-options/#output-manualchunks
           */
          manualChunks: {
            tools: ['lodash-es', 'axios', 'path-browserify'],
            vue: ['vue', 'vue-router', 'pinia', 'pinia-plugin-persistedstate', 'vue-i18n'],
            element: ['element-plus', '@element-plus/icons-vue'],
          },
        },
      },
    },
  }
})
