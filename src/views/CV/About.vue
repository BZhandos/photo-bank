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
import BusinessContacts from './BusinessContacts'
import MyPhoto from './MyPhoto'
import FancyContacts from './FancyContacts'
import Samples from './Samples'

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
