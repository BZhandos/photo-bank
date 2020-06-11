<template>
  <div class="home">
    <back-button/>
    <p class="home-title">Welcome to <span>Photo Bank</span></p>
    <search/>
    <list-of-images/>
  </div>
</template>

<script>
import Search from './Search'
import ListOfImages from './pages/home/ListOfImages'

export default {
  name: 'home',
  components: {
    ListOfImages,
    Search
  },
  created () {
    this.$gtag.pageview({
      page_path: '/photo-bank'
    })
  }
}
</script>

<style scoped lang="scss">
.home {
  &-title {
    padding: 40px 0 20px 0;
    text-align: center;
    font-size: 18px;
    & span {
      color: #42b983;
      font-size: 28px;
      text-decoration: underline;
    }
  }
}

</style>
