<template>
  <v-flex xs12>
        <v-card :hover="true">
            <v-card-title primary-title @click="choseMaster">
                <v-layout>
                    <v-flex xs4 sm2 md1>
                        <v-avatar
                            :tile="false"
                            :size="90"
                            color="grey lighten-4"
                            >
                            <img :src="item.photo" alt="avatar">
                        </v-avatar>
                    </v-flex>
                    <v-flex xs4 sm2 md1>
                        <p class="title" v-text="item.name"></p>
                        <span class="grey--text" v-text="item.description"></span>
                    </v-flex>
                </v-layout>
            </v-card-title>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    name: 'item-master',

    props: {
        item: {
            type: Object,
            required: true
        }
    },

    methods: {
        choseMaster() {
            console.log('Master click');
            this.$emit('choseMaster', this.item);
        }
    }
}
</script>

<style>

</style>
