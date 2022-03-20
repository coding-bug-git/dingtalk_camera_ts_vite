import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { store, key } from './store'
import '@/assets/css/index.scss'
// import './permission'
import '@/mock'

const app = createApp(App)
app
  .use(router)
  .use(store, key)
  .mount('#app')
