<template>
  <div>
    <p>{{msg}}</p>
  </div>

</template>

<script>
  //组件中，必须使用data函数来赋值
  export default {
    data () {
      return {
        msg: 'Hello Vue Component'
      }
    }
  }
</script>

<style>
  p{
    color: red;
    font-size: 40px;
  }
</style>
