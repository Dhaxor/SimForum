<template>

     <v-card


  >
    <v-toolbar>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>SimForum</v-toolbar-title>

      <v-spacer></v-spacer>

      <div>
        <v-btn flat>Forum</v-btn>
        <v-btn flat>Ask Question</v-btn>
        <v-btn flat>Category</v-btn>
        <router-link to="/login">
          <v-btn flat>Login</v-btn>
        </router-link>

        </div>
    </v-toolbar>
  </v-card>

</template>


<script>
export default {

}
</script>

<style>

</style>
