import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import lang from 'element-ui/lib/locale/lang/th'
import locale from 'element-ui/lib/locale'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'





locale.use(lang)
Vue.use(VueI18n)
Vue.use(ElementUI);
// Vue.use(BootstrapVue);
Vue.use(VueMaterial)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
