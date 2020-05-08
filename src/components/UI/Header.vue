<template>
  <div class="header" id="header1">
    <ul class="header-wrap">
      <router-link
        tag="li"
        class="header-wrap-item"
        v-for="(item, index) in routesList"
        :key="index"
        :to="{ name: item.routeName }"
      >
          <div class="header-wrap-item-box">
            {{ item.name }}
            <p>asd</p>
          </div>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data: () => ({
    routesList: [
      {
        name: 'CV',
        routeName: 'About'
      },
      {
        name: 'Photo Bank',
        routeName: 'PhotoBank'
      },
      {
        name: 'che to Planets',
        routeName: 'grid-box'
      }
    ],
    hovered: false
  }),
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const header = document.getElementById('header')
      var sticky = header.offsetTop
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }
}
</script>

<style scoped>

</style>
