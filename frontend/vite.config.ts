import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import wails from '@wailsio/runtime/plugins/vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    wails('./bindings'),
    tailwindcss(),
    AutoImport({
      dts: true,
      imports: [
        'vue'
        // 'vue-router',
        // 'pinia',
        // 其他需要自动导入的库
        // '@vueuse/core'
      ],
      dirs: [
        './src/stores/**',
        './src/utils/**',
        './src/locales/**',
        './src/lib/**'
        // 排除特定文件
        // "!./src/utils/xx/**",
      ],
      eslintrc: {
        enabled: false
      },
      vueTemplate: true
    }),
    Components({
      dts: true,
      // 组件名称 包含目录 ，防止命名冲突
      directoryAsNamespace: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
