<template>
    <div>
        <v-btn icon color="red" @click="likeIt">
            <v-icon>mdi-heart</v-icon>{{count}}
        </v-btn>
    </div>
</template>

<script>
export default {
    props:['content'],
    data(){
        return {
            liked:this.content.liked,
            count:this.content.like_count
        }
    },

   methods:{
       likeIt(){
           if (User.loggedIn()) {
               this.liked ? this.decr() : this.incr()
               this.liked = !this.liked

           }

       },

        incr(){
            axios.post(`/api/likes/${this.content.id}`)
            .then(res => this.count ++)
           },
        decr(){
             axios.delete(`/api/likes/${this.content.id}`)
            .then(res => this.count --)

           }
   }
}
</script>

<style>

</style>
