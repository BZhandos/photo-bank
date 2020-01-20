<template>
  <div class="about">
    <h1><i class="fa fa-envelope"></i>:
      <a target="_blank" href="mailto:bazargaliyev.zhandos@gmail.com">Just click me</a>
    </h1>
    <h1><i class="fa fa-linkedin"></i>:
      <a target="_blank" href="https://www.linkedin.com/in/bazargaliyev-zhandos/"> LinkedIn </a>
    </h1><h1><i class="fa fa-telegram"></i>:
      <a target="_blank" href="https://t.me/zhandos_vue">  Telegram</a>
    </h1>
    <h1><i class="fa fa-github-square"></i>:
      <a target="_blank" href="https://github.com/BZhandos"> Github </a>
    </h1>
    <h1><i class="fa fa-crosshairs"></i>:
      <a target="_blank" href="https://hh.kz/resume/6143bc17ff01f83bee0039ed1f6e653655426f"> HeadHunter CV</a>
    </h1>
  </div>
</template>
<script>
export default {
  components: {  }
}
</script>
<style scoped lang="scss">
  h1 {
    text-align: left;
    font-size: 22px;
    @media (max-width: 850px) {
      font-size: 16px;
    }
    & span {
      color: #ff1d5e;
    }
    & a {
      color: #ff1d5e;
      text-decoration: none;
    }
  }
  .about {
    padding-left: 10px;
    text-align: left;
    & p {
    }
  }
</style>
