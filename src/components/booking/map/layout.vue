<template>
    <v-container fluid style="min-height: 0;" grid-list-lg>
        <h1 class="display-1 maplayoutTitle" v-text="pageTitle"></h1>
        <v-layout row wrap>
            <slot></slot>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'map-layout',

    props: {
        pageTitle: {
            type: String,
            required: true
        }
    }
};
</script>

<style>

</style>
