<template>
  <div class="planet-picture"></div>
</template>

<script>
export default {
  name: 'Picture'
}
</script>

<style scoped>
.planet-picture {
  position: absolute;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  left: 150px;
  right: 0;
  top: 90px;
  background: url('../../../assets/mercury.png') 0/cover;
  height: 320px;
  width: 320px;
  border-radius: 50%;
}
</style>
