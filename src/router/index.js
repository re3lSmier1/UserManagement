import Vue from 'vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css'
import Home from '../views/Home.vue'
import AddOrEditRole from "../views/AddOrEditRole";



// loads the Icon plugin
UIkit.use(Icons);
Vue.use(VueRouter)
Vue.use(require('vue-moment'));
Vue.use(VeeValidate);


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/create', name: 'Create New Role', component: AddOrEditRole },
  { path: '/edit', name: 'Edit User', component: AddOrEditRole },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
