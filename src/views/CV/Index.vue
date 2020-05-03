<template>
  <div class="cv-wrap">
    <section_01 />
    <HeaderBox />
<!--    <AboutBlock />-->
    <HeaderBlock />
  </div>
</template>

<script>
import HeaderBlock from '../../components/UI/Header'
import Section_01 from './Section_01'
import HeaderBox from './Header'
import AboutBlock from './About'
export default {
  name: 'Index',
  components: {
    Section_01,
    HeaderBlock,
    HeaderBox,
    AboutBlock
  }
}
</script>

<style scoped>
.cv-wrap {
  height: 3500px;
}
</style>
