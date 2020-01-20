<template>
  <div class="about-wrap">
    <business-contacts />
    <my-photo />
    <fancy-contacts />
  </div>
</template>
<script>
import BusinessContacts from '../components/cv/BusinessContacts'
import MyPhoto from '../components/cv/MyPhoto'
import FancyContacts from '../components/cv/FancyContacts'

export default {
  components: {
    FancyContacts,
    MyPhoto,
    BusinessContacts
  }
}
</script>
<style scoped lang="scss">
.about-wrap {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
