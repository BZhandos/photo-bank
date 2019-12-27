<template>
  <div class="menu">
    <a target="_blank" href="mailto:bazargaliyev.zhandos@gmail.com"><i class="fa fa-envelope"></i></a>
    <a target="_blank" href="https://www.linkedin.com/in/bazargaliyev-zhandos/"><i class="fa fa-linkedin"></i></a>
    <a target="_blank" href="https://www.instagram.com/bazargaliyev.zhandos/"><i class="fa fa-instagram"></i></a>
    <a target="_blank" href="https://github.com/BZhandos"><i class="fa fa-github-square"></i></a>
  </div>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>

<style scoped lang="scss">
.menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    width: 80px;
    background-color: rgba(0, 0, 0, .9);
    border-left: 1px solid darkgray;
    & a {
      padding: 10px 0;
      color: darkgray;
      transition: .3s;
      &:hover {
        color: #42b983;
      }
    }
    & i {
      font-weight: bold;
      font-size: 24px;
    }
  }
</style>
