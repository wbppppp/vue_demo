<template>
  <div class="todo-footer">
    <label>
      <!--<input type="checkbox" v-model="isAll"/>-->
      <slot name="checkAll"></slot>
    </label>
    <span>
        <!--<span>已完成{{completed}}</span> / 全部{{allTodos}}-->
        <slot name="count"></slot>
     </span>
    <!--<button class="btn btn-danger" v-show="completed !== 0" @click="deleteComplete">清除已完成任务</button>-->
    <slot name="clear"></slot>
  </div>
</template>

<script>
    export default {
      props: {
        todos: Array,
        selectAllTodos: Function,
        deleteCompleteTodo: Function
      },
      computed:{
        completed(){
          /*var completed = 0;
          this.todos.forEach(function(t){
            if (t.complete){
              completed = completed+1;
            }
          });
          return completed;*/
          return this.todos.reduce((total,todo) => total + (todo.complete ? 1 : 0),0);
        },
        allTodos(){
          return this.todos.length;
        },
        isAll:{
          set(val){ //val为当前checkbox的最新值
            this.todos.forEach(todo => todo.complete = val);
          },
          get() {
            //return this.todos.reduce((isAll,todo) => (isAll && todo.complete),true);
            return this.allTodos === 0 ? false : this.completed === this.allTodos;
          }
        }
      },
      methods:{
        deleteComplete(){
          this.deleteCompleteTodo();
        }
      }
    }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
