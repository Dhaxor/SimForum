<template>
  <v-card class="mb-5"

    max-width="1000"
    outlined

   >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
            {{data.user}}
            {{data.created_at}}
            </div>
        <v-list-item-title class="headline mb-1">
            <router-link :to="data.path">
                {{data.title}}
            </router-link>


        </v-list-item-title>
        <v-list-item-subtitle>{{data.body}}</v-list-item-subtitle>
      </v-list-item-content>


    </v-list-item>

  </v-card>
</template>

<script>

export default{
  props:['data']
}
</script>

<style>
</style>
