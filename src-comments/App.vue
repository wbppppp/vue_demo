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
      <!--将addComment方法传递给Add组件中-->
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'
  export default {
    components: {List, Add},
    data() { //数据在哪个组件中，更新数据的方法就应该在哪个组件中
      return {
        comments:[
          {name:'Bob',content:'Vue1'},{name:'ZZ',content:'Vue2'},{name:'BB',content:'Vue3'}
        ]
      }
    },
    methods:{
      addComment(comment){
        this.comments.unshift(comment);
      },
      deleteComment(index){
        this.comments.splice(index,1);
      }
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }


</style>
