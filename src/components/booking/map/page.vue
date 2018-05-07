<template>
    <map-layout :pageTitle="pageTitle">
        <item-map @choseSalon="salonSelected" v-for="item in items" :key="item.id" :item="item"></item-map>
    </map-layout>
</template>

<script>
import MapLayout from "./layout.vue";
import ItemMap from "./itemMap.vue";

export default {
  name: "map-page",

  components: {
    MapLayout,
    ItemMap
  },

  data() {
    return {
      pageTitle: "Select salon",
      items: [],
      success: false,
      error: false,
      errors: {}
    };
  },

  created() {
    this.getSalons();
  },

  computed: {
    companyId() {
      return this.$route.query.company_id;
    }
  },

  methods: {
    getSalons() {
      var app = this;
      this.axios
        .get("/salon", {
          params: {
            company_id: this.companyId
          }
        })
        .then(function(response) {
          console.log("Response from '/salon", response);
          app.success = true;
          app.items = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
          app.items = [];
          app.error = true;
          app.errors = error.response.data.errors;
        });
    },

    salonSelected(item) {
      console.log("Selected salon:", item.id);

      this.$router.push({
        name: "masters",
        query: { company_id: this.companyId, salon_id: item.id  }
      });
    }
  },

  watch: {
    companyId: function(newCompanyId, oldCompanyId) {
      this.getSalons();
    }
  }
};
</script>

<style>

</style>
