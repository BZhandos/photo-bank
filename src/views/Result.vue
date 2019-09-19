<template>
  <div>
    <img v-if="$route.params.query" v-for="url in result"
      :src= url.urls.small >
    <div v-if="!$route.params.query || result.length == 0">
      <img src="https://unsplash.com/a/img/empty-states/photos.png">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Result',
  data: () => ({
    result: ''
  }),
  mounted () {
    axios
      .get('https://api.unsplash.com/search/photos/?client_id=442d6868b0058da84ce682f0d4dbf12958745f40c4e763ce22776a12115fefee&query=' +
        this.$route.params.query
      )
      .then(response => (this.result = response.data.results))
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>
