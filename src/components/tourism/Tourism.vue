<template>
  <div class="wrapper">
    <div class="block">
      <div class="block-wrap">
        <inner-header/>
        <div class="block-main">
          <p class="block-main__title">{{ $store.state.userName }}, and so the adventure begins.....</p>
          <button class="block-main__info">Learn more</button>
        </div>
      </div>
      <side-menu/>
    </div>
  </div>
</template>

<script>
import SideMenu from './SideMenu'
import InnerHeader from './InnerHeader'

export default {
  components: {
    InnerHeader,
    SideMenu
  },
  data: () => ({
  })
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 80vh;
  background: url('../../assets/nature.jpg') center center no-repeat;
  border-radius: 4px;
}
.block {
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  &-wrap {
    width: 100%;
  }
  &-main {
    padding-left: 10%;
    padding-top: 15vh;
    text-align: left;
    max-width: 500px;
    width: 100%;
    &__title {
      color: white;
      font-size: 42px;
      font-weight: bold;
      text-shadow: 1px 1px black;
      margin: 10px 0;
    }
    &__info {
      padding: 12px 32px;
      background: transparent;
      border: 1px solid white;
      border-radius: 4%;
      outline: none;
      color: white;
      font-weight: bold;
      &:focus {
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
