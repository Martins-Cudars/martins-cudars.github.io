import '../scss/main.scss';
import Vue from 'vue'
import FrontPage from './components/FrontPage'

var vm = new Vue({

  el: "#app",
  components: {
    FrontPage,
  }

})
