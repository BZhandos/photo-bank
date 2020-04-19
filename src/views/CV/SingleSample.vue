<template>
    <div class="box-wrap">
        <router-link :to="item.link">
            <div class="box-wrap__item"
                 @mouseover="hover = true"
                 @mouseleave="hover = false"
            >
              <transition name="rainingEffect">
                <div class="box-wrap__item-desc" v-if="hover">
                  <p>{{item.desc}}</p>
                </div>
              </transition>
              <img :src="item.src"/>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'SingleSample',
  props: {
    item: Object
  },
  data: () => ({
    hover: false
  })
}
</script>

<style scoped lang="scss">
.box-wrap {
  width: 250px;
  margin-left: 10px;
  &__item {
    position: relative;
    &:hover img {
      opacity: 0.2;
    }
    &-desc {
      position: absolute;
      left: 0;
      right: 0;
      top: 20%;
      & p {
        color: white;
      }
    }
    & img {
      height: 100%;
      width: 100%;
      transition: .5s ease;
      padding: 1px;
      background-color: #ff1d5e;
    }
  }
}
.rainingEffect-enter-active {
  animation: rainingEffectIn 0.5s ease-out forwards;
}
.rainingEffect-leave-active {
  animation: rainingEffectOut 0.5s ease-out forwards;
}
@keyframes rainingEffectIn {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes rainingEffectOut {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(70px);
  }
}
</style>
