<template>
  <div class="about-wrap">
    <div class="about-wrap__info">
      <business-contacts />
      <my-photo />
      <fancy-contacts />
    </div>
    <app-samples />
  </div>

</template>
<script>
import BusinessContacts from '../components/cv/BusinessContacts'
import MyPhoto from '../components/cv/MyPhoto'
import FancyContacts from '../components/cv/FancyContacts'
import Samples from '../components/cv/Samples'

export default {
  components: {
    FancyContacts,
    MyPhoto,
    BusinessContacts,
    appSamples: Samples
  }
}
</script>
<style scoped lang="scss">
.about-wrap {
  &__info {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
