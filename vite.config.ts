import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/assets': resolve(__dirname, 'src/assets'),
      '@/components': resolve(__dirname, 'src/components'),
      '@/views': resolve(__dirname, 'src/views'),
      '@/utils': resolve(__dirname, 'src/utils'),
      '@/locales': resolve(__dirname, 'src/locales'),
      '@/hooks': resolve(__dirname, 'src/hooks'),
      '@/plugins': resolve(__dirname, 'src/plugins'),
      '@/layouts': resolve(__dirname, 'src/layouts')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.7:8088',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
