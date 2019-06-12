import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";

import * as VueGoogleMaps from "vue2-google-maps";
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import VueFacebook from 'vue-facebook';

Vue.use(VueFacebook)

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
