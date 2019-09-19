<template>
  <div>
    {{ rendering }}
    <img
      :src= singleImg.urls.small >
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CurtainImage',
  data: () => ({
    singleImg: '',
    rendering: ''
  }),
  computed () {
    this.rendering = true
  },
  mounted () {
    axios
      .get('https://api.unsplash.com/photos/' +
            this.$route.params.id
          + '/?client_id=442d6868b0058da84ce682f0d4dbf12958745f40c4e763ce22776a12115fefee')
      .then(response => (this.singleImg = response.data))
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>
