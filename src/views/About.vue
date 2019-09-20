<template>
  <div class="about">
    <loading/>
    <h1><i class="fa fa-envelope"></i>:
      <a target="_blank" href="mailto:bazargaliyev.zhandos@gmail.com">bazargaliyev.zhandos@gmail.com</a>
    </h1>
    <h1><i class="fa fa-phone-square"></i>:
      <span>+7 747 617 85 79</span>
      or <i class="fa fa-telegram"></i>
      or <i class="fa fa-whatsapp"></i>
    </h1>
    <h1><i class="fa fa-linkedin"></i>:
      <a target="_blank" href="https://www.linkedin.com/in/bazargaliyev-zhandos/">linkedin.com/in/bazargaliyev-zhandos</a>
    </h1>
    <h1><i class="fa fa-github-square"></i>:
      <a target="_blank" href="https://github.com/BZhandos"> Project samples</a>
    </h1>
    <h1><i class="fa fa-crosshairs"></i>:
      <a target="_blank" href="https://hh.kz/resume/6143bc17ff01f83bee0039ed1f6e653655426f"> HeadHunter CV</a>
    </h1>
    <h1><i class="fa fa-instagram"></i>:
      <a target="_blank" href="https://www.instagram.com/bazargaliyev.zhandos/"> @bazargaliyev.zhandos</a>
    </h1>
    <h1><i class="fa fa-vk"></i>:
      <a target="_blank" href="https://vk.com/zhandosmuratovich"> zhandosmuratovich</a>
    </h1>
  </div>
</template>
<script>
import Loading from '../components/UI/Loading'
export default {
  components: { Loading }
}
</script>
<style scoped lang="scss">
  h1 {
    text-align: left;
    padding-left: 10px;
    & span {
      color: #ff1d5e;
    }
    & a {
      color: #ff1d5e;
      text-decoration: none;
    }
  }
</style>
