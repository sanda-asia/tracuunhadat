<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div id="content">
        <router-view />
      </div>
      <!-- <router-view name="footer" /> -->
    </div>
  </div>
</template>
