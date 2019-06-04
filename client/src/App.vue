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
