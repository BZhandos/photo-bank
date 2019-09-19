<template>
  <div class="spinner">
    <orbit-spinner
      :animation-duration="1200"
      :size="55"
      color="#ff1d5e"
    />
  </div>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners'
export default {
  name: 'Loading',
  components: {
    OrbitSpinner
  }
}
</script>

<style scoped>
.spinner {
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>
