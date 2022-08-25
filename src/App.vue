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
