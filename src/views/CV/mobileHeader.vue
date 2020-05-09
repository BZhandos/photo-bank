<template>
  <div class="mob-header">
    <div  class="mob-header-box" v-if="isShown" @click="showHandler">
      <div
        v-for="(item, index) in routesList"
        :class="{'active-viewport': item.inViewPort}"
        :key="index"
        v-scroll-to="{ el: '#' + item.routeName , offset: -20 }">
        <div>
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="mob-header-burger"
         @click="showHandler">
      <div class="mob-header-burger-first" :class="{'turn-down': isShown}"></div>
      <div class="mob-header-burger-mid" :class="{'turn-invisible': isShown}"></div>
      <div class="mob-header-burger-last" :class="{'turn-up': isShown}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobileHeader',
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
    isShown: false
  }),
  methods: {
    showHandler () {
      this.isShown = !this.isShown
      if (this.isShown) {
        document.body.classList.add("no-overflow");
      } else document.body.classList.remove("no-overflow")
    }
  }
}
</script>

<style scoped lang="scss">
.mob-header {
  margin: 0;
}
.mob-header-burger {
  z-index: 100;
  width: 28px;
  cursor: pointer;
  position: fixed;
  top: 10px;
  right: 10px;
  & div {
    background: #FAC921;
    margin-bottom: 6px;
    height: 2px;
    transition: .6s;
  }
  &-first {
    width: 28px;
  }
  &-mid {
    width: 18px;
  }
  &-last {
    width: 0;
  }
  &:hover {
    .mob-header-burger-mid, .mob-header-burger-last {
      width: 28px;
    }
  }
}
.mob-header-box {
  z-index: 99;
  height: 100vh;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  & ul {
    margin-block: 0;
  }
}
.turn-down {
  position: relative;
  top: 8.5px;
  transform: rotate(45deg);
}
.turn-up {
  position: relative;
  width: 28px;
  bottom: 7.5px;
  transform: rotate(-45deg);
}
.turn-invisible {
  opacity: 0;
}
</style>
