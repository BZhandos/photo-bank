<template>
  <div class="section-box" id="section1">
    <div class="quote-wrap">
      <p class="quote-wrap-text">
        The principle holds that <span>10,000</span> hours of "deliberate practice" are needed to become world-class in any field.
      </p>
      <p class="quote-wrap-number">And I had
        <span>
           <animated-number :value="hours" :formatValue="formatToHours" :duration="duration"/>
        </span>
        hours.
      </p>
    </div>

    <div class="s1-wrap">

      <div class="s1-wrap-r">
        <img src="@/assets/images/me.png"/>
        <h1>Front-End Developer</h1>
        <p>{{text}}<span class="s1-wrap-r-typing"> |</span>
        </p>
      </div>

      <div class="s1-wrap-l">
        <h1>about me</h1>
        <div class="s1-wrap-l-list">
          <p class="s1-wrap-l-list__item">25 years</p>
          <p class="s1-wrap-l-list__item">Dev </p>
          <p class="s1-wrap-l-list__item">Freelance</p>
        </div>
        Passioned web developer with in excess of {{expYears}} years (or {{expMonths}} months or   {{expDays}} days) extensive experience in frontline
        development and testing of web-based applications.
        My strong background includes front-end development using HTML5, CSS3, SAAS/SCSS, JavaScript, <b>Vue.js</b> and
        Bootstrap – in addition to knowledge of version control systems such as Git, and a thorough understanding of object-oriented
        programming and design patterns.
        In my previous roles, I have worked closely with internal Product & Marketing Teams, and external
        agencies when required, to deliver innovative features across all digital touchpoints, and produce concepts into fully-functional
        user-validated product.
      </div>
    </div>
  </div>
</template>

<script>
import { differenceInCalendarDays, differenceInMonths, differenceInYears } from 'date-fns'
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
      'Freelance Developer',
      'Vue.js lover  ❤'
    ],
    call: ' ',
    text: '',
    curText: '',
    currentTextIndex: 0,
    index: 0,
    duration: 3000,
    starterDay: new Date(2017, 7, 1, 0, 0)
  }),
  computed: {
    expDays () {
      return differenceInCalendarDays(new Date(), this.starterDay)
    },
    expMonths () {
      return differenceInMonths(new Date(), this.starterDay)
    },
    expYears () {
      return differenceInYears(new Date(), this.starterDay)
    }
  },
  created () {
    this.runList()
    // Average amount of daily programming hours is 4.5(day offs not considered)
    this.hours = differenceInCalendarDays(new Date(), new Date(2017, 7, 1, 0, 0)) / 7 * 5 * 4.5
    this.$gtag.pageview({
      page_path: '/home'
    })
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
.quote-wrap {
  padding-top: 20px;
  margin-bottom: 5%;
  font-size: 16px;
  &-text {
    & span {
      font-size: 16px;
      font-weight: bold;
    }
  }
  &-number {
    color: #FAC921;
    & span {
      font-size: 24px;
      font-weight: bold;
    }
  }
}

.s1-wrap {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  &-r {
    max-width: 450px;
    & img {
      width: 90%;
    }
    &-typing {
      padding-left: 3px;
      color: red;
      animation: flash .6s infinite;
    }
  }
  &-l {
    max-width: 555px;
    font-size: 15px;
    line-height: 1.73;
    letter-spacing: 0.5px;
    font-weight: 300;
    text-align: justify;
    color: #888888;
    & h1 {
      font-size: 63px;
      line-height: 1;
      color: white;
    }
    &-list {
      display: flex;
      &__item {
        font-size: 18px;
        font-weight: bold;
        color: #42B983;
        &:not(:last-child) {
          margin-right: 15px;
          &::after {
            content: '/';
            font-weight: bold;
            font-style: italic;
            color: #e3e058;
            padding-left: 15px;
          }
        }
      }
    }
  }

}
@keyframes flash {
  0% { opacity: 0 }
  100% { opacity: 1}
}

</style>
