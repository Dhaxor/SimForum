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
   methods:{
       login(){


           axios.post('/api/auth/login',this.form)
           .then(res=> console.log(res.data))
           .catch(err=>console.log(err.response.data))
       }
   }
}
</script>

<style>

</style>
