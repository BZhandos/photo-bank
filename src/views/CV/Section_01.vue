<template>
  <div class="section-box s1-wrap" id="section1">
    <div class="s1-wrap-hours">
      <p class="s1-wrap-hours-quote">
        The principle holds that <span>10,000</span> hours of "deliberate practice" are needed to become world-class in any field.
      </p>
      <p class="s1-wrap-hours-mine">And I had
        <span>
           <animated-number :value="hours" :formatValue="formatToHours" :duration="duration"/>
        </span>
        hours.
      </p>

    </div>
    <div class="s1-wrap-slider">
      <div class="s1-wrap-slider-intro">
        <h1>Front-End Developer</h1>
        <p>{{text}}<span class="section-wrap-intro-typed-cursor">|</span>
        </p>
      </div>
      <div class="s1-wrap-slider-img">
        <img src="https://sun9-48.userapi.com/c840324/v840324828/29098/P5RdRXDwI0Q.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
import { differenceInCalendarDays } from 'date-fns'
import AnimatedNumber from "animated-number-vue"

export default {
  name: 'Section_01',
  components: {
    AnimatedNumber
  },
  data: () => ({
    hours: 0,
    calls: [
      'Hello World',
      'My name is Zhandos',
      'Freelance Front-End Developer',
      'Vue.js lover  ❤'
    ],
    call: ' ',
    text: '',
    curText: '',
    currentTextIndex: 0,
    index: 0,
    duration: 3000
  }),
  watch: {
    number (newValue) {
    }
  },
  created () {
    this.runList()
    // Average amount of daily programming hours is 4.5(day offs not considered)
    this.hours = differenceInCalendarDays(new Date(), new Date(2017, 7, 1, 0, 0)) / 7 * 5 * 4.5
  },
  computed: {
    wayToNinja () {
      return this.tweenedNumber.toFixed(0)
    }
  },
  methods: {
    formatToHours (value) {
      return Number(value).toFixed(0)
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
  flex-direction: column;
  justify-content: center;
  &-hours {
    margin-bottom: 5%;
    &-quote {
      font-size: 16px;
      & span {
        font-size: 16px;
        font-weight: bold;
      }
    }
    &-mine {
      font-size: 16px;
      color: #FAC921;
      & span {
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
  &-slider {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    &-intro {
      background-color: #2D2D32;
      color: white;
      padding: 60px 32px;
      max-width: 500px;
      width: 85%;
      outline: 4px double #7dcfd8;
      outline-offset: 8px;
      animation: border-color 7s infinite;
      margin: 18px 8px;
      & h1 {
        color: rgba(255, 255, 255, 0.71);
      }
      &-typed-cursor {
        padding-left: 3px;
        color: #0b0c16;
        animation: flash .6s infinite;
      }
    }
    &-img {
      max-width: 600px;
      & img {
        width: 95%;
      }
    }
  }
}
@keyframes flash {
  0% { opacity: 0 }
  100% { opacity: 1}
}
@keyframes border-color {
  0% { outline-color: white }
  33% { outline-color: #42b983 }
  66% { outline-color: #42b983 }
  100% { outline-color: white }
}

</style>
