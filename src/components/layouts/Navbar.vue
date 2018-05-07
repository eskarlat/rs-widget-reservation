<template>
  <div>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon ref="toolbarmenu" @click.stop="openMenu"></v-toolbar-side-icon>
      <v-toolbar-title>Rocket Salon</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-show="isNotHome" icon @click="back">
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="profile.photo">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-text="profile.name"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in menu" :key="item.title" @click="0">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "app-nav-bar",

  props: {
    profile: {
      type: Object,
      required: true
    },

    menu: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      drawer: null
    };
  },

  methods: {
    openMenu() {
      console.log("Event: open navigation");
      this.drawer = !this.drawer;
    },

    back() {
      this.$router.back();
    }
  },

  computed: {
    isNotHome() {
      return this.$route.name != 'map'
    }
  }
};
</script>

<style>

</style>
