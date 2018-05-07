<template>
    <master-layout :pageTitle="pageTitle">
        <item-master @choseMaster="masterSelected" v-for="item in items" :key="item.id" :item="item"></item-master>
    </master-layout>
</template>

<script>
import MasterLayout from "./layout.vue";
import ItemMaster from "./itemMaster.vue";

export default {
  name: "master-page",

  components: {
    MasterLayout,
    ItemMaster
  },

  data() {
    return {
      pageTitle: "Select master",
      items: [],
      success: false,
      error: false,
      errors: {}
    };
  },

  created() {
    this.getMasters();
  },

  computed: {
    companyId() {
      return this.$route.query.company_id;
    },

    salonId() {
      return this.$route.query.salon_id;
    }
  },

  methods: {
    getMasters() {
      var app = this;
      this.axios
        .get("/masters", {
          params: {
            company_id: this.companyId,
            salon_id: this.salonId,
          }
        })
        .then(function(response) {
          console.log("Response from '/masters", response);
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

    masterSelected(item) {
      console.log("Selected master:", item.id);

      this.$router.push({
        name: "services",
        query: { company_id: this.companyId, salon_id: this.salonId, master_id: item.id }
      });
    }
  },

//   watch: {
//     companyId: function(newCompanyId, oldCompanyId) {
//       this.getSalons();
//     }
//   }
};
</script>

<style>

</style>
