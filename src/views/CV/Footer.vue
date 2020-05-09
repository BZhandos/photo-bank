<template>
  <div class="footer-wrap">
    <div>
      <a target="_blank" href="https://www.linkedin.com/in/bazargaliyev-zhandos/">
        <i class="fa fa-linkedin"></i>
      </a>
    </div>
    <div>
      <a target="_blank" href="mailto:bazargaliyev.zhandos@gmail.com">
        <i class="fa fa-envelope"></i>
      </a>
    </div>
    <div>
      <a target="_blank" href="https://www.instagram.com/bazargaliyev.zhandos/">
        <i class="fa fa-instagram"></i>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer-wrap {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & i {
    color: #42b983;
    transition: .3s;
  }
  & div {
    width: 100%;
    cursor: pointer;
    &:hover {
      i {
        color: red;
      }
    }
  }
}
</style>
