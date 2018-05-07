<template>
    <v-container fluid style="min-height: 0;" grid-list-lg>
        <h1 class="display-1 maplayoutTitle" v-text="pageTitle"></h1>
        <v-layout row wrap>
            <slot>
                <loading></loading>
            </slot>
        </v-layout>
    </v-container>
</template>

<script>
import Loading from '../../loading.vue';

export default {
    name: 'service-layout',

    props: {
        pageTitle: {
            type: String,
            required: true
        }
    },

    components: {
        Loading
    }
};
</script>

<style>

</style>
