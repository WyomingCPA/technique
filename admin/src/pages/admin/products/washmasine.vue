<template>
  <div class="grid md:grid-cols-2 gap-6 mb-6">
    <va-input v-model="input" placeholder="Filter..." class="w-full" />

    <div class="flex flex-col gap-6">
      <va-checkbox v-model="isCustomFilteringFn" label="Use custom filtering function (looks for an exact match)" />
      <va-checkbox v-model="isDebounceInput" label="Debounce input" />
    </div>
  </div>

  <va-data-table :items="items" :columns="columns" :filter="filter" :filter-method="customFilteringFn"
    @filtered="filteredCount = $event.items.length" />

  <va-alert class="!mt-6" color="info" outline>
    Number of filtered items:
    <va-chip>{{ filteredCount }}</va-chip>
  </va-alert>
</template>
<script>
import axios from "axios";
import debounce from "lodash/debounce.js";

export default {
  name: "product-all",
  components: {},
  data() {
    
    const columns = [
      { key: "id", sortable: true },
      { key: "username", sortable: true },
      { key: "name", sortable: true },
      { key: "email", sortable: true },
      { key: "address.zipcode", label: "Zipcode" },
    ];
    return {
      items: Array,
      columns,
    };
  },
  methods: {
    filterExact(source) {
      if (this.filter === "") {
        return true;
      }
      return source?.toString?.() === this.filter;
    },

    updateFilter(filter) {
      this.filter = filter;
    },

    debouncedUpdateFilter: debounce(function (filter) {
      this.updateFilter(filter);
    }, 600),

    filterPrice: function (param) {
      this.filter = param;
    },
    setLearn(item, index, button) {
      this.loading = true;
      this.idProduct = item.id;
      console.log(item.id);
      let self = this;
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post("/api/product/set-learn", {
            id_product: self.idProduct,
          })
          .then((response) => {
            if (response.status) {
              console.log("Вызвали алерт");
              this.getWashProduct();
              this.loading = false;
            } else {
              console.log("Не работает");
              console.log(response.status);
              this.loading = false;
            }
          })
          .catch(function (error) {
            console.log(response);
            console.error(error);
            this.loading = false;
          });
      });
    },

    getWashProduct() {
      let self = this;
      axios
        .get("/api/product/washmashine")
        .then(function (response) {
          self.items = response.data.products;
          self.listPrice = response.data.price;
          console.log(response.data.groups);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    async handleSubmit() {
      let self = this;
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post("/api/group/set-subscriber", {
            count_subscriber: this.countSubscriber,
            id_group: self.idGroup,
          })
          .then((response) => {
            if (response.status) {
              console.log("Вызвали алерт");
              this.getGroups();
              this.$refs["my-modal"].hide();
            } else {
              console.log("Не работает");
              console.log(response.status);
            }
          })
          .catch(function (error) {
            console.log(response);
            console.error(error);
          });
      });
    },
  },
  mounted: function () {
    this.getWashProduct();
  },
};
</script>