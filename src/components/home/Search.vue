<template>
    <div class="search-wrap">
      <input v-model="query">

      <div
        class="search-wrap-button"
        @click="$router.push({ path: '/result/'+ query})">
        <i class="fa fa-search"></i> Search
      </div>
    </div>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    query: ''
  })
}
</script>

<style scoped>
.search-wrap input {
  border-radius: 50px;
  border: none;
  outline: none;
  padding: 10px 15px;
  width: 70%;
}
.search-wrap-button {
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  width: 150px;
 margin: auto;
}
</style>
