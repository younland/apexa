import type {App} from 'vue'
import { mapKeys } from 'lodash-es'

export async function registerUI(app: App) {
  /* 自动导入 src/components/ui 目录下所有 *.vue 文件 */
  const modules = import.meta.glob<{ default: any }>('@/components/ui/**/*.ts', {
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
