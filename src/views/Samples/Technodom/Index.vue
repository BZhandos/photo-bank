<template>
  <div class="container mt-5">
    <h3>Hello world from Technodom!</h3>
    <b-table
      class="table-dark"
      :per-page="5"
      :busy="loading"
      :hover="true"
      :items="list"
      :fields="fields"
      :current-page="currentPage"
      :striped="true"
      small
      dark
      :responsive="true"
    >
      <template v-slot:cell(more)="data">
        <div>
          <b-checkbox
            @change="toggleCheckbox(data.item.id)"
            :disabled="(currentActive === 1 && lastActiveID.id === data.item.id)"
            v-model="data.item.isChecked"
          />
        </div>
      </template>

      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong> Loading...</strong>
        </div>
      </template>
    </b-table>
    <b-pagination
      v-if="showPagination"
      v-model="currentPage"
      :total-rows="maxPages"
      :per-page="5"
      aria-controls="my-table"
    ></b-pagination>

    <div class="mt-5">
      <b-button variant="outline-primary" @click="simulateGetRequest">
          Tap to simulate get Request
      </b-button>
    </div>
  </div>
</template>

<script>
const getJsonResponse = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const DATA = require('./list.json')
      resolve(DATA)
    }, 2000)
  })
}

export default {
  name: 'Index',
  data: () => ({
    loading: true,
    showPagination: true,
    list: [],
    currentPage: 1,
    fields: [
      {
        key: 'id',
        label: 'ID'
      },
      {
        key: 'more',
        label: 'Подробнее'
      },
      {
        key: 'username',
        label: 'User name'
      },
      {
        key: 'email',
        label: 'email'
      },
      {
        key: 'website',
        label: 'website'
      }
    ],
    currentActive: 10,
    lastActiveID: null
  }),
  computed: {
    maxPages () {
      return this.list.length
    }
  },
  methods: {
    async getRequest () {
      this.loading = true
      return getJsonResponse()
        .then((res) => res)
        .finally(() => {
          this.loading = false
        })
    },
    simulateGetRequest () {
      this.currentPage = 1
      // симляция запроса на сервер с намеренной задержкой на 2 сек
      this.getRequest().then((response) => {
        if (response) {
          this.list = response.map((item) => {
            return {
              ...item,
              isChecked: true
            }
          })
        }
      })
    },
    toggleCheckbox () {
      this.currentActive = this.list.reduce((sum, current) => {
        return current.isChecked ? sum + 1 : sum
      }, 0)
      if (this.currentActive === 1) {
        this.lastActiveID = this.list.find(item => {
          return item.isChecked === true
        })
      }
    }
  },
  created () {
    this.simulateGetRequest()
  }
}
</script>

<style scoped>

</style>
