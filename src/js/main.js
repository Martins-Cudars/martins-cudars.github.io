import '../scss/main.scss';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.prototype.$http = axios


import FrontPage from './components/FrontPage'
import SiteFooter from './components/SiteFooter'

var vm = new Vue({

  el: "#app",
  components: {
    FrontPage,
    SiteFooter
  }

})
