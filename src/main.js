import { createApp } from 'vue'
import './style.css'
import BaseButton from '../src/components/ui/BaseButton.vue'
import BaseBurger from '../src/components/ui/BaseBurger.vue'
import App from './App.vue'

const app = createApp(App)
app.component('base-button', BaseButton)
app.component('base-burger', BaseBurger)
app.mount('#app')
