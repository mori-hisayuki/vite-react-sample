/// <reference types="vitest" />  // 追加
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss' // 追加

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    fs: {
      strict: false
    }
  },
  plugins: [react(), WindiCSS()],
  test: {
    global: true,
    environment: 'jsdom'
  }
})
