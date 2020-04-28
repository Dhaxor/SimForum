<template>
    <v-form @submit.prevent="login">
    <v-container>
      <v-row>
       <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="form.email"
            label="E-mail"
            type="email"
            required
          ></v-text-field>

    <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="form.password"
            type="password"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        </v-col>
      </v-row>
       <v-btn
        color="warning"
        type="submit"
      >
        Login
      </v-btn>
      <router-link to="/signup">
          <v-btn
        color="warning"
        type="submit"

          >Sign Up</v-btn>
        </router-link>
    </v-container>
  </v-form>
</template>

<script>
export default {
   data(){
       return{
           form:{
               email:null,
               password:null
           }
       }
   },
   created(){
       if (User.loggedIn()) {
           this.$router.push({name:'forum'})
       }
   },
   methods:{
       login(){
           User.login(this.form)

       }
   }
}
</script>

<style>

</style>
