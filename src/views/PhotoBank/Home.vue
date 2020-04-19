<template>
  <div class="home">
    <TolerantHeader/>
    <search/>
    <list-of-images/>
  </div>
</template>

<script>
import Search from './Search'
import ListOfImages from './pages/home/ListOfImages'
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
