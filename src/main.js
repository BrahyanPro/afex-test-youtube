import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'sweetalert2/dist/sweetalert2.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faTrashAlt, faClock, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faTrashAlt, faClock, faMoneyBillTrendUp)





const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
