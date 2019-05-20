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
                    <li><a href="explore.html"><span class="navIcon icon-compass"></span><span class="navLabel">Explore</span></a></li>
                    <li><a href="single.html"><span class="navIcon icon-home"></span><span class="navLabel">Single</span></a></li>
                    <li><a href="add.html"><span class="navIcon icon-plus"></span><span class="navLabel">New</span></a></li>
                    <li class="hasSub">
                        <a href="#"><span class="navIcon icon-drop"></span><span class="navLabel">Colors</span><span class="fa fa-angle-left arrowRight"></span><span class="badge bg-yellow">5</span></a>
                        <ul class="colors">
                            <li><a href="#">Red <span class="fa fa-circle-o c-red icon-right"></span></a></li>
                            <li><a href="#">Green <span class="fa fa-circle-o c-green icon-right"></span></a></li>
                            <li><a href="#">Blue <span class="fa fa-circle-o c-blue icon-right"></span></a></li>
                            <li><a href="#">Yellow <span class="fa fa-circle-o c-yellow icon-right"></span></a></li>
                            <li><a href="#">Magenta <span class="fa fa-circle-o c-magenta icon-right"></span></a></li>
                        </ul>
                    </li>
                    <li class="hasSub">
                        <a href="#"><span class="navIcon icon-layers"></span><span class="navLabel">Elements</span><span class="fa fa-angle-left arrowRight"></span></a>
                        <ul>
                            <li><a href="buttons.html">Buttons</a></li>
                            <li><a href="icons.html">Icons <span class="badge pull-right bg-yellow">841</span></a></li>
                            <li><a href="grid.html">Grid</a></li>
                            <li><a href="widgets.html">Widgets</a></li>
                            <li><a href="components.html">Components</a></li>
                            <li><a href="lists.html">Lists</a></li>
                            <li><a href="tables.html">Tables</a></li>
                            <li><a href="form.html">Form</a></li>
                        </ul>
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
            <div class="leftUserWraper dropup">
                <a href="#" class="avatarAction dropdown-toggle" data-toggle="dropdown">
                    <img class="avatar" src="images/avatar-1.png" alt="avatar"><span class="counter">5</span>
                    <div class="userBottom pull-left">
                        <span class="bottomUserName">John Smith</span> <span class="fa fa-angle-up pull-right arrowUp"></span>
                    </div>
                    <div class="clearfix"></div>
                </a>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="#"><span class="icon-settings"></span>Settings</a></li>
                    <li><a href="profile.html"><span class="icon-user"></span>Profile</a></li>
                    <li><a href="#"><span class="icon-bell"></span>Notifications <span class="badge pull-right bg-red">5</span></a></li>
                    <li class="divider"></li>
                    <li><a href="#"><span class="icon-power"></span>Logout</a></li>
                </ul>
            </div>
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
