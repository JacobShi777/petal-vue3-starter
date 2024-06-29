import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'

const pinia = createPinia()

const app = createApp(App)

app.component('SvgIcon', SvgIcon)
app.use(router).use(pinia).mount('#app')
