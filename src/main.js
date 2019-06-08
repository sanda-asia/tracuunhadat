/* eslint-disable import/no-unresolved */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

import Vue from 'vue';
import App from './App';
import router from './router';
import Resource from 'vue-resource';
import Vuetify from 'vuetify' 

Vue.use(Vuetify)

Vue.config.productionTip = false;

import headerPage from './components/Header';
Vue.component('header-page', headerPage);

import Map from './components/Map';
Vue.component('map-place', Map);

import ContentHome from './layouts/ContentHome';
Vue.component('content-home', ContentHome);

import MiniPoster from './layouts/MiniPoster';
Vue.component('mini-poster', MiniPoster);

import ModalPopUp from './layouts/ModalPopUp';
Vue.component('modal-pop-up', ModalPopUp);

import LoginAndRegister from './layouts/LoginAndRegister';
Vue.component('login-and-register', LoginAndRegister);

import Pagination from './components/Pagination';
Vue.component('pagination', Pagination);

import leftNav from './components/Leftnav';
Vue.component('left-nav', leftNav);

import LoginModal from './components/LoginModal';
Vue.component('login-modal', LoginModal);
Vue.use(Resource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
