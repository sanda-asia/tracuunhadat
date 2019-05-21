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
import headerPage from './components/Header';
Vue.component('header-page', headerPage);

import Map from './components/Map';
Vue.component('map-place', Map);

import ContentHome from './components/ContentHome';
Vue.component('content-home', ContentHome);
import MiniPoster from './components/MiniPoster';
Vue.component('mini-poster', MiniPoster);

import leftNav from './components/Leftnav';
import jQuery from 'jquery';
global.jQuery = jQuery;
Vue.component('left-nav', leftNav);
Vue.use(Resource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
