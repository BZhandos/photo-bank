<template>
  <div class="cv-wrap">
    <HeaderBlock v-if="isDesktop"/>
    <MobileHeader v-else />
    <section01 />
    <section02 />
    <section03 />
    <footer-block />
  </div>
</template>

<script>
import HeaderBlock from './Header'
import MobileHeader from './mobileHeader'
import Section01 from './Section_01'
import Section02 from './Section_02'
import Section03 from './Section_03'
import FooterBlock from './Footer'

import checkViewport from '../../helpers/checkViewport'

export default {
  name: 'Index',
  mixins: [checkViewport],
  components: {
    HeaderBlock,
    MobileHeader,
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
