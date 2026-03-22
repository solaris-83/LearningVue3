import { createApp } from 'vue'
import './style.css'

// global import
import App from './App.vue'
import ChildComponent from './components/ChildComponent.vue'

const app = createApp(App)
app.component('my-child-component', ChildComponent)
app.mount('#app')
