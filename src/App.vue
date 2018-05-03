<template>
  <div id="app">
    <v-app>
      <nav-bar :menu="menus" :profile="user"></nav-bar>
      <Content></Content>
      <footer></footer>
    </v-app>
  </div>
</template>

<script>
import NavBar from './components/layouts/NavBar.vue';
import Footer from './components/layouts/Footer.vue';
import Content from "./components/Content.vue";

export default {
  name: "app",
  components: {
    Content,
    NavBar,
    Footer
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
