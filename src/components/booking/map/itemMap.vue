<template>
    <v-flex xs12>
        <v-card>
            <v-card-media src="https://maps.googleapis.com/maps/api/staticmap?center=42.665431,23.353091&key=AIzaSyDo0PToHB2DVocorA3YyXYEXgEFTor0hvQ&language=en&markers=color:red%7C42.665431,23.353091&scale=2&size=454x170&style=feature:all&zoom=14" height="200px">
            </v-card-media>
            <v-card-title primary-title>
                <div>
                    <p class="title">HeadHunters</p>
                    <span class="grey--text">ж.к. Дианабад</span><br>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn flat color="red">Select</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    name: 'ItemMap'
};
</script>

<style>

</style>
