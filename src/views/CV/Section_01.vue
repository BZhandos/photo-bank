<template>
  <div class="s1-wrap">
    <div class="intro-box">
      <h1>Front-End Developer</h1>
      <p>{{text}}
        <span class="intro-box-typed-cursor">|</span>
      </p>
    </div>
    <div>
      <img src="@/assets/temp3.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section_01',
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
    this.runList()
  },
  methods: {
    toAbout () {
      this.$router.push('/about/')
    },
    setTimeoutPrint () {
      if (this.index < this.curText.length) {
        this.text += this.curText.charAt(this.index)
        this.index++
        setTimeout(this.setTimeoutPrint, 150)
      } else {
        setTimeout(this.setTimeoutDelete, 2000)
      }
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
.s1-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap-reverse;
  box-sizing: border-box;
}
.intro-box {
  background-color: #2D2D32;
  color: white;
  padding: 60px 32px;
  max-width: 500px;
  width: 85%;
  outline: 4px double #7dcfd8;
  outline-offset: 8px;
  animation: border-color 7s infinite;
  margin: 30px 0;
  & h1 {
    color: rgba(255, 255, 255, 0.71);
  }
  &-typed-cursor {
    animation: flash .7s infinite;
  }
}
@keyframes flash {
  0% { opacity: 0 }
  100% { opacity: 1}
}@keyframes border-color {
  0% { outline-color: white }
  33% { outline-color: #42b983 }
  66% { outline-color: #42b983 }
  100% { outline-color: white }
}
</style>
