<template>
  <div class="section-box section-wrap" id="section1">
    <div class="section-wrap-intro">
      <h1>Front-End Developer</h1>
      <p>{{text}}
        <span class="section-wrap-intro-typed-cursor">|</span>
      </p>
    </div>
    <div  class="section-wrap-img">
      <img src="@/assets/temp3.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section_01',
  data: () => ({
    calls: [
      'Hello World!',
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


