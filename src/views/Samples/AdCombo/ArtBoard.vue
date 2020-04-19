<template>
  <div class="board">
    <div class="board-header">
      <div class="board-header-info">
        <p class="board-header-info__header">Title</p>
        <p class="board-header-info__title">Sub-title</p>
      </div>
      <div class="board-header-button">
        Some array list manipulation
      </div>
    </div>
    <div class="divider"></div>
    <div  class="board-body">
      <input @focus="focus = true"
             v-model="text"
             placeholder="Write something">
      <div v-if="focus" class="board-body-action">
        <div  :class="{active: text}"
              @click="addToList()"
              class="board-body-action__save">SAVE</div>
        <div @click="focus = false, text = ''" class="board-body-action__cancel">CANCEL</div>
      </div>
    </div>
    <template v-if="list.length > 0">
      <div class="divider"></div>
      <div class="board-list">
        <div v-for="(comment, index) in list" :key="index"
              class="board-list-label">
          <list :info="comment" :indexValue="index"/>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import List from './List'

export default {
  name: 'ArtBoard',
  components: { List },
  data: () => ({
    focus: false,
    text: '',
    list: [],
    day: ''
  }),
  methods: {
    addToList () {
      if (this.text) {
        let info = {
          text: '',
          day: '',
          month: ''
        }
        info.text = this.text
        info.day = this.getDay()
        info.month = this.getMonth()
        this.list.unshift(info)
        this.focus = false
        this.text = ''
      }
    },
    getMonth () {
      let d = new Date()
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      return months[d.getMonth()]
    },
    getDay () {
      let d = new Date()
      return d.getDate()
    },
    deleteFromList (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.board {
  margin: auto;
  max-width: 460px;
  width: 80%;
  border-radius: 3px;
  background-color: #fdffec;
  border-left: 4px solid #7ac016;
  padding: 10px 20px;
  text-align: left;
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 10px;
    &-info {
      color: #7ac016;
      text-align: left;
      &__header {
        font-weight: bold;
      }
      &__title {
        font-size: 14px;
      }
    }
    &-button {
      background-color: #7ac016;
      color: white;
      padding: 12px 24px;
      font-size: 12px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      text-transform: uppercase;
    }
   }
  &-body {
    padding: 10px 0;
    &-action {
      display: flex;
      font-size: 10px;
      margin-top: 10px;
      &__save {
        padding: 7px 12px;
        background-color: rgba(128, 128, 128, 0.5);
        border-radius: 4px;
        color: white;
        cursor: pointer;
        margin-right: 10px;
      }
      &__cancel {
        padding: 7px 12px;
        background-color: white;
        border: 1px solid rgba(128, 128, 128, 0.5);
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
  &-list {
    padding: 10px 0;
    &-label {
      padding-bottom: 15px;

    }
  }
  & p {
    margin: 0;
    line-height: 20px;
  }
}
input {
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
}
.divider {
  border-top: 1px solid rgba(128, 128, 128, 0.5);
}
.active {
  background-color: #20bbd2;
  transition: 0.3s;
}
.dropdown {
  padding-left: 5px;
  cursor: pointer;
}
</style>
