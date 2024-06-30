import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'
import '@/styles/index.scss'
import i18n from '@/locales'
import store from '@/store'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)
app.use(router).use(store).use(i18n)
app.mount('#app')
