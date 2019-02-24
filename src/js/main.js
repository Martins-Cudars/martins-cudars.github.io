import '../scss/main.scss';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.prototype.$http = axios


import FrontPage from './components/FrontPage'


var vm = new Vue({

  el: "#app",
  components: {
    FrontPage,
  }

})
