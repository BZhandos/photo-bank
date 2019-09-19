<template>
  <div class="arrow-wrapper"
       @click="goBackHandler()">
    <transition name="slidingOut">
      <i v-if="visible"
        class="fa fa-chevron-left"></i>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: true
    }
  },
  methods: {
    goBackHandler () {
      this.visible = false
      window.setTimeout(() => {
        this.$router.push('/')
      }, 400)
    }
  }
}
</script>
<style scoped>
  .arrow-wrapper {
    position: absolute;
    z-index: 1;
    top: 30px;
    padding-left: 10px;
    cursor: pointer;
    font-size: 30px;
  }
  .slidingOut-leave-active {
    animation: slidingOut 0.5s ease-out forwards;
  }
  @keyframes slidingOut {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateX(-50px);
    }
  }
</style>
