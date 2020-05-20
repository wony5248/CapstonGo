import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueApexCharts from 'vue-apexcharts'
import vuescroll from 'vuescroll';
import VueVideoPlayer from 'vue-video-player'
import VTooltip from 'v-tooltip'
import Vodal from 'vodal'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueMoment from 'vue-moment'

Vue.use(VueMoment);
Vue.component(Vodal.name, Vodal)
Vue.config.productionTip = false
import axios from 'axios'
import Vuetify from 'vuetify/lib'

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VTooltip)
Vue.component('apexchart', VueApexCharts)
Vue.component('vue-scroll', vuescroll)
Vue.use(VueVideoPlayer)
Vue.use(Vuetify, {
  iconfont:'mdi'
}, )

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
