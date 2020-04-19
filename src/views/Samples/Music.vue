<template>
  <div>
    <div class="singers-wrap">
      <div class="singers-wrap__box"
           v-for="(singer, index) in singers" :key="index">
        <singer :singer="singer"/>
      </div>
    </div>
    {{singers}}
  </div>
</template>

<script>
import Singer from './music/Singer'

export default {
  name: 'Music',
  components: { Singer },
  data: () => ({
    singers: [
      {
        name: 1,
        music: new Audio(require('../../assets/samples/bass.mp3')),
        isPlaying: false
      },
      {
        name: 2,
        music: new Audio(require('../../assets/samples/bong.mp3')),
        isPlaying: false
      }
    ]
  }),
}
</script>

<style scoped lang="scss">
.singers-wrap {
  display: flex;
  justify-content: center;
  &__box {
    width: 150px;
    text-align: center;
    padding: 0 10px;
    cursor: pointer;
  }
}
</style>
