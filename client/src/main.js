/* eslint-disable import/no-unresolved */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Resource from 'vue-resource';

Vue.config.productionTip = false;
// Import global Vue Components
import headerPage from './components/Layout/Header';
Vue.component('header-page', headerPage);

import Map from './components/Layout/Map';
Vue.component('map-place', Map);

import ContentHome from './components/Home/ContentHome';
Vue.component('content-home', ContentHome);

import MiniPoster from './components/Home/MiniPoster';
Vue.component('mini-poster', MiniPoster);

import ModalPopUp from './components/Home/ModalPopUp';
Vue.component('modal-pop-up', ModalPopUp);

import Pagination from './components/Layout/Pagination';
Vue.component('pagination', Pagination);

import leftNav from './components/Layout/Leftnav';
Vue.component('left-nav', leftNav);

import LoginModal from './components/LoginModal';
Vue.component('login-modal', LoginModal);

// import Blog from './components/Blog/Blog';
// Vue.component('blog', Blog);

import jQuery from 'jquery';
global.jQuery = jQuery;

Vue.use(Resource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
