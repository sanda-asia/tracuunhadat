<template>
    <div>
        <div id="leftSide">
            <nav class="leftNav scrollable">
                <div class="search">
                    <span class="searchIcon icon-magnifier"></span>
                    <input type="text" placeholder="Search for houses, apartments...">
                    <div class="clearfix"></div>
                </div>
                <ul v-if="role == false" class="text-align-left">
                    <!-- <li><a href="#"><span class="navIcon icon-compass"></span><span class="navLabel">Dự án</span></a></li> -->
                    <li><router-link :to="{ name: 'ClassifiedAdmin'}"><span class="navIcon fas fa-ad"></span><span class="navLabel">Tin đăng</span></router-link></li>
                    <li><router-link :to="{ name: 'BlogAdmin'}"><span class="navIcon fab fa-blogger"></span><span class="navLabel">Blog</span></router-link></li>
                    <li class="hasSub">
                        <a href="#"><span class="navIcon fa fa-group"></span><span class="navLabel">Người dùng</span><span class="badge bg-yellow"></span></a>
                    </li>
                    <li class="hasSub">
                        <a href="#"><span class="navIcon icon-earphones-alt"></span><span class="navLabel">Help</span></a>
                        <!-- <a href="#" class="modal-box-up" data-toggle="modal" data-target="#loginModal" style="padding:0;"></a> -->
                    </li>
                </ul>
                <ul v-else class="text-align-left">
                    <li><a href="#"><span class="navIcon icon-compass"></span><span class="navLabel">Top Projects</span></a></li>
                    <li><router-link :to="{ name: 'Classified'}"><span class="navIcon fas fa-ad"></span><span class="navLabel">Classified Ads</span></router-link></li>
                    <li><router-link :to="{ name: 'Blog'}"><span class="navIcon fab fa-blogger"></span><span class="navLabel">Blog</span></router-link></li>
                    <li class="hasSub">
                        <a href="#"><span class="navIcon fa fa-group"></span><span class="navLabel">Community</span><span class="badge bg-yellow"></span></a>

                    </li>
                    <li class="hasSub">
                        <a href="#"><span class="navIcon icon-earphones-alt"></span><span class="navLabel">Help</span></a>
                        <!-- <a href="#" class="modal-box-up" data-toggle="modal" data-target="#loginModal" style="padding:0;"></a> -->
                    </li>
                    <!-- <li class="hasSub">
                        <a href="#"><span class="navIcon icon-link"></span><span class="navLabel">Pages</span><span class="fa fa-angle-left arrowRight"></span></a>
                        <ul>
                            <li><a href="signin.html">Sign In</a></li>
                            <li><a href="signup.html">Sign Up</a></li>
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="index.html">Homepage Slideshow</a></li>
                            <li><a href="index-map.html">Homepage Map</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-post.html">Blog Post</a></li>
                        </ul>
                    </li> -->
                </ul>
            </nav>
        
        </div>
        <div class="closeLeftSide"></div>
    </div>

</template>

<script>
import jwt_decode from 'jwt-decode'

export default {
    name: 'LeftNav',
    data: () => {
        return {
            role: true, // true : guests and user
            exitsToken : localStorage.getItem('token') || null,
        }
    },
    created(){
        if(this.exitsToken != null){
            this.role = jwt_decode(this.exitsToken).data.role;
        }else{
            this.role = true
        }
    },


}
</script>

<style>
#leftSide {
    background-color: #213837;
    position: fixed;
    top: 60px;
    left: 0;
    width: 70px;
    z-index: 100;
    height: 100%;
}
</style>
