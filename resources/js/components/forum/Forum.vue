<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="7"
      >
      <question
      v-for="question in questions"
      :key="question.path"
      :data=question
      ></question>
      </v-col>
      <v-col
        cols="6"
        md="5"
      >

          <app-sidebar></app-sidebar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import question from './question'
import AppSidebar from './AppSidebar'
export default {
    data(){
        return{
            questions:{}
        }
    },

    components:{
        question,
        AppSidebar
    },
    created(){
        axios.get('/api/question')
        .then(res => this.questions = res.data.data)
        .catch(error => console.log(error.response.data))
    }
}
</script>


<style>

</style>
