<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
    import Pubsub from 'pubsub-js'
    export default {
      data(){
        return {
          searchName: ''
        }
      },
      methods:{
        search: function (searchName) {
          const name = this.searchName.trim();
          if (name) {
            Pubsub.publish('search', name)
          }

        }
      }
    }
</script>

<style scoped>

</style>
