<template>
  <div class="section-box s2-wrap" id="section2">
    <div class="s2-wrap-intro">
      <h1>Front-End Developer</h1>
      <p class="intro-box__desc">
        Passioned web developer with in excess of {{expYears}} years (or {{expMonths}} months or   {{expDays}} days) extensive experience in frontline
        development and testing of web-based applications.
        My strong background includes front-end development using HTML5, CSS3, SAAS/SCSS, JavaScript, <b>Vue.js</b> and
        Bootstrap – in addition to knowledge of version control systems such as Git, and a thorough understanding of object-oriented
        programming and design patterns.
        In my previous roles, I have worked closely with internal Product & Marketing Teams, and external
        agencies when required, to deliver innovative features across all digital touchpoints, and produce concepts into fully-functional
        user-validated product.
      </p>
    </div>
    <div class="s2-wrap-img">
      <img src="https://sun9-48.userapi.com/c840324/v840324828/29098/P5RdRXDwI0Q.jpg"/>
    </div>
  </div>
</template>

<script>
import { differenceInCalendarDays, differenceInMonths, differenceInYears } from 'date-fns'

export default {
  name: 'Section_02',
  data: () => ({
    expDays: 0,
    expYears: 0,
    expMonths: 0,
    starterDay: new Date(2017, 7, 1, 0, 0)
  }),
  created () {
    this.expDays = differenceInCalendarDays(new Date(), this.starterDay)
    this.expMonths = differenceInMonths(new Date(), this.starterDay)
    this.expYears = differenceInYears(new Date(), this.starterDay)
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.s2-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 10px;
  &-intro {
    max-width: 350px;
  }
  &-img {
    max-width: 600px;
    & img {
      width: 95%;
    }
  }
}
.intro-box {
  color: white;
  padding: 60px 32px;
  max-width: 500px;
  width: 85%;
  margin: 30px 0;
  line-height: 34px;
  & h1 {
    color: rgba(255, 255, 255, 0.71);
  }
  &__desc {
    font-size: 13px;
    letter-spacing: 0.5px;
    font-weight: 300;
    text-align: justify;
    margin-bottom: 30px;
  }
}
</style>
