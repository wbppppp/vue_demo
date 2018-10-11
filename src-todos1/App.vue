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
          todos:JSON.parse(window.localStorage.getItem("todos_key") || '[]')
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
      },
      watch:{
        todos:{
          deep: true, //深度监视
          handler: function (newVal) {
            //将最新的todos转为json格式的字符串保存
            window.localStorage.setItem("todos_key",JSON.stringify(newVal));
          }
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
