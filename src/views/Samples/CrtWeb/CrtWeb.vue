<template>
  <div class="main-wrap">
    <custom-menu v-for="(data, index) in flatList" :key="index"
                 :flatInfo="data"/>
  </div>
</template>

<script>
import CustomMenu from "@/views/Samples/CrtWeb/CustomMenu";
export default {
  name: 'CrtWeb',
  components: { CustomMenu },
  data: () => ({
    flatList: []
  }),
  methods: {
    getDataFromFakeAPI () {
      const DATA = require('./entities.json')
      this.flatList = DATA.response.map(flatInfo => ({ ...flatInfo, liked: false }))
    }
  },
  mounted () {
    this.getDataFromFakeAPI()
  }
}
</script>

<style scoped lang="scss">
.main-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>
