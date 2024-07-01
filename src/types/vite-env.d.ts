// src/vite-env.d.ts or types/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROXY_KEY: string
  // Define other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
