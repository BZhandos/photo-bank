<template>
  <div class="header" id="header" :class="{'sticky': sticky}">
    <ul class="header-wrap">
      <li class="header-wrap-item"
          v-for="(item, index) in routesList"
          :class="{'active-viewport': item.inViewPort}"
          :key="index"
          v-scroll-to="{ el: '#' + item.routeName , offset: -20 }">
        <div class="header-wrap-item-box">
          {{ item.name }}
          <p>{{ item.subtitle }}</p>
        </div>
      </li>
    </ul>
    <img class="header-icon"
         v-scroll-to="{ el: '#' + routesList[0].routeName , offset: -20 }"
         src="@/assets/x-dev.svg" />
  </div>
</template>

<script>
import viewport from '../../helpers/checkViewport'

export default {
  name: 'Header',
  mixins: [viewport],
  data: () => ({
    routesList: [
      {
        name: 'Home',
        routeName: 'section1',
        subtitle: 'Welcome home!',
        inViewPort: true
      },
      {
        name: 'About',
        routeName: 'section2',
        subtitle: 'Intro',
        inViewPort: false
      },
      {
        name: 'Skills',
        routeName: 'section4',
        subtitle: 'Dev & Lang',
        inViewPort: false
      },
      {
        name: 'Planets',
        routeName: 'section3',
        subtitle: 'Welcome Planets!',
        inViewPort: false
      }
    ],
    hovered: false,
    sticky: false
  }),
  watch: {
    $route: function (newVal, oldVal) {

    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let section1 = document.getElementById("section1").offsetHeight
      this.sticky = window.pageYOffset > section1 - 60

      this.routesList.forEach((item, index) => {
        let temp = document.getElementById(item.routeName)
        item.inViewPort = this.isInViewport(temp)
      })
    }
  }
}
</script>

<style lang="scss">
</style>
