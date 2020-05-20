<template>
  <div>
    <p class="search-title">Results by <span>{{$route.params.query}}</span></p>
    <search/>
    <div class="result-wrap">
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

      <div v-if="!loading && result.length === 0"
           class="image-notfound">
        <div class="image-notfound__text">
          <i class="fa fa-sad-cry"></i>
          Sorry, no images found by this query <span>(O_o)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '../../components/UI/Loading'
import Search from './Search'

export default {
  name: 'Result',
  components: { Search, Loading },
  data: () => ({
    result: [],
    loading: true,
    additional: '',
    page: 1
  }),
  watch: {
    '$route' (to, form) {
      this.$route.params.query = to.params.query
      this.result = ''
      this.additional = ''
      this.loadImagesHandler()
      console.log('watch happened')
    }
  },
  mounted () {
    this.loadImagesHandler()
  },
  methods: {
    loadImagesHandler () {
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
.search-title {
  font-size: 18px;
  padding: 40px 0 20px 0;
  & span {
    font-size: 24px;
    color: #ff1d5e;
    text-transform: uppercase;
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
.image-notfound {
  &__text {
    font-size: 24px;
    color: #35258b;
    & span {
      color: #2c3e50;
      font-size: 26px;
    }
  }
}
</style>
