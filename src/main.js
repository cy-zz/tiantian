import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue.config.productionTip = true
// new VTTCue({
//     components:{
//         App
//     }
// }).$mount('#app')

createApp(App).use(store).use(router).mount('#app')
