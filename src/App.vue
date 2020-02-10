<template>
  <div id="app">
    <back-button v-if="$route.path !== '/'" />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/tourism" v-if="auth" >Tourism</router-link>
      <router-link to="/about">Links to CV</router-link>
    </div>
    <!--    TODO transition-->
    <router-view/>
    <!--    TODO transition-->
  </div>
</template>
<script>
import BackButton from './components/UI/BackButton'
export default {
  components: {
    BackButton
  },
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>
<style>
  body {
    background-color: black;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
