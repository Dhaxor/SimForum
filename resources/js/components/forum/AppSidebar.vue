<template>
  <v-card>
    <v-toolbar
      color="blue"
    >

  <v-toolbar-title>Categories</v-toolbar-title>
    </v-toolbar>

     <v-list-item v-for="category in categories" :key="category.id">
         <v-list-item-content>
             <v-list-item-title>{{category.name}}</v-list-item-title>
         </v-list-item-content>
     </v-list-item>

  </v-card>
</template>


<script>
export default {
  data(){
      return{
          categories:{}
      }
  },
    created(){
        axios.get('/api/category')
        .then(res => this.categories = res.data.data)

    }

}
</script>

<style>

</style>
