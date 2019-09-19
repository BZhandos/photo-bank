<template>
  <div class="home">
    <search/>
    <list-of-images/>
  </div>
</template>

<script>
import Search from '../components/home/Search'
import ListOfImages from '@/components/home/ListOfImages'

export default {
  name: 'home',
  components: {
    ListOfImages,
    Search
  }
}
</script>
