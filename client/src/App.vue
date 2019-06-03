<template>
  <div id="app">
    <header-page/>
    <div class="row">
      <left-nav/>
      <router-view/>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  // mounted() {
  //   require('./../static/js/jquery-2.1.1.min.js');
  //   require('./../static/js/jquery-ui.min.js');
  //   require('./../static/js/jquery-ui-touch-punch.js');
  //   require('./../static/js/jquery.placeholder.js');
  //   require('./../static/js/bootstrap.js');
  //   require('./../static/js/jquery.touchSwipe.min.js');
  //   require('./../static/js/jquery.slimscroll.min.js');
  //   require('./../static/js/jquery.visible.js');
  //   require('./../static/js/infobox.js');
  //   require('./../static/js/jquery.tagsinput.min.js');
  //   require('./../static/js/bootstrap-datepicker.js');
  //   require('./../static/js/infobox.js');
  //   require('./../static/js/app.js');

  // },
};
</script>

<style>
#app {
  font-family: 'Roboto Slab', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
