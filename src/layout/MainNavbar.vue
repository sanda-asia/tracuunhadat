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

              <md-list-item href="javascript:void(0)" @click="getClassicModal()" v-if="exitsToken == null">
                <md-button
                class="md-success md-md"
                ><md-icon>library_books</md-icon>Đăng nhập</md-button
              >
              </md-list-item>
              <li class="md-list-item" v-else>
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down" :class="profileClass" >
                      <div
                        class="profile-photo-small"
                        slot="title"
                        data-toggle="dropdown"
                        @click="toggleProfile()"
                      >
                        <img class="img-profile" :src="user.avatar"/>
                        <span class="user-name">{{user.username}}</span>
                      </div>
                      <ul class="dropdown-menu dropdown-menu-right" >
                        <li class="profile-choose">
                          <a href="#pablo" class="dropdown-item ">Cài đặt</a>
                        </li>
                        <li class="profile-choose">
                          <router-link :to="{name: 'User', params: {id : user._id} }">
                          <a href="#pablo" class="dropdown-item "
                            >Trang cá nhân</a
                          >
                          </router-link>
                        </li>
                        <li class="profile-choose">
                          <a href="#pablo" class="dropdown-item "
                            >Thông báo</a
                          >
                        </li>
                        <li class="profile-choose" @click="logout()">
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
      isActive: false,
      profileClass: 'profile-photo dropdown',
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
    toggleProfile(){
      if (this.profileClass=='profile-photo dropdown') {
        this.profileClass='profile-photo open dropdown show'
      }
      else if (this.profileClass=='profile-photo open dropdown show'){
        this.profileClass='profile-photo open dropdown show'
      }
    },
    closeDropdown(){
      this.isActive = false
      console.log('click out side')
    },
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
ul.dropdown-menu.dropdown-menu-right {
    display: none !important;
}
ul.dropdown-menu.dropdown-menu-right.show {
    display: block !important;
}
.hide {
  display: none;
}
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

.profile-photo-small {
    margin-top: 10px;
}
.md-toolbar .profile-photo-small{
  border-radius: 0px;
  width: 140px;
}
.img-profile{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
span.user-name {
    font-weight: bold;
    font-size: 14px;
    margin-left: 6px;
    text-transform: none;
}
@media (min-width: 1200px){
.md-toolbar-row, .section .container, .footer .container {
    max-width: 100%;
}}
</style>
