import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import VuePageTransition from 'vue-page-transition'
import vueFaqAccordionUmd from 'vue-faq-accordion'

Vue.use(VuePageTransition)
Vue.config.productionTip = false
Vue.use(VueToast)
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
