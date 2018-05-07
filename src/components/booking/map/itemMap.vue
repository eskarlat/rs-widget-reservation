<template>
    <v-flex xs12>
        <v-card :hover="true">
            <v-card-media :src="image" height="200px">
            </v-card-media>
            <v-card-title primary-title @click="choseSalon">
                <div>
                    <p class="title" v-text="item.title"></p>
                    <span class="grey--text">#####</span><br>
                </div>
            </v-card-title>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    name: 'ItemMap',

    props: {
        item: {
            type: Object,
            required: true
        }
    },

    computed: {
        image() {
            return `https://maps.googleapis.com/maps/api/staticmap?center=${this.item.mapCoordinates}&key=AIzaSyDo0PToHB2DVocorA3YyXYEXgEFTor0hvQ&language=en&markers=color:red%7C${this.item.mapCoordinates}&scale=2&size=454x170&style=feature:all&zoom=14`;
        }
    },

    methods: {
        choseSalon() {
            this.$emit('choseSalon', this.item);
        }
    }
};
</script>

<style>

</style>
