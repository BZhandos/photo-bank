<template>
    <div class="card-block">
      <div class="card-block-info">
        <planet-info/>
      </div>
      <hr/>
    </div>
</template>

<script>
import PlanetInfo from './PlanetInfo'
export default {
  name: 'Planet',
  components: {
    PlanetInfo
  }
}
</script>

<style scoped lang="scss">
.card-block{
  position: relative;
  margin: auto;
  height: 600px;
  max-width: 350px;
  background: url('../../assets/space.jpg') 0/cover;
  box-shadow: 0 15px 30px 10px #070a0d;
  /*background-image: linear-gradient(180deg, #070a0d, #19232c);*/
  border-radius: 15px;
  &-info {
      position: absolute;
      bottom: 20px;
   }
}
</style>
