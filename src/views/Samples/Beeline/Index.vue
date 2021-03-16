<template>
  <div>
    <div class="jumbotron text-center">
      <h1>A free CDN for Open Source</h1>
     <div class="container">
       <div class="col-sm-4 m-auto">
         <form @submit.prevent="searchHandler">
           <div class="form-group">
             <label for='searchInput'>What are you looking for</label>
             <input type="text" id='searchInput' v-model="searchingItem" class="form-control">
             <small v-show="searchEmtpy" class="form-text text-danger">We'll never share your email with anyone else.</small>
           </div>
           <button type="submit" class="btn btn-primary m-2">Search</button>
         </form>
       </div>
     </div>
    </div>
    <div class="container p-2" v-if="searchResult.length > 0">
      <b-table
        class="table-dark"
        :per-page="10"
        :hover="true"
        :items="searchResult"
        :fields="fields"
        :current-page="currentPage"
        @row-clicked="rowClickedHandler"
        small
        fixed
      >
        <template v-slot:cell(preview)="data">
          <img :src="data.item.preview" />
        </template>
      </b-table>
      <b-pagination
        v-if="showPagination"
        v-model="currentPage"
        :total-rows="maxPages"
        :per-page="10"
        aria-controls="my-table"
      ></b-pagination>
    </div>

    <b-modal id="more-info-modal" hide-footer hide-header>
      <div class="d-block text-center text-info">
        <b-card class="main-image" :img-src="currentItem.imgUrl" img-alt="Card image" img-top>
          <template #header>
            <h4 class="mb-0">
              <span class="text-success">Author name: </span>
              {{ currentItem.username }}
            </h4>
          </template>

          <b-card-body>
            <b-card-title>{{currentItem.location}}</b-card-title>
            <b-card-sub-title class="mb-2">
              <img class="profile-box" :src="currentItem.profile_image " />
            </b-card-sub-title>
            <b-card-text>
             {{ currentItem.bio }}
            </b-card-text>
          </b-card-body>
          <b-button class="mt-3" block @click="closeModal">ok</b-button>
        </b-card>
      </div>
    </b-modal>
  </div>
</template>

<script>
import API from '@/helpers/API'
export default {
  name: 'Index',
  data: () => ({
    searchEmtpy: false,
    searchingItem: '',
    searchResult: [],
    maxPages: 0,
    currentPage: 1,
    fields: [
      {
        key: 'id',
        label: 'ID'
      },
      {
        key: 'username',
        label: 'Владелец'
      },
      {
        key: 'preview',
        label: 'Превю'
      },
      {
        key: 'likes',
        label: 'Понравилось'
      }
    ],
    currentItem: {}
  }),
  watch: {
    currentPage (newPageNumber, oldVal) {
      if (newPageNumber !== oldVal) {
        this.searchHandler(newPageNumber)
      }
    }
  },
  computed: {
    showPagination () {
      return this.maxPages > 10
    }
  },
  methods: {
    searchHandler () {
      API.searchImageUnsplash(this.searchingItem, this.currentPage).then(response => {
        this.maxPages = response.data.total_pages
        const tempResponse = response.data.results.map(item => {
          return {
            id: item.id,
            username: item.user.name,
            preview: item.urls.thumb,
            likes: item.likes,
            image: item.urls.small,
            location: item.user.location,
            bio: item.user.bio,
            profile_image: item.user.profile_image.medium
          }
        })
        this.searchResult.push(...tempResponse)
      }).catch(e => {})
    },
    rowClickedHandler (item) {
      this.currentItem = {
        username: item.username,
        imgUrl: item.image,
        location: item.location,
        bio: item.bio,
        profile_image: item.profile_image
      }
      this.$bvModal.show('more-info-modal')
    },
    closeModal () {
      this.$bvModal.hide('more-info-modal')
    }
  }
}
</script>

<style scoped>
.main-image img{
  max-height: 300px;
}
.profile-box {
  border: 1px solid green;
  border-radius: 100%;
}
</style>
