<template>
  <div class="img-wrap">
    <div class="img-wrap-statistics">
      <div class="img-wrap-statistics__likes">
        <i class="fa fa-heart red"></i>
        {{likes}}
      </div>
      <div class="img-wrap-statistics__likes">
        <i class="fa fa-eye black"></i>
        {{views}}
      </div>
    </div>
    <img :src= url >
    <p><i class="fa fa-calendar"></i> {{date}}</p>
    <p v-if="location"> <i class="fa fa-map-marker"></i> {{location}} </p>
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
    position: relative;
    margin-right: 50px;
    @media (max-width: 850px) {
      margin-right: 0;
    }
    & img {
      max-width: 800px;
      width: 100%;
    }
    &-statistics {
      position: absolute;
      text-align: left;
      left: 5px;
      top: 5px;
      background-color: hsla(0,0%,100%,.5);
      border: 1px solid transparent;
      box-shadow: 0 1px 2px rgba(0,0,0,.06);
      padding: 3px 5px;
      border-radius: 5px;
    }
    & p {
      text-align: right;
      margin: 3px 0;
    }
  }
  .red {
    color: darkred;
  }
  .black {
    color: black;
  }
</style>
