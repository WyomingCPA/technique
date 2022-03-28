<template>
  <section class="tables">
    <div class="page-header">
      <h3 class="page-title">Продукты</h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="javascript:void(0);">Table</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page"></li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title"></h4>
            <b-table
              responsive
              :busy="loading"
              :items="items"
              :fields="fields"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
            >
              <template #table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>
              <template v-slot:cell(thumbnail)="data">
                <a :href="'https://www.techprom.ru' + data.item.link" target="_blank"><img :src="'https://www.techprom.ru' + data.value" class='img-thumbnail rounded-0'></a>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: "product-all",
  components: {},
  data() {
    return {
      loading: false,
      sortBy: "count_learn",
      sortDesc: false,
      countSubscriber: 0,
      idGroup: "",
      idProduct: "",
      items: Array,
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
      fields: [
        {
          key: "thumbnail",
          label: "img",
          //formatter(value) {
          //  return `https://www.techprom.ru${value}`;
          //},
        },
        {
          key: "name",
          label: "Название",
          sortable: true,
        },
        {
          key: "price",
          label: "Цена",
          sortable: true,
        },
        {
          key: "updated_at",
          label: "Последнее обновление",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
        },
      ],
    };
  },
  methods: {
    getProduct() {
      let self = this;
      axios
        .get("/api/washmasine")
        .then(function (response) {
          self.items = response.data.products;
          console.log(response.data.groups);
        })
        .catch(function (error) {
          console.error(error);
        });
    },

  },
  mounted: function () {
    this.getProduct();
  },
};
</script>