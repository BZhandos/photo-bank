<template>
  <div class="home">
    <TolerantHeader/>
    <search/>
    <list-of-images/>
  </div>
</template>

<script>
import Search from '../components/home/Search'
import ListOfImages from '@/components/home/ListOfImages'
import TolerantHeader from '@/components/UI/TolerantHeader'

export default {
  name: 'home',
  components: {
    ListOfImages,
    Search,
    TolerantHeader
  }
}
</script>
