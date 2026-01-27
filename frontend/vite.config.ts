import { defineConfig } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import wails from '@wailsio/runtime/plugins/vite'
// @ts-ignore
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
// @ts-ignore
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
        'vue',
        'pinia',
        // 其他需要自动导入的库
        {
          '@vueuse/core': ['useMouse', 'useFetch'],
          'lodash-es': ['debounce', 'throttle', 'map', 'foreach', ['default', '_']]
        }
      ],
      dirs: ['./src/lib/**', './src/hooks/**'],
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
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '#': fileURLToPath(new URL('./bindings', import.meta.url))
    }
  }
})
