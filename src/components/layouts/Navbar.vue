<template>
    <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="openMenu"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
</template>

<script>
import { Event } from "../../event";

export default {
  name: "nav-bar",

  methods: {
    openMenu() {
      //TODO: Create test for event
      Event.$emit("openNavigationMenu", true);
    }
  }
};
</script>

<style>

</style>
