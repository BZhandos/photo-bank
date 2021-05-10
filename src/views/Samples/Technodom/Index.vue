<template>
  <div>
    <loading v-if="loading"/>
    <div v-else>
      response= {{list}}
    </div>
  </div>
</template>

<script>
import Loading from '@/components/UI/Loading'

const getJsonResponse = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const DATA = require('./list.json')
      resolve(DATA)
    }, 2000)
  })
}

export default {
  name: 'Index',
  components: { Loading },
  data: () => ({
    loading: true,
    list: []
  }),
  methods: {
    async getRequest () {
      return getJsonResponse()
        .then((res) => res)
        .finally(() => {
          this.loading = false
        })
    }
  },
  created () {
    this.getRequest().then((response) => {
      if (response) {
        this.list = response
      }
    })
  }
}
</script>

<style scoped>

</style>
