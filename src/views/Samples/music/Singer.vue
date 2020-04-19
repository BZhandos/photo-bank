<template>
  <div @click.prevent="singer.isPlaying ? pause(singer) : play(singer)">
    {{ singer.name }}
  </div>
</template>

<script>
export default {
  name: 'Singer',
  props: {
    singer: Object
  },
  data: () => ({
    intervalTimer: null
  }),
  methods: {
    play (singer) {
      singer.isPlaying = true
      singer.music.loop = true
      singer.music.play()
      // this.intervalTimer = setInterval(() => {
      //   singer.music.play()
      // }, 500)
    },
    pause (singer) {
      singer.isPlaying = false
      singer.music.pause()
      //clearInterval(this.intervalTimer)
    }
  }
}
</script>

<style scoped>

</style>
