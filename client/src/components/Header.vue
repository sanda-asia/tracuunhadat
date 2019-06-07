
<template>
    <div id="header">
            <div class="logo">
                <router-link :to="{ name: 'Home'}">
                    <span class="fa fa-home marker"></span>
                    <span class="logoText">Home</span>
                </router-link>
            </div>
            <a href="#" class="navHandler"><span class="fa fa-bars"></span></a>
            <div class="search">
                <span class="searchIcon icon-magnifier"></span>
                <input type="text" placeholder="Search for houses, apartments...">
            </div>
            <div class="headerUserWraper"  v-if="exitsToken == null">
                <button class="btn btn-primary mg10">
                    <button class="modal-box-up " data-toggle="modal" data-target="#myModal2" style="padding:0;">
                        Login
                    </button>
                </button>
            </div>
            <div class="headerUserWraper"  v-else>
                <a href="#" class="userHandler dropdown-toggle" data-toggle="dropdown"><span class="icon-user"></span><span class="counter">5</span></a>
                <a href="#" class="headerUser dropdown-toggle" data-toggle="dropdown">
                    <img class="avatar headerAvatar pull-left" src="https://img.homedy.com/store/images/2019/01/16/161485a60e92edccb483.jpg_170x170.jpg" alt="avatar">
                    <div class="userTop pull-left">
                        <span class="headerUserName">{{user.data.username}}</span> <span class="fa fa-angle-down"></span>
                    </div>
                    <div class="clearfix"></div>
                </a>
                <div class="dropdown-menu pull-right userMenu" role="menu">
                    <div class="mobAvatar">
                        <img class="avatar mobAvatarImg" src="https://img.homedy.com/store/images/2019/01/16/161485a60e92edccb483.jpg_170x170.jpg" alt="avatar">
                        <div class="mobAvatarName">{{user.data.username}}</div>
                    </div>
                    <ul>
                        <li><router-link :to="{name: 'AddClassified', params:{id: user.data._id}}"><span class="icon-plus"></span>Đăng tin</router-link></li>
                        <li><router-link :to="{name: 'User', params: {id : user.data._id} }"><span class="icon-user"></span>Trang Cá Nhân</router-link></li>
                        <li><a href="#"><span class="icon-bell"></span>Notifications <span class="badge pull-right bg-red">5</span></a></li>
                        <li class="divider"></li>
                        <li @click="logout()"><a href="#"><span class="icon-power"></span>Logout</a></li>
                    </ul>
                </div>
            </div>
            <a href="#" class="mapHandler"><span class="icon-map"></span></a>
            <div class="clearfix"></div>
            <login-and-register />
        </div>
        
</template>

<script>
import '../assets/stylesheets/font-awesome.css'
import '../assets/stylesheets/simple-line-icons.css'
import '../assets/stylesheets/jquery-ui.css'
import '../assets/stylesheets/datepicker.css'
import '../assets/stylesheets/bootstrap.css'
import '../assets/stylesheets/app.css'
import '../assets/stylesheets/main.css'
import '../assets/stylesheets/custom.css'
import '../assets/stylesheets/fileinput.min.css'
import '../assets/stylesheets/jquery.tagsinput.css'

// import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode';

export default {
    name: 'headerSide',
    data(){
        return{
            exitsToken : localStorage.getItem('token') || null,
            user: ''
        }
    }, 
    created(){
        if(this.exitsToken != null){
            this.user = jwt_decode(this.exitsToken);
        }else{
            this.user = ''
        }
    },
    mounted(){
        // this.$router.go(1);
    },
    methods:{
        logout(){
            localStorage.removeItem('token');
            this.$router.go();
        }
    }
}
</script>

<style>
.mg10{
    margin: 10px;
}
</style>

