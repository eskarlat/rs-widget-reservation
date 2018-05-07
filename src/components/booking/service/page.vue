<template>
    <service-layout :pageTitle="pageTitle">
        <item-service v-for="item in items" :key="item.id" :item="item"></item-service>
    </service-layout>
</template>

<script>
import ServiceLayout from "./layout.vue";
import ItemService from "./itemService.vue";

export default {
  name: "service-page",

  components: {
    ServiceLayout,
    ItemService
  },

  data() {
    return {
      pageTitle: "Select service",
      items: [
          {
              id:1,
              title: 'Man hearCut'
          }
      ],
      success: false,
      error: false,
      errors: {}
    };
  },

  created() {
    // this.getSalons();
  },

  computed: {
    // companyId() {
    //   return this.$route.query.company_id;
    // }
  },

  methods: {
    // getSalons() {
    //   var app = this;
    //   this.axios
    //     .get("/salon", {
    //       params: {
    //         company_id: this.companyId
    //       }
    //     })
    //     .then(function(response) {
    //       console.log("Response from '/salon", response);
    //       app.success = true;
    //       app.items = response.data.data;
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //       app.items = [];
    //       app.error = true;
    //       app.errors = error.response.data.errors;
    //     });
    // },

    // salonSelected(item) {
    //   console.log("Selected salon:", item.id);

    //   this.$route.push({
    //     name: "services",
    //     params: { salon: item.id },
    //     query: { company_id: companyId }
    //   });
    // }
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
