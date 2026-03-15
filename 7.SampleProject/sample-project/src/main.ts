import { createApp } from 'vue'
import './style.css'

// global import
import App from './App.vue'
import Component from './components/Component.vue'

const app = createApp(App)
app.component('my-component', Component)
app.mount('#app')
