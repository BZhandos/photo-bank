<template>
  <div id="app">
    <back-button v-if="$route.path !== '/'" />
    <!--    TODO transition-->
    <router-view/>
    <!--    TODO transition-->
  </div>
</template>
<script>
import BackButton from './components/UI/BackButton'
import HeaderBlock from './components/UI/Header'

export default {
  components: {
    BackButton,
    HeaderBlock
  },
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>
<style lang="scss">
  @import "~@/assets/styles/styles";
  html,
  body {
    height: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $backgroundBlack;
  height: 100%;
}

  * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    list-style-type: none;
    box-sizing: border-box;
    font-family: $defaultFont;
    &:focus {
      outline: none;
    }
  }

</style>
