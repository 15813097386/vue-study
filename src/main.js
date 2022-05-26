import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.css'
import request from './comon/httpApi'
import '@/assets/css/index.css'
import {Lazyload}  from 'vant'
import {Toast} from 'vant'

Vue.config.productionTip = false

Vue.use(vant)
Vue.use(Lazyload)
Vue.use(Toast)
Vue.prototype.$request = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
