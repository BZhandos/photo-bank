<template>
  <div>
    <div class="board-list-label__text">
      <input v-model="info.text" :readonly= !info.shown />
    </div>
    <div class="board-list-label__info">
      <i class="fa fa-user-circle"></i>
      <p class="board-list-label__info-name">John Doe</p>
      <p class="board-list-label__info-date">, {{info.day}} <span>{{info.month}}</span></p>
      <i @click="info.shown = !info.shown"
         class="fa fa-angle-down dropdown"></i>
      <div v-if="info.shown"
           class="board-list-label__info-dropdown">
        <p>Редактировать</p>
        <div class="divider"></div>
        <p>Удалить</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    info: (Object, String)
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
</style>
