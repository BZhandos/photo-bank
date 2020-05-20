<template>
    <div class="search-wrap"
          :class="{'error': empty}">
      <form v-on:submit.prevent="checkEmptyHandler()">
        <input v-model="query">
        <transition name="slide">
          <div v-if="empty"
               class="search-wrap__error">
            <p>Searching field is empty. Enter something like
              <span @click="someFun()">WALL-E</span>
            </p>
          </div>
        </transition>
      </form>
      <div
        class="search-wrap-button"
        @click="checkEmptyHandler()">
        <i class="fa fa-search"></i> Search
      </div>
    </div>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    query: '',
    empty: false
  }),
  methods: {
    search () {
      this.$router.push('/search/' + this.query)
    },
    checkEmptyHandler () {
      if (this.query !== '') {
        this.search()
        this.empty = false
      } else this.empty = true
    },
    someFun () {
      let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/Whoa.mp3')
      audio.play()
      this.$router.push('/search/WALL-E')
    }
  }
}
</script>

<style scoped lang="scss">
.search-wrap {
  & input {
    border-radius: 50px;
    border: none;
    outline: none;
    padding: 10px 15px;
    max-width: 300px;
    width: 70%;
    margin: 10px;
  }
  &__error {
    margin-bottom: 20px;
    & span {
      color: yellow;
      font-weight: bold;
      cursor: pointer;
    }
  }
  &-button {
    box-sizing: border-box;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    width: 150px;
    margin: auto;
    border: 1px solid #787280;
    border-radius: 5px;
    transition: .3s;
    &:hover {
      background-color: #9eccff;
    }
  }
}
.error input {
  border: 1px solid red;
}
.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
