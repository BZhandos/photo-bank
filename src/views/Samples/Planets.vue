<template>
  <div class="planet-wrap">
    <planet-picture/>
    <planet/>
  </div>
</template>

<script>
import Planet from './planets/Planet'
import PlanetPicture from './planets/Picture'

export default {
  name: 'Planets',
  components: {
    PlanetPicture,
    Planet
  }
}
</script>

<style scoped>
.planet-wrap {
  height: 100vh;
  padding-top: 40px;
}
</style>
