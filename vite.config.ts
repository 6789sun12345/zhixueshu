import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// GitHub Pages 项目站点部署在 /zhixueshu/ 子路径下，
// 因此生产构建时使用该 base，本地开发仍使用根路径（不影响 localhost:5173）。
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/zhixueshu/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    sourcemap: false,
    outDir: 'dist'
  },
  server: {
    port: 5173,
    host: true
  }
}))
