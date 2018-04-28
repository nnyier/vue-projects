<template>
  <div id="app">
    <n-header></n-header>
    <router-view/>
  </div>
</template>

<script>
import NHeader from '../src/components/header'
export default {
  name: 'App',
  components: {
    NHeader
  }
}
</script>

<style>
@import '../src/common/css/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: auto;
  color: #2c3e50;
  background: #ededed;
}
</style>
