<template>
  <div>
    <h4> I`m user with ID: <i> {{$route.params.id}} </i></h4>
    <div class="mt-5">
      <b-button variant="outline-success" @click="goBack">
        Fine, go back
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnodomUserInfo',
  methods: {
    goBack () {
      this.$router.push({ name: 'Technodom' })
    }
  }
}
</script>

<style scoped>

</style>
