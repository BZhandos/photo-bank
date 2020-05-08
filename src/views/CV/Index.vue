<template>
  <div class="cv-wrap">
    <HeaderBlock />
    <section01 />
    <section02 />
    <section03 />
    <footer-block />
  </div>
</template>

<script>
import HeaderBlock from './Header'
import Section01 from './Section_01'
import Section02 from './Section_02'
import Section03 from './Section_03'
import FooterBlock from './Footer'

export default {
  name: 'Index',
  components: {
    HeaderBlock,
    Section01,
    Section02,
    Section03,
    FooterBlock
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/pages/CV/cv-style";
</style>
