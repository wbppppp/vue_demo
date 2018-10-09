<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add/>
      <List :comments="comments"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'
  export default {
    components: {List, Add},
    data() {
      return {
        comments:[
          {name:'Bob',content:'Vue1'},{name:'ZZ',content:'Vue2'},{name:'BB',content:'Vue3'}
        ]
      }
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }


</style>
