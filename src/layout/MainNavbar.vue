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

              <li v-if="user == null" class="md-list-item" @click="getClassicModal()">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button class="md-success">
                      Đăng Nhập
                    </md-button>
                  </div>
                </a>
              </li>
              <li v-else class="md-list-item">
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
                        <img class="img-profile" src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-1/c2.0.785.785a/64345967_869088223442340_4595245085481762816_n.jpg?_nc_cat=111&_nc_oc=AQllk6GAFu8ALSVI8WIT1hQOJ__pK4-1BzgRHrWny2OdtgwxSJmMu-KVuoEEbt4lSpQ&_nc_ht=scontent.fsgn3-1.fna&oh=4bd0d6953574b15851aaca41f0afbce9&oe=5D78A4B4" alt="Circle Image" />
                      </div>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li class="">
                          <router-link :to="{name: 'addClassified', params:{idUser: user._id}}" class="dropdown-item ">Đăng Bài</router-link>
                        </li>
                        <li class="profile-choose">
                          <router-link :to="{name: 'profile', params:{id: user._id}}" class="dropdown-item ">Trang Cá Nhân</router-link>
                        </li>
                        <li class="">
                          <a href="#" class="dropdown-item" @click="logout">Đăng xuất</a>
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
      exitsToken : localStorage.getItem('token') || null,
      user: ''
    };
  },
  created(){
    try {
        if(!localStorage.getItem('token')){
            // this.$router.push({name: 'home'})
            this.user = null;
        } else {
            this.user = jwt_decode(this.exitsToken).data;
            this.fetchUser(this.user._id)
            for(let index in selectAddress){
                this.provinces.push(selectAddress[index].name);
            } 
        }
    } catch (error) {
        this.user = null;
    }
  },
  components: {
    login : Login,
  },
  methods:{
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

.md-toolbar .profile-photo-small{
  width: 100%;
  height: 100%;
}

.img-profile{
  border: 1px solid grey;
  width: 50px;
  height: 50px;
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

.md-list-item{
  padding: 4px;
}

.md-list-item .md-list-item-content:not(.md-ripple){
  margin: 5px;
}

ul.dropdown-menu.dropdown-menu-right.show {
    display: block;
}

ul.dropdown-menu.dropdown-menu-right {
    display: none;
}
@media (min-width: 1200px){
.md-toolbar-row, .section .container, .footer .container {
    max-width: 100%;
}}
</style>
