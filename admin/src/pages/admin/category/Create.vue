<template>
    <va-card>
        <va-card-content>
            <va-form class="flex flex-col gap-6" ref="formRef">
                <div class="row">
                    <div class="flex md4 sm6 xs12">
                        <va-input v-model="idCategory" placeholder="ID Category" />
                    </div>
                    <div class="flex md4 sm6 xs12">
                        <va-input v-model="nameCategory" placeholder="Name Category" />
                    </div>
                </div>
                <va-button @click="store()"> Создать </va-button>
            </va-form>
        </va-card-content>
    </va-card>
</template>
<script>
import axios from 'axios'
import Editor from '@tinymce/tinymce-vue'

export default {
    name: 'group-create',
    components: {
        editor: Editor,
    },
    data() {
        return {
            loading: false,
            description: '',
            idCategory: 0,
            nameCategory: '',
        }
    },
    methods: {
        async store() {
            let self = this
            this.loading = true
            axios.get('/sanctum/csrf-cookie').then((response) => {
                axios
                    .post('/api/category/store', {
                        id: self.idCategory,
                        nameCategory: self.nameCategory,
                    })
                    .then((response) => {
                        if (response.status) {
                            this.$vaToast.init({ message: 'Категория создана', color: 'success' })
                            self.loading = false
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
    },
    mounted: function () {
        
    },
}
</script>