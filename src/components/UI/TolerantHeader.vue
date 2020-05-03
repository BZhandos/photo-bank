<template>
    <div class="header-wrap">
      <p class="header-wrap-const" @click="toAbout()">Contact me if u need</p>
      <transition name="slide-fade">
        <p v-show="show">{{call}}</p>
      </transition>
  <div>
    // todo hastag is empty - link is broken {{currentTextIndex}}
  </div>
      <div>
        {{text}}|
      </div>
    </div>
</template>

<script>
export default {
  name: 'TolerantHeader',
  data: () => ({
    calls: [
      'Vue app',
      'Responsive site',
      'ES6 coder',
      'Front-end developer',
      'Beautiful code'
    ],
    infinity: 0,
    call: ' ',
    show: true,
    text: '',
    curText: '',
    currentTextIndex: 0,
    index: 0
  }),
  created () {
    this.showHandler()
    this.runList()
  },
  methods: {
    toAbout () {
      this.$router.push('/about/')
    },
    showHandler () {
      this.show = true
      setTimeout(() => {
        this.call = this.calls[this.infinity]
        this.hideHandler()
      }, 3000)
    },
    hideHandler () {
      this.infinity = this.infinity === this.calls.length - 1 ? 0 : this.infinity + 1
      setTimeout(() => {
        this.show = false
      }, 2000)
      this.showHandler()
    },
    setTimeoutPrint () {
      if (this.index < this.curText.length) {
        this.text += this.curText.charAt(this.index)
        this.index++
        setTimeout(this.setTimeoutPrint, 300)
      } else this.setTimeoutDelete()
    },
    setTimeoutDelete () {
      if (this.index !== 0) {
        this.curText = this.curText.slice(0, -1)
        this.text = this.curText
        this.index--
        setTimeout(this.setTimeoutDelete, 50)
      } else {
        if (this.currentTextIndex < this.calls.length - 1) {
          this.currentTextIndex++
        } else this.currentTextIndex = 0
        this.runList()
      }
    },
    runList () {
      this.curText = this.calls[this.currentTextIndex]
      this.index = 0
      this.setTimeoutPrint()
    }
  }
}
</script>

<style scoped lang="scss">
.header-wrap {
  height: 150px;
  &-const {
    color: #ff1d5e;
    font-size: 16px;
    cursor: pointer;
  }
  & p {
    margin: 5px;
  }
}
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
