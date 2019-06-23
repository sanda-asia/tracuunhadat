<template>
  <div class="wrapper">
    <div id="mapView">
        <google-map/>
    </div>
    <div id="contentHome">
        <content-home/>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import GoogleMap from "./components/GoogleMap";
import ContentHome from "./components/ContentHome"

export default {
  components: {
    LoginCard,
    GoogleMap,
    ContentHome
  },
  name: "index",
  bodyClass: "index-page",
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  },
  mounted() {
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}


.wrapper{
}
div#contentHome {
    height: 100%;
}
#mapView{
    width: 50%;
    position: absolute;
    left: 0;
    top: 0
}

#contentHome{
    width: 50%;
    position: absolute;
    right: 0;
    top: 0;
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
