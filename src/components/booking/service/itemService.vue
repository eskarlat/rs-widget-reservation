<template>
  <v-flex xs12>
        <v-card :hover="true">
            <v-card-title primary-title>
                <div>
                    <p class="title" v-text="item.title"></p>
                    <span class="grey--text">Duration: {{ item.pivot.duration }} min</span><br>
                    <span class="grey--text">Cost: {{ item.pivot.cost }}</span><br>
                </div>
            </v-card-title>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    name: 'item-service',

    props: {
        item: {
            type: Object,
            required: true
        }
    },
}
</script>

<style>

</style>
