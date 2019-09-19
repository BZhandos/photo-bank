<template>
  <div class="home">
    <search/>
    <list-of-images/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListOfImages from '@/components/home/ListOfImages'
import Search from '../components/home/Search'

export default {
  name: 'home',
  components: {
    ListOfImages,
    Search
  }
}
</script>
