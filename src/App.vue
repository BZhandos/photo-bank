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
<style lang="scss">
  @import "~@/assets/styles/styles";
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    color: $fontColor;
    background-color: $backgroundDark;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
.no-overflow {
  overflow: hidden;
}
</style>
