<template>
  <div class="sample-wrap">
    <p class="sample-wrap__title">Some drafts and Vue-knowledge</p>
    <div class="sample-wrap__box">
      <single-sample v-for="item in data" :item="item"/>
    </div>
  </div>
</template>

<script>
import SingleSample from './SingleSample'
export default {
  name: 'Samples',
  components: {
    SingleSample
  },
  data: () => ({
    data: [
      {
        desc: 'Some array manipulation',
        link: '/art-board',
        src: require('../../assets/samples/arrayManipulate.jpg')
      },
      {
        desc: 'Vuex and vulidate',
        link: '/vuex-vuelidate',
        src: require('../../assets/samples/vuexVulidate.jpg')
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.sample-wrap {
  &__title {
    font-size: 24px;
   }
  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
