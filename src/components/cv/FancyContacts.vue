<template>
  <div class="about">
    <h1><i class="fa fa-instagram"></i>:
      <a target="_blank" href="https://www.instagram.com/bazargaliyev.zhandos/"> @bazargaliyev.zhandos</a>
    </h1>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="scss">
  a {
    text-decoration: none;
    color: #ff1d5e;
  }
  h1 {
    text-align: left;
    font-size: 24px;
    @media (max-width: 850px) {
      font-size: 16px;
    }
    & span {
      color: #ff1d5e;
    }
  }
  .about {
    padding-left: 10px;
    text-align: left;
  }
</style>
