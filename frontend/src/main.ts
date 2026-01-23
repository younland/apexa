import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import { registerUI, registerIcons } from '@/hooks'

async function init() {
  // 注册本地图标
  await registerIcons()

  const app = createApp(App)

  // 注册shadcn-vue UI组件
  await registerUI(app)
  await registerCore(app)

  app.mount('#app')
}

init()
