<template>
  <div id="app">
    <NavBarApp></NavBarApp>
    <h1>Test Test</h1>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import NavbarApp from './components/NavbarApp'

export default {
  name: 'app',
  components: {
    NavBarApp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
