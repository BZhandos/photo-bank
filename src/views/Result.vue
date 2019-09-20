<template>
  <div class="result-wrap">
    <p>The result of searching <span>{{$route.params.query}}</span></p>
    <loading v-if="loading"/>
    <div  v-if="$route.params.query && result.length !== 0"
         class="photo-wrap">
      <div v-for="url in result"
           @click="$router.push({ path: '/image/'+ url.id})"
           class="photo-wrap-column">
        <div class="photo-wrap-column-box">
          <img
            :src= url.urls.small >
        </div>
      </div>
    </div>

    <div class="more-box"
      v-if="additional.length !== 0"
      @click="showMore()">
      <p> Show me more <span>{{$route.params.query}}</span> </p>
    </div>

    <div v-if="!loading && result.length === 0">
      <img src="https://unsplash.com/a/img/empty-states/photos.png">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '../components/UI/Loading'

export default {
  name: 'Result',
  components: { Loading },
  data: () => ({
    result: [],
    loading: true,
    additional: '',
    page: 0
  }),
  mounted () {
    axios
      .get('https://api.unsplash.com/search/photos/?client_id=442d6868b0058da84ce682f0d4dbf12958745f40c4e763ce22776a12115fefee&query=' +
        this.$route.params.query
      )
      .then(response => {
        this.result = response.data.results
        this.loading = false
        this.reserve()
      })
      .catch(error => console.log(error))
  },
  methods: {
    reserve () {
      this.page++
      axios
        .get('https://api.unsplash.com/search/photos/?client_id=442d6868b0058da84ce682f0d4dbf12958745f40c4e763ce22776a12115fefee&query=' +
          this.$route.params.query + '&page=' + this.page
        )
        .then(response => {
          this.additional = response.data.results
        })
        .catch(error => console.log(error))
    },
    showMore () {
      this.result = this.result.concat(this.additional)
      this.additional = ''
      this.reserve()
    }
  }
}
</script>

<style scoped lang="scss">
.result-wrap {
  & p {
    font-size: 18px;
    & span {
      font-size: 24px;
      color: #ff1d5e;
      text-transform: uppercase;
    }
  }
}
.photo-wrap {
  column-width: 320px;
  column-gap: 15px;
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;
  &-column {
    background: #fefefe;
    border: 2px solid #fcfcfc;
    box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
    margin: 0 2px 15px;
    padding: 15px;
    padding-bottom: 10px;
    transition: opacity .4s ease-in-out;
    display: inline-block;
    &-box {
      transition: .3s;
      &:hover {
        transform: scale(1.05);
      }
      & img {
        width: 100%;
        height: auto;
        margin-bottom: 5px;
      }
    }
  }
}
.more-box {
  border: 1px solid white;
  max-width: 250px;
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 auto;
  padding: 5px;
  text-align: center;
  transition: .2s;
  &:hover {
    background-color: #e3e058;
    color: white;
  }
}
</style>
