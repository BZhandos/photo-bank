<template>
  <div class="photo-wrap">
    <div v-for="url in info"
         @click="$router.push({ path: '/image/'+ url.id})"
         class="column">
        <div>
          <img
            :src= url.urls.small >
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    msg: String
  },
  data: () => ({
    info: null
  }),
  mounted () {
    axios
      .get('https://api.unsplash.com/photos/?client_id=442d6868b0058da84ce682f0d4dbf12958745f40c4e763ce22776a12115fefee&per_page=15')
      .then(response => (this.info = response.data))
      .catch(error => console.log(error))
  },
  methods: {
  }
}
</script>
<style scoped>
  .photo-wrap {
    column-width: 320px;
    column-gap: 15px;
    width: 90%;
    max-width: 1100px;
    margin: 50px auto;
  }
  .column div:hover{
    transform: scale(1.05);
    transition: .3s;
  }
  .column div{
    transition: .3s;
  }
  .column {
    background: #fefefe;
    border: 2px solid #fcfcfc;
    box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
    margin: 0 2px 15px;
    padding: 15px;
    padding-bottom: 10px;
    transition: opacity .4s ease-in-out;
    display: inline-block;
  }
  .column img{
    width: 100%;
    height: auto;
    margin-bottom: 5px;
  }
</style>
