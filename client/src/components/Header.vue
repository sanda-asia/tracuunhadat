
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
            <div class="headerUserWraper">
                <button class="btn btn-primary">
                <button class="modal-box-up " data-toggle="modal" data-target="#myModal2" style="padding:0;">
                Login
                </button>
                </button>
                <a href="#" class="userHandler dropdown-toggle" data-toggle="dropdown"><span class="icon-user"></span><span class="counter">5</span></a>
                <a href="#" class="headerUser dropdown-toggle" data-toggle="dropdown">
                    <img class="avatar headerAvatar pull-left" src="images/avatar-1.png" alt="avatar">
                    <div class="userTop pull-left">
                        <span class="headerUserName">John Smith</span> <span class="fa fa-angle-down"></span>
                    </div>
                    <div class="clearfix"></div>
                </a>
                <div class="dropdown-menu pull-right userMenu" role="menu">
                    <div class="mobAvatar">
                        <img class="avatar mobAvatarImg" src="images/avatar-1.png" alt="avatar">
                        <div class="mobAvatarName">John Smith</div>
                    </div>
                    <ul>
                        <li><a href="#"><span class="icon-settings"></span>Settings</a></li>
                        <li><a href="profile.html"><span class="icon-user"></span>Profile</a></li>
                        <li><a href="#"><span class="icon-bell"></span>Notifications <span class="badge pull-right bg-red">5</span></a></li>
                        <li class="divider"></li>
                        <li><a href="#"><span class="icon-power"></span>Logout</a></li>
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

export default {
    name: 'headerSide',
}
</script>

<style>

</style>

