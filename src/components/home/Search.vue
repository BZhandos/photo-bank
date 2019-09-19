<template>
    <div class="search-wrap">
      <form v-on:submit.prevent="search()">
        <input v-model="query">
      </form>
      <div
        class="search-wrap-button"
        @click="search()">
        <i class="fa fa-search"></i> Search
      </div>
    </div>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    query: ''
  }),
  methods: {
    search () {
      this.$router.push('/result/' + this.query)
    }
  }
}
</script>

<style scoped lang="scss">
.search-wrap {
  & input {
    border-radius: 50px;
    border: none;
    outline: none;
    padding: 10px 15px;
    max-width: 300px;
    width: 70%;
    margin: 10px;
  }
  &-button {
    box-sizing: border-box;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    width: 150px;
    margin: auto;
    border: 1px solid #787280;
    border-radius: 5px;
    transition: .3s;
    &:hover {
      background-color: #9eccff;
    }
  }
}
</style>
