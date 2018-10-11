<template>
  <div class="todo-container">
    <div class="todo-wrap">

      <!--<TodoHeader @addItem="addItem"/>--> <!--TodoHeader标签绑定addItem事件监听-->
      <TodoHeader ref="header"/>
      <TodoList :todos="todos" />
      <todo-footer :todos="todos" :deleteCompleteTodo="deleteCompleteTodo" :selectAllTodos="selectAllTodos"/>

    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import TodoHeader from './commponents/TodoHeader'
  import TodoList from './commponents/TodoList'
  import TodoFooter from './commponents/TodoFooter'
    export default {
      components: {
        TodoHeader,
        TodoList,
        TodoFooter
      },
      mounted(){
        //TodoHeader标签绑定addItem事件
        this.$refs.header.$on('addItem',this.addItem);

        /*PubSub.subscribe('deleteItem',function(msg,index){
          //这里的this执行PubSub，不再是vm，所以使用箭头函数
          //使用箭头函数时，内部不再存在this，使用的是外部的this即mounted中的this
        })*/
        PubSub.subscribe('deleteItem',(msg,index) =>{
          this.deleteItem(index);
        })
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
