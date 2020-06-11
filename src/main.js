import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTypedJs from 'vue-typed-js';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  icons: {
    iconfont: 'fa',
  },
  vuetify,
  render: h => h(App)
}).$mount('#app')
