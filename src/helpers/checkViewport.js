// function isInViewport (elem) {
//   let view = elem.getBoundingClientRect()
//   return (
//     view.top < 100 &&
//     view.bottom > 100
//   )
// }
//
// export default {
//   isInViewport,
//   isDesktop
// }
export default {
  data: () => ({
    width: window.innerWidth,
    view: ''
  }),
  computed: {
    isDesktop () {
      return this.width >= 1024
    },
    isTablet () {
      return this.width < 1024 && this.width >= 768
    },
    isMobile () {
      return this.width < 768 && this.width >= 320
    }
  },
  methods: {
    isInViewport (elem) {
      let view = elem.getBoundingClientRect()
      return (
        view.top < 100 &&
        view.bottom > 100
      )
    }
  },
  mounted () {
    let _this = this
    _this.width = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        _this.width = window.innerWidth
      })
    })
  }
}
