<template>
  <div class="desc-wrap">
    <p class="title">{{ title }}</p>
    <p class="subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'defaultDescription',
  props: {
    title: {
      type: String,
      default: 'Title should be there'
    },
    subtitle: {
      type: String,
      default: 'Subtitle should be there'
    }
  }
}
</script>

<style scoped>
.desc-wrap {
  border-left: 2px solid  #FAC921;
  padding-left: 10px;
}
</style>
