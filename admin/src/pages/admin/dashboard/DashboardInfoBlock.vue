<template>
  <div class="row row-equal">
    <div class="flex xl6 xs12 lg6">
      <div class="row">
        <div class="flex xs12 sm6 md6">
          <va-card>
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ total_all_product_count }}</h2>
              <p class="no-wrap">Всего продуктов в БД</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm6 md6">
          <va-card>
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ all_active_product_count }}</h2>
              <p class="no-wrap">В наличий</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm6 md6">
          <va-card>
            <va-card-content>
              <h2 class="va-h2 ma-0">{{all_favorite_product_count }}</h2>
              <p class="no-wrap">Избранные</p>
            </va-card-content>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import axios from "axios";

import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      total_all_product_count: { type: Number },
      all_active_product_count: { type: Number },
      all_favorite_product_count: { type: Number },
    }
  },
  methods: {
    fetchData() {
      let self = this;
      axios
        .get("/api/dashboard/index")
        .then(function (response) {
          self.total_all_product_count = response.data.total_all_product_count;
          self.all_active_product_count = response.data.all_active_product_count;
          self.all_favorite_product_count = response.data.all_favorite_product_count;

          console.log(response.data.all_active_product_count);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  created() {
    this.fetchData();
  },
})

  
</script>

<style lang="scss" scoped>
  .row-separated {
    .flex + .flex {
      border-left: 1px solid var(--va-background-primary);
    }
  }

  .rich-theme-card-text {
    line-height: 1.5;
  }

  .gallery-carousel {
    width: 80vw;
    max-width: 100%;

    @media all and (max-width: 576px) {
      width: 100%;
    }
  }
</style>
