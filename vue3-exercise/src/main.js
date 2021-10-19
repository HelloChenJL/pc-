import { createApp } from 'vue'
import {router} from "./router"
import {store} from  "./store"
import {useAntd} from "./antd"
import App from './App.vue'

const app = createApp(App) // 传进来的是组件


app.use(router)
app.use(store)
useAntd(app)
app.mount('#app')
