<template>
  <div class="img-wrap">
    <div class="img-wrap-picture">
      <img :src="url" />
    </div>
    <div class="img-wrap-info">
      <div>
        <span><i class="fa fa-heart red"></i>
          {{likes}}
        </span>
        <span> <i class="fa fa-eye black"></i>
          {{ views }}</span>
      </div>
      <span>
        <i class="fa fa-calendar black"></i>
        {{ date }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    likes: Number,
    views: Number,
    date: String,
    location: String
  }
}
</script>

<style scoped lang="scss">
  .img-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-picture {
      & img {
        max-height: 600px;
        height: auto;
        max-width: 100%;
      }
    }
    &-info {
      & span {
        font-size: 12px;
        margin: 0 5px 5px 5px;
      }
    }
  }
  .red {
    color: darkred;
  }
  .black {
    color: black;
  }
</style>
