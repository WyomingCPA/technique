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
              <template v-slot:cell(limit)="data">
                <span v-if="data.item.limit == null">No</span>
                <span v-else>{{ data.item.limit.count }}</span>
              </template>
              <template v-slot:cell(count_access_product)="data">
                <span v-if="data.item.limit == null">{{
                  data.item.count_access_product
                }}</span>
                <span v-else :class="{ 'badge badge-success': data.item.count_access_product >= data.item.limit.count, 'badge badge-danger': data.item.count_access_product < data.item.limit.count }">{{ data.item.count_access_product }}</span>
              </template>
              <template #cell(actions)="row">
                <b-button
                  size="sm"
                  @click="setBalance(row.item, row.index, $event.target)"
                  class="mr-1"
                >
                  Задать лимит
                </b-button>
              </template>
            </b-table>
            <!-- Info modal -->
            <b-modal
              ref="my-modal"
              :id="infoModal.id"
              :title="infoModal.title"
              @hide="resetInfoModal"
              @ok="handleOk"
            >
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                  label="Задать лимит"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                >
                  <b-form-input
                    id="name-input"
                    v-model="countLimit"
                    required
                  ></b-form-input>
                </b-form-group>
              </form>
            </b-modal>
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
      countLimit: 0,
      idCheck: "",
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
          key: "id",
          label: "id",
          sortable: true,
        },
        {
          key: "name",
          label: "Название",
          sortable: true,
        },
        {
          key: "count_access_product",
          label: "Кол-во доступного товара",
          sortable: true,
        },
        {
          key: "limit",
          label: "Кол-во минимального товара",
          sortable: true,
        },
        {
          key: "created_at",
          label: "Дата создания",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
        },
        { key: "actions", label: "Actions" },
      ],
    };
  },
  methods: {
    filterPrice: function (param) {
      this.filter = param;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    setBalance(item, index, button) {
      this.infoModal.title = item.name;
      this.idCheck = item.id;
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },

    getCategory() {
      let self = this;
      axios
        .get("/api/category/index")
        .then(function (response) {
          self.items = response.data.category;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async handleSubmit() {
      let self = this;
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post("/api/category/set-limit", {
            set_limit: this.countLimit,
            id_check: self.idCheck,
          })
          .then((response) => {
            if (response.status) {
              console.log("Вызвали алерт");
              this.getCategory();
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
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },

    myFilter: function (val) {
      if (arr.indexOf(val.name) === -1) {
        arr.push(val.name);
        return val.name;
      }
    },
  },
  mounted: function () {
    this.getCategory();
  },
  computed: {},
};
</script>