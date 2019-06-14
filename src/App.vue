<template>
  <div id="material-kit">
    <div id="fb-root"></div>
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div class="clearfix"></div>
      <div id="content">
        <router-view />
      </div>
      <!-- <router-view name="footer" /> -->
    </div>
  </div>
</template>

<script>
export default {
  created: function() {
    window.fbAsyncInit = function() {
        FB.init({
          appId            : '****',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v3.1'
        });
    };

    (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
  }
}
</script>


<style>
#content{
    position: absolute;
    left: 0;
    right: 0;
    top: 10vh;
    height: 90vh;
}
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 0px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #D62929;
}

</style>
