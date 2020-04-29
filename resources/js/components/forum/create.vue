<template>
    <v-form @submit.prevent="create">
    <v-container>
      <v-row>
       <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="form.title"
            label="Title"
            type="text"
            required
          ></v-text-field>
         <v-col
          cols="12"
          md="12"
         >
         <v-select
         :items="categories"
         v-model="form.category_id"
         item-text="name"
         item-value="id"
         label="Category"
         autocomplete
         ></v-select>
         </v-col>
         <vue-simplemde v-model="form.body" ref="markdownEditor" />

        </v-col>
      </v-row>
       <v-btn
        color="warning"
        type="submit"
      >
        Create
      </v-btn>

    </v-container>
  </v-form>
</template>
<script>
export default {
    data(){
        return{
            form:{
                title:null,
                category_id:null,
                body:null,
            },
            categories:{},
            errors:{}
        }
    },
    created(){
        axios.get('/api/category')
        .then(res=>this.categories = res.data.data)
    },
    methods:{
        create(){
            axios.post('/api/question',this.form)
            .then(res => this.$router.push(res.data.path))
            .catch(error=> this.errors = error.response.data.error)
        }
    }

}
</script>

<style>

</style>
