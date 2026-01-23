import type { App } from 'vue'
import { mapKeys } from 'lodash-es'
import CoreIcon from '@/components/core/icon/index.vue'

export async function registerUI(app: App) {
  /* 自动导入 src/ui 目录下所有 *.vue 文件 */
  const modules = import.meta.glob<{ default: any }>('@/ui/**/*.ts', {
    eager: true
  })

  Object.entries(modules).forEach(([_, m]) => {
    mapKeys(m, (val, key) => {
      if (typeof val === 'object') {
        app.component(key, val)
      }
    })
  })
}

export async function registerCore(app: App) {
  app.component('Icon', CoreIcon)
}
