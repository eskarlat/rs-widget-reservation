<template>
  <map-layout>
      <item-map></item-map>
      <item-map></item-map>
      <item-map></item-map>
      <item-map></item-map>
      <item-map></item-map>
      <item-map></item-map>
  </map-layout>
</template>

<script>
import MapLayout from './layout.vue'
import ItemMap from './itemMap.vue'

export default {
    name: 'map-page',
    components: {
        MapLayout,
        ItemMap
    }
}
</script>

<style>

</style>
