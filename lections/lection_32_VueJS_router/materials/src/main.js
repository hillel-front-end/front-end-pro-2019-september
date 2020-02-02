import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'

Vue.config.productionTip = false

// eslint-disable-next-line no-unused-vars
window.app3 = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
