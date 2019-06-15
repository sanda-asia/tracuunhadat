import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";

import * as VueGoogleMaps from "vue2-google-maps";
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

import VueFacebook from 'vue-facebook';
import Editor from '@tinymce/tinymce-vue'
import vClickOutside from 'v-click-outside'
 
Vue.use(vClickOutside)
Vue.use(VueFacebook)
Vue.use(BootstrapVue);

Vue.use(Vuetify)


Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};


Vue.use(VueGoogleMaps, {
  load: {
    // key: "NHAP-API-KEY-O-DAY",
    libraries: "places"
  }
});


// Vue.component('editor', Editor);

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
