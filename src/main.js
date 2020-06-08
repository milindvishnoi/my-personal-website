import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
