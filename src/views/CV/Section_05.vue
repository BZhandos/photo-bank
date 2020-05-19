<template>
  <div class="section-box s5-wrap" id="section5">
    <h1 @click="goto">
      Coming soon...
    </h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Section_05',
  methods: {
    goto () {
      //this.$router.push('/images')
      axios
        .post('https://www.kompra.kz/open-company/_search?keyword=apple%20city&size=20'
        )
        .then(response => {
          console.log(response)
        })
        .catch(error => console.log(error))
    }
  }
  // API.sendPhoto(imageNotDone).then((response) => {
  //   if (response && response.success) {
  //     responseImageNotDone = response.data
  //   }
  // }
}
</script>

<style scoped>
.s5-wrap
  {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

</style>
