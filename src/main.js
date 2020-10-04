import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

//Views
import Index from '@/views/Index'

createApp(App).use(router).mount('#app')