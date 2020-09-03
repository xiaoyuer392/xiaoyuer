import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/reset.css'
import 'animate.css'
import './assets/wanxiang.css'
import './assets/border.styl'
import './assets/wanxiangdetail.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
