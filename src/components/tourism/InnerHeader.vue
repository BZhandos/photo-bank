<template>
  <div class="header">
    <div class="header-main">
      <p>{{$route.path.slice(1) }}</p>
    </div>
    <div  class="header-section">

    </div>
  </div>
</template>

<script>
export default {
  name: 'InnerHeader'
}
</script>

<style scoped lang="scss">
.header {
  height: 35px;
  border-bottom: 1px solid darkgray;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-main {
    & p {
      font-size: 18px;
      text-transform: capitalize;
      color: white;
      font-weight: bold;
      padding-left: 20px;
    }
  }
}
</style>
