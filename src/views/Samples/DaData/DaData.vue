<template>
  <div class="da-data">
    <div class="da-data-field">
      <input-field
        labelName="Поиск организаций"
        v-model="searchingData"
      />
      <button class="da-data-button"
              :style="{'background-color': searchingData.length > 0? '#4CAF50' : '#3b823f'}"
              @click="search">Search</button>
    </div>

    <div class="da-data-field" v-if="dataList.length>0">
      <div  class="da-data-field-select">
        <select v-model="selected" v-if="dataList">
          <option v-for="(item, index) in dataList" :key="index" :value="item">
            {{ item.name?  item.name : item.value}}
          </option>
        </select>
      </div>
    </div>

    <div v-if="list.length>0"
         class="list-wrap">
      <div v-for="(item, index) in list" :key="index">
        <div class="list-wrap-box" @click="deleteHanlder(index)">
          <p class="list-wrap-box__status"
             :style="{color: item.status=== 'ACTIVE'? 'green' : 'red'}">
            {{item.status}}
          </p>
          <p class="list-wrap-box__name">  {{ item.value }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/helpers/API'

export default {
  name: 'DaData',
  data: () => ({
    dataList: [],
    selected: '',
    searchingData: '',
    loading: false
  }),
  watch: {
    selected (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$store.dispatch('dadata/addToList', newVal)
      }
    }
  },
  computed: {
    list () {
      return this.$store.getters['dadata/getList']
    }
  },
  methods: {
    search () {
      if (this.searchingData.length > 0) {
        API.searchInDaData(this.searchingData).then(response => {
          console.log(response);
          this.dataList = response.data
        }).catch(e => {})
      }

    },
    deleteHanlder (index) {
      this.$store.dispatch('dadata/deleteFromList', index)
    }
  }
}
</script>

<style scoped lang="scss">
.da-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-field {
    width: 100%;
    max-width: 500px;
    &-select {
      margin: 15px;
      select {
        max-width: 100%;
        width: 100%;
        font-weight: 400;
        color: #000000;
        font-size: 17px;
        line-height: 22px;
        border: none;
        border-radius: 3px;
        padding: 16px 12px;
        transition: 0.3s ease font-size, top;
      }
    }
  }
  &-button {
    background-color: #3b823f;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    padding: 14px 40px;
  }
}
.list-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  &-box {
    padding: 10px;
    margin: 10px;
    background-color: #fff;
    color: #0b0c16;
    cursor: pointer;
    transition: .5s;
    max-width: 320px;
    border-radius: 5px;
    box-shadow: 5px 5px;
    &:hover {
      background-color: #ff724f;
      transform: scale(1.02)
    }
    &__status {
      font-weight: bold;
    }
    &__name {
      font-size: 12px;
    }
  }
}
</style>
