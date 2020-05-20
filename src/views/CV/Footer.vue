<template>
  <div class="footer-wrap">
      <a target="_blank" href="https://www.linkedin.com/in/bazargaliyev-zhandos/">
        <i class="fa fa-linkedin"></i>
      </a>
      <a target="_blank" href="mailto:bazargaliyev.zhandos@gmail.com">
        <i class="fa fa-envelope"></i>
      </a>
      <a target="_blank" href="https://www.instagram.com/bazargaliyev.zhandos/">
        <i class="fa fa-instagram"></i>
      </a>
      <a target="_blank" href="https://t.me/zhandos_vue">
        <i class="fa fa-telegram"></i>
      </a>
      <a target="_blank" href="https://github.com/BZhandos">
        <i class="fa fa-github-square"></i>
      </a>
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
    transition: .5s;
  }
  & a {
    width: 100%;
    cursor: pointer;
    &:hover {
      i {
        color: #FAC921;
      }
    }
  }
}
</style>
