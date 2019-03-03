import '../scss/main.scss';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'

Vue.prototype.$http = axios

Vue.use(VueLazyload, {
  preLoad: 1.25,
  attempt: 1
})

import FrontPage from './components/FrontPage'
import SiteFooter from './components/SiteFooter'

var vm = new Vue({

  el: "#app",
  components: {
    FrontPage,
    SiteFooter
  }

})
