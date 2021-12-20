<template>
  <section class="advert">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Объявление</h4>
            <form class="form-sample" @submit.prevent="create">
              <p class="card-description">
                <strong>Создание объявления</strong>
              </p>
              <div class="row">
                <div class="col-sm-10">
                  <b-form-group
                    horizontal
                    label="Название группы"
                    label-for="title-group"
                  >
                    <b-form-input
                      v-model="nameGroup"
                      type="text"
                      id="title-group"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="d-flex">
                <b-button type="submit" variant="success" class="mr-2"
                  >Создать</b-button
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: "group-create",
  components: {  },
  data() {
    return {
      nameGroup: "",
    };
  },
  methods: {
    async create() {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post("/api/group/store", {
            name_group: this.nameGroup,

          })
          .then((response) => {
            if (response.status) {
              this.$snotify.async(
                "Called with promise",
                "Success async",
                () =>
                  new Promise((resolve, reject) => {
                    setTimeout(
                      () =>
                        resolve({
                          title: "Success!!!",
                          test: reject,
                          body: "We got an example success!",
                          config: {
                            closeOnClick: true,
                          },
                        }),
                      2000
                    );
                  })
              );
              console.log("Вызвали алерт");
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
  mounted: function () {},
};
</script>