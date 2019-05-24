<template>
    <div>
        <div id="leftSide">
            <nav class="leftNav scrollable">
                <div class="search">
                    <span class="searchIcon icon-magnifier"></span>
                    <input type="text" placeholder="Search for houses, apartments...">
                    <div class="clearfix"></div>
                </div>
                <ul class="text-align-left">
                    <li><a href="explore.html"><span class="navIcon icon-compass"></span><span class="navLabel">Top Projects</span></a></li>
                    <li><a href="single.html"><span class="navIcon fas fa-ad"></span><span class="navLabel">Classified Ads</span></a></li>
                    <li><a href="add.html"><span class="navIcon fab fa-blogger"></span><span class="navLabel">Blog</span></a></li>
                    <li class="hasSub">
                        <a href="#"><span class="navIcon fa fa-group"></span><span class="navLabel">Community</span><span class="badge bg-yellow"></span></a>

                    </li>
                    <li class="hasSub">
                        <a href="#"><span class="navIcon icon-earphones-alt"></span><span class="navLabel">Help</span></a>

                    </li>
                    <li class="hasSub">
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
                    </li>
                </ul>
            </nav>
        
        </div>
        <div class="closeLeftSide"></div>
    </div>

</template>

<script>
export default {
    name: 'LeftNav',

}
</script>

<style>

</style>
