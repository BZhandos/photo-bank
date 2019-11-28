<template>
  <div>
    <div class="board-list-label__text">
      <input
             v-model= "info.text"
             :readonly= !edit />
    </div>
    <div v-if="!edit" class="board-list-label__info">
      <i class="fa fa-user-circle"></i>
      <p class="board-list-label__info-name">John Doe</p>
      <p class="board-list-label__info-date">, {{info.day}} <span>{{info.month}}</span></p>
      <i @click="show = !show"
         class="fa fa-angle-down dropdown"></i>
      <div v-if="show"
           class="board-list-label__info-dropdown"
      :class="{alert: deleteAlert}">
        <template v-if="!deleteAlert">
          <p @click="editHandler()">Редактировать</p>
          <div class="divider"></div>
          <p @click="deleteAlert = true">Удалить</p>
        </template>
        <template v-if="deleteAlert">
          <div class="board-list-label__info-dropdown-delete">Удаление комментария</div>
          <div class="divider"></div>
          <div class="action-delete">
            <div  @click="deleteHandler()"
                  class="action-delete__save">УДАЛИТЬ</div>
            <div @click="deleteAlert = false, show = false" class="action-delete__cancel">ОТМЕНА</div>
          </div>
        </template>
      </div>
    </div>
    <div v-if="edit" class="action">
      <div  :class="{active: info.text !== temp}"
            @click="save()"
            class="action__save">СОХРАНИТЬ</div>
      <div @click="cancel()" class="action__cancel">ОТМЕНА</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    info: Object,
    indexValue: Number
  },
  data: () => ({
    temp: '',
    edit: false,
    show: false,
    deleteAlert: false
  }),
  created () {
    this.temp = this.info.text
  },
  methods: {
    editHandler () {
      this.edit = true
      this.show = false
    },
    save () {
      this.temp = this.info.text
      this.edit = false
    },
    cancel () {
      this.info.text = this.temp
      this.edit = false
    },
    deleteHandler () {
      this.deleteAlert = false
      this.show = false
      this.$parent.deleteFromList(this.indexValue)
    }
  }
}
</script>

<style scoped lang="scss">
.board-list-label {
  &__text {
    & input {
      font-size: 16px;
    }
  }
  &__info {
    position: relative;
    display: flex;
    align-items: center;
    &-name {
      color: gray;
      font-size: 12px;
      font-weight: bold;
      padding-left: 5px;
      text-transform: uppercase;
    }
    &-date {
      color: rgba(128, 128, 128, 0.5);
      font-size: 9px;
      text-transform: uppercase;
      & span {
        font-size: 12px;
      }
    }
    &-dropdown {
      z-index: 10;
      top: 20px;
      position: absolute;
      left: 40%;
      font-size: 14px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 5px 0 gray;
      &-delete {
        font-weight: bold;
        box-sizing: border-box;
        font-size: 12px;
        padding: 12px 17px;
        border-radius: 4px;
      }
      & p {
        box-sizing: border-box;
        padding: 12px 17px;
        font-size: 12px;
        cursor: pointer;
        border-radius: 4px;
        &:hover {
          background-color: whitesmoke;
          transition: 0.2s;
        }
      }
    }
  }
}
.action {
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
  &-delete {
    display: flex;
    font-size: 10px;
    margin: 10px;
    &__save {
      padding: 7px 12px;
      background-color: #db395f;
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
p {
  margin: 0;
  line-height: 20px;
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
.dropdown {
  padding-left: 5px;
  cursor: pointer;
}
.active {
  background-color: #20bbd2;
  transition: 0.3s;
}
.alert {
  max-width: 240px;
  width: 100%;
}
</style>
