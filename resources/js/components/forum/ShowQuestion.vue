<template>
    <v-card>
        <v-container fluid>
        <v-card-title>
            <div>
            <div class="headline">
                {{data.title}}
            </div>
        <v-card-text class="grey--text">{{data.user}} said {{data.created_at}}</v-card-text>
            </div>

        <v-spacer></v-spacer>
        <v-btn color="teal dark" dark>{{data.reply_count}} replies</v-btn>
        </v-card-title>
    <v-card-text v-html="body"></v-card-text>
      <v-card-actions v-if="own">
          <v-btn icon small color="orange" @click="edit">
              <v-icon>mdi-pencil</v-icon>
          </v-btn>
           <v-btn icon small color="red" @click="destroy">
              <v-icon>mdi-delete</v-icon>
          </v-btn>
      </v-card-actions>
        </v-container>
    </v-card>
</template>

<script>
export default{
    props:['data'],
    data(){
        return{
            own: User.own(this.data.user_id)
        }

    },
    computed:{
        body(){
           return md.parse(this.data.body)
        }
    },
    methods:{
        destroy(){
            axios.delete(`/api/question/${this.data.slug}`)
            .then(res => this.$router.push('/forum'))
            .catch(error => console.log(error.response.data))
        },
        edit(){
            EventBus.$emit('startEditing')
        }
    }
}
</script>



<style>


</style>
