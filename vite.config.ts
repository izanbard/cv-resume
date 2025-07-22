import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Unocss from 'vite-plugin-vue-inspector'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  root: "src",
  base: process.env.NODE_ENV === 'pages' ? '/cv-resume/' : '/',
  publicDir: '../public',
  server: {
    allowedHosts: [".local.net"],
    open: "index.html",
  },
  build: {
    outDir: '../dist',
  },
  plugins: [
    vue(),
    vueDevTools({
      launchEditor: 'webstorm',
    }),
    Unocss({
      launchEditor: 'webstorm',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "/src": path.resolve(process.cwd(), "src")
    },
  },
})
