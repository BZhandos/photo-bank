<template>
  <nav class="header" id="header">
    <img class="header-icon"
         v-scroll-to="{ el: '#' + routesList[0].routeName}"
         src="@/assets/x-dev.svg" />
    <div class="header-wrap">
      <div class="header-wrap-item"
           v-for="(item, index) in routesList" :key="index"
           :class="{'active': item.inViewPort}"
          v-scroll-to="{ el: '#' + item.routeName}">
        <i :class="item.icon"></i>
      </div>
    </div>
  </nav>
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
        subtitle: 'Welcome!',
        icon: 'fa fa-home',
        inViewPort: true
      },
      // {
      //   name: 'About',
      //   routeName: 'section2',
      //   subtitle: 'Intro',
      //   icon: 'fa fa-th-large',
      //   inViewPort: false
      // },
      {
        name: 'Skills',
        routeName: 'section4',
        subtitle: 'Dev & Lang',
        icon: 'fa fa-th-large',
        inViewPort: false
      },
      {
        name: 'My clients',
        routeName: 'section3',
        subtitle: 'Testimonial',
        icon: 'fa fa-comments-o',
        inViewPort: false
      },
      {
        name: 'My works',
        routeName: 'section5',
        subtitle: 'Welcome here!',
        icon: 'fa fa-code',
        inViewPort: false
      }
    ],
    hovered: false
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
