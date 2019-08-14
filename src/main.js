import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faCoffee, faSpinner, faWrench, faAmbulance, faEdit, faCircle, faCheck, faChessQueen,
    faPlus, faEquals, faArrowRight, faPencilAlt, faComment, faHeadphones, faSquare,
    faCalendar, faCertificate, faEnvelope, faTimes, faBookmark, faHeart, faPlay,
    faSun, faMoon, faStar
} from '@fortawesome/free-solid-svg-icons';
import { faJs, faVuejs, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'


import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import router from './router/router'

library.add(
  faCoffee, faSpinner, faWrench, faAmbulance, faSquare,
  faEdit, faCircle, faCheck, faChessQueen, faHeadphones,
  faPlus, faEquals, faArrowRight, faPencilAlt, faComment,
  faCalendar, faCertificate, faEnvelope, faTimes, faBookmark,
  faHeart, faPlay, faSun, faMoon, faStar,
  faJs, faVuejs, faFacebookF
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')