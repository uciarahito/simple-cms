<template>
  <div id="app">
    <NavbarApp></NavbarApp>
    <FormArticleApp></FormArticleApp>
    <ContentApp></ContentApp>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import NavbarApp from './components/NavbarApp'
import ContentApp from './components/ContentApp'
import FormArticleApp from './components/FormArticleApp'

export default {
  name: 'app',
  components: {
    NavbarApp,
    ContentApp,
    FormArticleApp
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
}
</style>
