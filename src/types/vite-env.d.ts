/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROXY_KEY: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// 如果 ImportMetaEnv 增强不起作用，请确保在 vite-env.d.ts 中没有任何 import 语句。
