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
    <div class="title">
      {{desc.description}}
      {{desc.alt_description}}
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
  max-width: 300px;
}
.owner {
  display: flex;
  justify-content: start;
  align-items: center;
  & img {
    border-radius: 50%;
    margin: 10px;
    border: 1px solid #ff1d5e;
    padding: 2px;
  }
  &-info {
    text-align: left;
    &-profile {
      & p {
        line-height: 0;
      }
    }
    &-insta {
      & a {
        text-decoration: none;
        color: #57800a;
      }
    }
  }
}
.title {
  text-transform: capitalize;
}
</style>
