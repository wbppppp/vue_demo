<template>
  <div class="container">
    <Search />
    <UsersMain />
  </div>
</template>

<script>
    import axios from 'axios'
    import Search from './components/Search'
    import Main from './components/Main'

    export default {
      components: {
        Search,
        UsersMain: Main
      },
      mounted(){
        const url = "https://api.github.com/search/repositories?q=v&sort=stars&order=desc";
        /*this.$http.get(url).then(
          res => {
            //响应成功
            const result = res.data.items[0];
            this.repoName = result.name;
            this.repoUrl = result.owner.html_url;

        },res => {
            //响应失败
            alert("响应失败")
        });*/

        axios.get(url).then(res => {
            //响应成功
            const result = res.data.items[0];
            this.repoName = result.name;
            this.repoUrl = result.owner.html_url;
          }
        ).catch(error => {
          alert("请求失败");
        })
      }

    }
</script>

<style>


</style>
