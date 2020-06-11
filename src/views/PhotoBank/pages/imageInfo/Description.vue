<template>
  <div class="desc-wrap">
    <div class="owner">
      <img :src=desc.user.profile_image.medium >
      <div class="owner-info">
        <div class="owner-info-profile">
          <p> {{desc.user.name}} </p>
          <p>{{desc.user.total_photos}} images</p>
        </div>
        <div  v-if="desc.user.instagram_username"
              class="owner-info-insta">
          <a target="_blank" :href= "'https://www.instagram.com/' + desc.user.instagram_username">
            <i class="fa fa-instagram"></i>
            {{desc.user.instagram_username}}
          </a>
        </div>
      </div>
    </div>

    <div class="desc-wrap-title">
      <h3>Description:</h3>
      <p>{{desc.description}}</p>
      <p>{{desc.alt_description}}</p>
    </div>

    <div class="tags" v-if="desc.tags.length > 0">
      <h3>Hashtags</h3>
      <span v-for="tag in desc.tags"
            @click="$router.push({ path: '/search/'+ tag.title})"
      >
          #{{tag.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    desc: Object
  }
}
</script>

<style scoped lang="scss">
.desc-wrap {
  margin: 0 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &-title {
    text-align: left;
    margin-left: 20px;
    text-transform: capitalize;
  }
}
.owner {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-right: 20px;
  & img {
    border-radius: 50%;
    margin: 10px;
    border: 1px solid #ff1d5e;
    padding: 2px;
  }
  &-info {
    text-align: left;
    &-insta {
      & a {
        text-decoration: none;
        color: #ff1d5e;
      }
    }
  }
}
.tags {
  max-width: 600px;
  text-align: left;
  cursor: pointer;
  & h3 {
    margin: 0;
    color: #57800a;
  }
  & span:hover {
    color: #9eccff;
  }
}
</style>
