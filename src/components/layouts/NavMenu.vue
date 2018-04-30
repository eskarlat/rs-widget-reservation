<template>
    <v-navigation-drawer fixed v-model="drawer" app>
        <v-list dense>
            <v-list-tile @click="0">
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="0">
                <v-list-tile-action>
                    <v-icon>contact_mail</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Contact</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { Event } from "../../event";

//TODO: Create test for data
var data = {
    drawer: null
}

//TODO: Create test for event
Event.$on('openNavigationMenu', () => {
    console.log('Event: open navigation');
    data.drawer = !data.drawer;
});

export default {
    name: 'nav-menu',
    data() {
        return data;
    }
};
</script>

<style>

</style>
