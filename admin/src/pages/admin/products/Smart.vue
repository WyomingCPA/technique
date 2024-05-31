<template>
  <va-card>
    <va-card-content>
      <div class="row">
        <va-input v-model="input" placeholder="Filter..." class="w-full" />
      </div>
      <div class="row">
        <div class="flex flex-wrap gap-6 mb-6 pt-6">
          <span v-for="(thing, index) in listPrice" :key="index"><a href="#" @click="filterPrice(index)"> {{ index }}({{
          thing }}) </a></span>
        </div>
      </div>

      <div class="flex flex-wrap gap-6 mb-6">
        <VaSlider @change="sliderChange()" v-model="value" :step="1000" :min="5000" :max="100000"
          class="mb-6" range track-label-visible :track-label="processTrackLabel">
          <template #prepend>
            <VaCounter manual-input @change="sliderChange()" :step="1000" v-model="value[0]" :min="5000" :max="100000"/>
          </template>
          <template #append>
            <VaCounter manual-input @change="sliderChange()" :step="1000" v-model="value[1]" :min="5000" :max="100000"/>
          </template>
        </VaSlider>
      </div>
      <div class="row">
        <va-data-table :items="items" :columns="columns" :filter="filter" :filter-method="customFilteringFn"
          v-model:sort-by="sortBy" v-model:sorting-order="sortingOrder" @filtered="filteredCount = $event.items.length">
          <template #cell(actions)="{ rowData }">
            <va-button @click="setLearn(rowData.id)">Повторил</va-button>
          </template>
          <template #cell(isFavorite)="{ rowData }">
            <va-switch v-model="rowData.isFavorite" @click="setFavorite(rowData.id, rowData.isFavorite)" />
          </template>
        </va-data-table>
      </div>
      <va-alert class="!mt-6" color="info" outline>
        Number of filtered items:
        <va-chip>{{ filteredCount }}</va-chip>
      </va-alert>
    </va-card-content>
  </va-card>
</template>
<script>
import { array } from '@amcharts/amcharts5'
import axios from 'axios'
import debounce from 'lodash/debounce.js'
import { ref } from 'vue'
import qs from 'qs'

export default {
  name: 'ProductAll',
  components: {},
  data() {
    const options = ['samsung', 'realme', 'Xiaomi', 'Tecno', 'BQ']
    const singleSelect = ref('')
    const multiSelect = ref([])
    const items = []
    const input = ''
    const columns = [
      { key: 'price', sortable: true },
      { key: 'name', sortable: true },
      { key: 'count_learn', sortable: true, width: 20 },
      { key: 'actions', width: 80 },
      { key: 'isFavorite', width: 50, sortable: true },
    ]
    const sortingOrderOptions = [
      { text: 'asc', value: 'asc' },
      { text: 'desc', value: 'desc' },
      { text: 'no sorting', value: null },
    ]
    return {
      value: [5000, 80000],
      min: 5000,
      max: 100000,
      loading: false,
      options,
      singleSelect,
      multiSelect,
      items,
      columns,
      input,
      filter: input,
      isDebounceInput: false,
      isCustomFilteringFn: false,
      filteredCount: items.length,
      listPrice: Array,
      sortBy: 'isFavorite',
      sortingOrder: 'desc',
      sortingOrderOptions,
      serverParams: {
        priceMin: "",
        priceMax: "",
      },
    }
  },
  methods: {
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    sliderChange() {
      console.log(this.value);
      this.updateParams({ priceMin: this.value[0], priceMax: this.value[1] });
      this.getProduct();
    },
    processTrackLabel(value, order) {
      return order === 0 ? `min ${value} руб` : `max ${value} руб`;
    },
    filterExact(source) {
      if (this.filter === '') {
        return true
      }
      console.log(filter)
      return source?.toString?.() === this.filter
    },

    updateFilter(filter) {
      this.filter = filter
    },

    debouncedUpdateFilter: debounce(function (filter) {
      this.updateFilter(filter)
    }, 600),

    filterPrice: function (param) {
      this.filter = param
      this.input = param
    },

    setLearn(id) {
      this.loading = true
      this.idProduct = id
      console.log(id)
      let self = this
      axios.get('/sanctum/csrf-cookie').then((response) => {
        axios
          .post('/api/product/set-learn', {
            id_product: self.idProduct,
          })
          .then((response) => {
            if (response.status) {
              console.log('Вызвали алерт')
              this.getProduct();
              this.loading = false
            } else {
              console.log('Не работает')
              console.log(response.status)
              this.loading = false
            }
          })
          .catch(function (error) {
            console.log(response)
            console.error(error)
            this.loading = false
          })
      })
    },
    getProduct() {
      let self = this;
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .request({
            method: "post",
            url: "/api/product/smart",
            params: self.serverParams,
            paramsSerializer: (params) => {
              return qs.stringify(params);
            },
          })
          .then((response) => {
            self.items = response.data.products;
            self.listPrice = response.data.price;

            let price = [];
            Object.keys(self.listPrice).forEach(function (item, i, arr) {
              console.log(item);
              price.push(parseInt(item))
            });
            //self.value = [Math.min(...price), Math.max(...price)]
            self.min = Math.min(...price);
            self.max = Math.max(...price);

            console.log(self.value);
          })
          .catch((error) => {
            console.error(error)
          });
      });
    },

    setFavorite(id, isFavorite) {
      this.loading = true
      this.idProduct = id
      this.isFavor = isFavorite
      console.log(id)
      let self = this
      axios.get('/sanctum/csrf-cookie').then((response) => {
        axios
          .post('/api/product/set-favorite', {
            id_product: self.idProduct,
            is_favorite: self.isFavor,
          })
          .then((response) => {
            if (response.status) {
              console.log('Вызвали алерт')
              this.getProduct();
              this.loading = false
            } else {
              console.log('Не работает')
              console.log(response.status)
              this.loading = false
            }
          })
          .catch(function (error) {
            console.log(response)
            console.error(error)
            this.loading = false
          })
      })
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    async handleSubmit() {
      let self = this
      axios.get('/sanctum/csrf-cookie').then((response) => {
        axios
          .post('/api/group/set-subscriber', {
            count_subscriber: this.countSubscriber,
            id_group: self.idGroup,
          })
          .then((response) => {
            if (response.status) {
              console.log('Вызвали алерт')
              this.getGroups()
              this.$refs['my-modal'].hide()
            } else {
              console.log('Не работает')
              console.log(response.status)
            }
          })
          .catch(function (error) {
            console.log(response)
            console.error(error)
          })
      })
    },
    sortByOptions() {
      return this.columns.map(({ name, key, sortable }) => sortable && (name || key)).filter(Boolean)
    },
  },
  computed: {
    customFilteringFn() {
      return this.isCustomFilteringFn ? this.filterExact : undefined
    },
  },
  watch: {
    input(newValue) {
      if (this.isDebounceInput) {
        this.debouncedUpdateFilter(newValue)
      } else {
        this.updateFilter(newValue)
      }
    },
  },
  mounted: function () {
    this.updateParams({ priceMin: this.value[0], priceMax: this.value[1] });
    this.getProduct();
  },
}
</script>
<style lang="scss" scoped></style>
