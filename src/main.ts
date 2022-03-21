import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { store, key } from './store'
import '@/assets/css/index.scss'
import './permission'

if (import.meta.env.MODE === 'mock') await import('@/mock')

const app = createApp(App)
app
  .use(router)
  .use(store, key)
  .mount('#app')
