<template>
    <md-toolbar class="nav-custom">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <h3 class="md-title">Primary Color</h3>
        </div>
        <div class="md-toolbar-section-end">
          <md-button
            class="md-just-icon md-simple md-white md-toolbar-toggle"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </md-button>

          <div class="md-collapse">
            <md-list>

              <md-list-item href="javascript:void(0)" @click="toHome">
                <md-icon>account_circle</md-icon>
                <p>Trang Chủ</p>
              </md-list-item>

              <md-list-item href="#">
                <md-icon>explore</md-icon>
                <p>Tin Đăng</p>
              </md-list-item>

              <md-list-item href="javascript:void(0)">
                <md-icon>settings</md-icon>
                <p>Dự Án</p>
              </md-list-item>

              <md-list-item href="javascript:void(0)">
                <md-icon>account_circle</md-icon>
                <p>Danh Bạ</p>
              </md-list-item>
              
              <md-list-item href="#/">
                <md-icon>explore</md-icon>
                <p>Nhận Định</p>
              </md-list-item>

              <md-list-item href="javascript:void(0)" @click="toLanding">
                <md-icon>settings</md-icon>
                <p>Settings</p>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </md-toolbar>
</template>

<script>
export default {
  data() {
    return {
      selectedEmployee: "",
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ]
    };
  },
  props: {
    image: {
      type: String,
      default: require("@/assets/img/bg.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    }
  },
  computed: {
    bgImage() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  methods:{
    toLanding(){
      this.$router.push('/landing');
    },
    toHome(){
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
.nav-custom {
  margin: 0;
  position: fixed;
  top:0;
  background-color: #2e5dad !important;
}
@media (min-width: 1200px){
.md-toolbar-row, .section .container, .footer .container {
    max-width: 100%;
}}
</style>
