<template>
  <!--
    1.onmouseenter onmouseleave

    2.onmouseover onmouseout

  二者的区别：

          当有两个嵌套div，最外层div绑定这四个事件。

          鼠标进入最外层会触发onmouseenter和onmouseover，再经过内层div，会触发onmoouseout，

      不会触发onmouseleave，只有当完全退出最外层div才会触发onmouseleave

  -->
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteTodo">删除</button>
  </li>
</template>

<script>
  import PubSub from 'pubsub-js'
    export default {
      data(){
        return {
          bgColor: 'white',
          isShow: false
        }
      },
      props:{
        todo: Object,
        index: Number,
      },
      methods:{
        deleteTodo(){
          const {todo,index} = this;
          if (window.confirm('确认删除'+ todo.title + '吗？')){
            //this.deleteItem(index);
            PubSub.publish('deleteItem',index);
          }
        },
        handleEnter(isShow){
          this.isShow = !this.isShow;
          if (isShow){
            this.bgColor = '#aaaaaa';
          }else {
            this.bgColor = 'white';
          }
        }
      }
    }
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
