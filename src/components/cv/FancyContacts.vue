<template>
  <div class="about">
    <h1><i class="fa fa-instagram"></i>:
      <a target="_blank" href="https://www.instagram.com/bazargaliyev.zhandos/"> @bazargaliyev.zhandos</a>
    </h1>
    <div class="samples" >
      <p>Samples:</p>
      <router-link to="/art-board">Array list manipulation</router-link>
    </div>
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
  .samples {
    color: #ff1d5e;
    margin: 0;
    & p {
      font-weight: bold;
      font-size: 18px;
      margin: 20px 0 0 0;
    }
    & a {
      color: white;
    }
  }
</style>
