<template>
  <div>
    <back-button to="PhotoBank"/>
    <loading v-if="loading"/>
    <div v-if="!loading">
      <div class="info-wrap">
        <image-box  :url="singleImg.urls.regular"
                    :likes="singleImg.likes"
                    :views="singleImg.views"
                    :date="singleImg.created_at.slice(0,10)"
                    :location="singleImg.location.name"
        />
      </div>
      <description :desc="singleImg"/>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '../../../../components/UI/Loading'
import Description from './Description'
import ImageBox from './ImageBox'
export default {
  name: 'CurtainImage',
  components: {
    Loading,
    Description,
    ImageBox
  },
  data: () => ({
    singleImg: null,
    loading: true
  }),
  beforeCreate () {
    this.$scrollTo('body', 500, {})
    axios
      .get('https://api.unsplash.com/photos/' +
            this.$route.params.id
          + '/?client_id=442d6868b0058da84ce682f0d4dbf12958745f40c4e763ce22776a12115fefee')
      .then(response => {
        this.singleImg = response.data
        this.loading = false
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped lang="scss">
.info-wrap {
  display: flex;
  flex-direction: column;
  @media (max-width: 1080px) {
    justify-content: start;
    flex-wrap: wrap-reverse;
  }
}
</style>
