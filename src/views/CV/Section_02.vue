<template>
  <div class="section-box section-wrap" id="section2">
    <div class="section-wrap-img">
      <img src="https://sun9-48.userapi.com/c840324/v840324828/29098/P5RdRXDwI0Q.jpg"/>
    </div>
    <div class="section-wrap-intro">
      <h1>Front-End Developer</h1>
      <p class="intro-box__desc">
        {{expDays}} day
        {{expMonths}} month
        Innovative and creative web developer with in excess of 3 years extensive experience in frontline development and testing of web-based applications. My strong background includes front-end development using HTML5, CSS3, SAAS/SCSS, JavaScript and Bootstrap – in addition to knowledge of version control systems such as SVN and Git, and a thorough understanding of object-oriented programming and design patterns. In my previous roles, I have worked closely with internal Product & Marketing Teams, and external agencies when required, to deliver innovative features across all digital touchpoints, and produce concepts into fully-functional user-validated product, through the use of our CMS (HubSpot, in the most recent example).
      </p>
    </div>
  </div>
</template>

<script>
import { differenceInCalendarDays, differenceInMonths } from 'date-fns'

export default {
  name: 'Section_02',
  data: () => ({
    expDays: 0,
    expMonths: 0
  }),
  created () {
    this.expDays = differenceInCalendarDays(new Date(), new Date(2017, 7, 1, 0, 0))
    this.expMonths = differenceInMonths(new Date(), new Date(2017, 7, 1, 0, 0))
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
  flex-wrap: wrap-reverse;
  box-sizing: border-box;
  margin-bottom: 20px;
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
  }
}
</style>
