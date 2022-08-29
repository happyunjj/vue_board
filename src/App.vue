<template>
  <div id = "app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>


<script>
import Home from '@/components/Home.vue'
import Header from '@/components/common/Header';

export default {
  name: 'App',
  components: {
    Header,
    Home
  },
    created(){
    this.$axios.get(this.$serverUrl+"/board/bookmark").then((res)=>{
        res.data.forEach((e)=>this.$store.commit('setBookmark',e));
      })
      .catch(error => {
        let errorStatus = error.response.status;
        alert(errorStatus+' : 오류가 발생했습니다 !!');
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
