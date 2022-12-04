import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'



const app = createApp(App)
app.mount('#app')
app.use(Notifications)
