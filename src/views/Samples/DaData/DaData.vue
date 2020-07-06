<template>
  <div class="da-data">
    <div class="da-data-field">
      <input-field
        labelName="Поиск организаций"
        v-model="searchingData"
      />
      <button @click="search">Ok</button>
    </div>

    <div class="da-data-field" v-if="dataList.length>0">
      <div  class="da-data-field-select">
        <select v-model="selected" v-if="dataList">
          <option v-for="(item, index) in dataList" :key="index" :value="item">
            {{ item.data.name.short?  item.data.name.short : item.value}}
          </option>
        </select>
      </div>
    </div>

    <div v-if="list.length>0"
         class="list-wrap">
      <div v-for="(item, index) in list" :key="index">
        <div class="list-wrap-box" @click="deleteHanlder(index)">
          {{ item.value }}
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
    list: [],
    loading: false
  }),
  watch: {
    selected (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.list.push(newVal)
      }
    }
  },
  methods: {
    search () {
      API.ownTransfer(this.searchingData).then(response => {
        this.dataList = response.data
      }).catch(e => {})
    },
    deleteHanlder (index) {
      this.list.splice(index, 1)
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
    &:hover {
      background-color: #ff724f;
    }
  }
}
</style>
