<template>
  <div id="app">
    <TopNav/>
    <tabBar/>
    <router-view/>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar.vue';
import TopNav from './components/TopNav/TopNav.vue'
export default {
  name: 'App',
  components:{
    TabBar,
    TopNav
  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
</style>
