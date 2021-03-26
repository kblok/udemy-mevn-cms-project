import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css"
import store from './store';

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
