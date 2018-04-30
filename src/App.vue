<template>
  <div id="app">
    <v-app>
      <nav-menu></nav-menu>
      <nav-bar></nav-bar>
      <HelloWorld/>
      <footer></footer>
    </v-app>
  </div>
</template>

<script>
import NavBar from './components/layouts/Navbar.vue';
import NavMenu from './components/layouts/NavMenu.vue';
import Footer from './components/layouts/Footer.vue';
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    NavBar,
    NavMenu,
    Footer
  }
};
</script>

<style>

</style>
