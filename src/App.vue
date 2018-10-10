<template>
  <div class="todo-container">
    <div class="todo-wrap">

      <TodoHeader :addItem="addItem"/>
      <TodoList :todos="todos" :deleteItem="deleteItem"/>
      <todo-footer :todos="todos" :deleteCompleteTodo="deleteCompleteTodo" :selectAllTodos="selectAllTodos"/>

    </div>
  </div>
</template>

<script>
  import TodoHeader from './commponents/TodoHeader'
  import TodoList from './commponents/TodoList'
  import TodoFooter from './commponents/TodoFooter'
    export default {
      components: {
        TodoHeader,
        TodoList,
        TodoFooter
      },
      data(){
        return {
          todos:[
            {title: '吃饭', complete: false},
            {title: '睡觉', complete: true},
            {title: '撸代码', complete: false}
          ]
        }
      },
      methods:{
        deleteItem(index){
          this.todos.splice(index,1);
        },
        addItem(item){
          this.todos.unshift(item);
        },
        //删除选中的任务
        deleteCompleteTodo(){
          this.todos = this.todos.filter(todo => !todo.complete);
        },
        //全选/全不选
        selectAllTodos(isAll){
          this.todos.forEach(todo => todo.complete = isAll);
        }
      }
    }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
