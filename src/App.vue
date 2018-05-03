<template>
  <div id="app">
    <v-app>
      <app-nav-bar :menu="menus" :profile="user"></app-nav-bar>
      <app-content></app-content>
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
import AppNavBar from './components/layouts/NavBar.vue';
import AppFooter from './components/layouts/Footer.vue';
import AppContent from "./components/Content.vue";

export default {
  name: "app",
  components: {
    AppNavBar,
    AppContent,
    AppFooter
  },

  data() {
    return {
      user: {
        name: 'John Leider',
        photo: 'https://randomuser.me/api/portraits/men/85.jpg'
      },

      menus: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    }
  }
};
</script>

<style>

</style>
