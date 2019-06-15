<template>
    <md-toolbar class="nav-custom">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <h3 class="md-title">
            <!-- Primary Color -->
            <img style="width:50px" src="https://static.reverland.com/images/logo-r-white.svg"/>
          </h3>
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

              <md-list-item href="javascript:void(0)" @click="toClassified">
                <md-icon>explore</md-icon>
                <p>Tin Đăng</p>
              </md-list-item>

              <md-list-item href="javascript:void(0)" @click="">
                <md-icon>settings</md-icon>
                <p>Dự Án</p>
              </md-list-item>

              <md-list-item href="javascript:void(0)" @click="">
                <md-icon>account_circle</md-icon>
                <p>Danh Bạ</p>
              </md-list-item>
              
              <md-list-item href="javascript:void(0)" @click="toBlog">
                <md-icon>explore</md-icon>
                <p>Nhận Định</p>
              </md-list-item>

              <md-list-item href="javascript:void(0)" @click="getClassicModal()">
                <md-button
                class="md-success md-md"
                ><md-icon>library_books</md-icon>Đăng nhập</md-button
              >
              </md-list-item>
              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down" class="profile-photo">
                      <div
                        class="profile-photo-small"
                        slot="title"
                        data-toggle="dropdown"
                      >
                        <img class="img-profile" :src="img" alt="Circle Image" />
                      </div>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li class="profile-choose">
                          <a href="#pablo" class="dropdown-item ">Cài đặt</a>
                        </li>
                        <li class="profile-choose">
                          <a href="#pablo" class="dropdown-item "
                            >Trang cá nhân</a
                          >
                        </li>
                        <li class="profile-choose">
                          <a href="#pablo" class="dropdown-item "
                            >Thông báo</a
                          >
                        </li>
                        <li class="profile-choose">
                          <a href="#pablo" class="dropdown-item "
                            >Đăng xuất</a
                          >
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
            </md-list>
          </div>
        </div>
      </div>
    </md-toolbar>
</template>

<script>
import jwt_decode from 'jwt-decode';
import axios from 'axios'
import Login from './../views/Login'
import profile_img from './../assets/img/profile_default_image.jpg'

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
      ],
      exitsToken : localStorage.getItem('token') || null,
      user: '',
      userT: '',
      notifications: [
        'Mike, John responded to your email',
        'You have 5 new tasks',
        'You\'re now a friend with Andrew',
        'Another Notification',
        'Another One'
      ],
    };
  },
  created(){
        const userToken = jwt_decode(this.exitsToken);
        const userId = userToken.data._id;
        this.fetchUser(userId)
  },
  components: {
    login : Login,
  },
  props: {
    image: {
      type: String,
      default: require("@/assets/img/bg.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/profile_default_image.jpg")
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
      this.$router.push('/');
    },
    toLogin(){
      this.$router.push('/login');
    },
    toClassified(){
      this.$router.push('/rao-vat');
    },
    
    toProject(){
      this.$router.push('/du-an');
    },
    
    toBlog(){
      this.$router.push('/nhan-dinh');
    },
    
    toAgent(){
      this.$router.push('/danh-ba');
    },
    getClassicModal(){
      this.$emit('changeClassicModel',true);
    },
    logout(){
            localStorage.removeItem('token');
            this.$router.go();
    },
    fetchUser(userId){
        return axios({
            method: 'get',
            url: `http://localhost:3000/user/${userId}`,
        })
            .then((response) => {
                this.user = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    }
  }
};
</script>

<style scoped>
.img-profile{
  border: 1px solid grey;
}
a.dropdown-item {
    font-size: 16px !important;
    margin-left: 0px !important;
}
.nav-custom {
  margin: 0;
  position: fixed;
  top:0;
  height: 10vh;
  background-color: #2e5dad !important;
}

.md-list-item-content .md-ripple{
  padding: 0;
}
@media (min-width: 1200px){
.md-toolbar-row, .section .container, .footer .container {
    max-width: 100%;
}}
</style>
