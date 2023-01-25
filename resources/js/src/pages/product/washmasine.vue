<template>
  <section class="tables">
    <div class="page-header">
      <h3 class="page-title">Продукты</h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="javascript:void(0);">Table</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Все группы</li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title"></h4>
                        <b-row>
              <div class="col-sm-7">
                <b-form-group
                  label="Filter"
                  label-for="filter-input"
                  label-cols-sm="3"
                  label-align-sm="right"
                  label-size="sm"
                  class="mb-0"
                >
                  <b-input-group size="sm">
                    <b-form-input
                      id="filter-input"
                      v-model="filter"
                      type="search"
                      placeholder="Type to Search"
                    ></b-form-input>

                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''"
                        >Clear</b-button
                      >
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </div>
            </b-row>
            <b-row>
              <div class="col-sm-12">
                <span v-for="(thing, index) in listPrice" :key="index"
                  ><a href="#" @click="filterPrice(index)">
                    {{ index }}({{ thing }})
                  </a></span
                >
              </div>
            </b-row>
            <b-table
              responsive
              :busy="loading"
              :items="items"
              :fields="fields"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :filter="filter"
              :filter-included-fields="filterOn"
              show-empty
              small
            >
              <template #table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>
              <template #cell(actions)="row">
                <b-button
                  size="sm"
                  @click="setLearn(row.item, row.index, $event.target)"
                  class="mr-1"
                >
                  Повторил
                </b-button>
              </template>
              <template v-slot:cell(thumbnail)="data">
                <a
                  :href="'https://www.techprom.ru' + data.item.link"
                  target="_blank"
                  ><img
                    :src="'https://www.techprom.ru' + data.value"
                    class="img-thumbnail rounded-0"
                /></a>
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
      filter: null,
      filterOn: [],
      listPrice: Array,
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
          key: "count_learn",
          label: "Количество повторений",
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
        { key: "actions", label: "Actions" },
      ],
    };
  },
  methods: {
    filterPrice: function (param) {
      this.filter=param;
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