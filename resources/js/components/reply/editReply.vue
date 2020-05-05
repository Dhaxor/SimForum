<template>
   <div>
 <vue-simplemde v-model="reply.reply" ref="markdownEditor" />
     <v-card-actions>
            <v-btn color="orange" @click="update">
                   save
            </v-btn>
            <v-btn color="red" @click="cancel">
                 cancel
            </v-btn>
        </v-card-actions>
   </div>

</template>

<script>
export default {
   props:['reply'],

   methods:{
       cancel(){
          EventBus.$emit('cancelEditing')
       },
       update(){
           axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`,{body:this.reply.reply})
            .then(res => this.cancel())
       }
   }

}
</script>

<style>

</style>
