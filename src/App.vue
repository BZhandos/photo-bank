<template>
  <div id="app">
    <div class="welcomer" v-if="showWelcomer" @click="closeWelcomBox">
      <div  class="welcomer-wrap">
        <div  class="welcomer-box">
          <div class="welcomer-close">
            <svg
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.92899 7.07107C8.31952 6.68054 8.95268 6.68054 9.34321 7.07107L22.0711 19.799C22.4617 20.1895 22.4617 20.8227 22.0711 21.2132C21.6806 21.6037 21.0474 21.6037 20.6569 21.2132L7.92899 8.48528C7.53847 8.09476 7.53847 7.46159 7.92899 7.07107Z"
                fill="#9CA7B8"
              />
              <path
                d="M7.92899 21.2132C7.53847 20.8227 7.53847 20.1895 7.92899 19.799L20.6569 7.07107C21.0474 6.68054 21.6806 6.68054 22.0711 7.07107C22.4617 7.46159 22.4617 8.09476 22.0711 8.48528L9.34321 21.2132C8.95268 21.6037 8.31952 21.6037 7.92899 21.2132Z"
                fill="#9CA7B8"
              />
            </svg>
          </div>
          <p class="title c">Welcome friend!</p>
          <p class="subtitle">
            Enjoy my CV-site from scratch on <b>Vue.js(2)</b>, CI/CD on <b>AWS Amplify</b>, hosting on  <b>AWS Route 53</b>.
          </p>
          <p class="subtitle">
            <b>NO</b> shopify or wordpress, everything is <i>selfmade</i>.
          </p>
          <p class="title c">
            Feel free to contact me!
          </p>
          <div class="welcomer-rick">
            <img src="@/assets/images/ram.png"/>
          </div>
        </div>
      </div>
    </div>
    <!--    TODO transition-->
    <router-view/>
    <!--    TODO transition-->
  </div>
</template>
<script>

export default {
  data: () => ({
    showWelcomer: false
  }),
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    closeWelcomBox () {
      this.showWelcomer = false
      document.body.classList.remove("no-overflow")
    }
  },
  created () {
    this.showWelcomer = true
    document.body.classList.add("no-overflow")
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

.welcomer {
    position: fixed;
    color: black;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.05);
    z-index: 101;
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    &-wrap {
      transform-style: preserve-3d;
    }
    &-box {
      transform: translateZ(20px);
      background-color: #fff;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      border-radius: 2px;
      max-width: 500px;
      padding: 15px 35px;
      cursor: pointer;
      align-items: center;
      margin: 0 10px;
    }
    &-close {
      position: absolute;
      top: 14px;
      right: 14px;
      &:hover {
        svg {
          path {
            transition: .3s;
            fill: darkred;
          }
        }
      }
    }
    &-rick {
      position: relative;
      & img {
        max-width: 150px;
        position: absolute;
        bottom: -100px;
        right: -60px;
      }
      @media (max-width: 600px) {
        display: none;
      }
    }
}
</style>
