import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css'


// loads the Icon plugin
UIkit.use(Icons);


Vue.use(VueRouter)
Vue.use(require('vue-moment'));


const routes = [
  { path: '/', name: 'Home', component: Home },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
