<template>
  <v-content>
    <map-page>
      <item-map></item-map>
      <item-map></item-map>
      <item-map></item-map>
      <item-map></item-map>
      <item-map></item-map>
      <item-map></item-map>
    </map-page>
  </v-content>
</template>

<script>
import ItemMap from './booking/map/itemMap.vue';
import MapPage from './booking/map/index.vue';

export default {
  name: 'content',
  components: {
    ItemMap,
    MapPage
  }
};
</script>

<style>

</style>
