<template>
    <div class="main-wrap">
      <HeaderBlock v-if="isDesktop"/>
      <MobileHeader v-else />
      <div class="main-wrap-box">
        <section01 />
<!--        <section02 />-->
        <section04/>
        <section03 />
        <section05/>
      </div>
    </div>
</template>

<script>
import HeaderBlock from './Header'
import MobileHeader from './mobileHeader'
import Section01 from './Section_01'
import Section02 from './Section_02'
import Section03 from './Section_03'
import Section04 from './Section_04'
import Section05 from './Section_05'

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
    Section04,
    Section05
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/pages/CV/cv-style";
</style>
