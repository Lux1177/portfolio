import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import GridLayout from 'vue3-drr-grid-layout'

const app = createApp(App)

app.use(GridLayout)

app.use(createPinia())

app.mount('#app')
