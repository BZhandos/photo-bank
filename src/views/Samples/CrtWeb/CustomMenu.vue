<template>
  <div class="item-box">
    <p class="item-box-title">{{flatInfo.attributes.title}}</p>
    <p> Полный адрес: {{getAddress}}</p>
    <p>Кличество комнат: {{flatInfo.attributes.rooms}} | {{flatInfo.attributes.area}}{{flatInfo.attributes.unit | unitSign}}</p>
    <div  class="item-box-type">
      <p class="item-box-type__owner">{{getOwnersFullName}}</p>
      <p class="item-box-type__role">{{flatInfo.relationships.type}}</p>
    </div>

    <svg @click="likeHandler()" class="heart" :class="{'liked': flatInfo.liked}" viewBox="0 0 32 29.6">
      <path fill="#2e7c59" d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg>
  </div>
</template>

<script>
import units from "@/helpers/filter/units";
export default {
  name: "CustomMenu",
  props: {
    flatInfo: {
      type: Object,
      required: true
    }
  },
  filters: {
    unitSign: units.unitSign
  },
  computed: {
    getAddress () {
      const fullAddress = this.flatInfo.attributes.address
      let readableAddress = `${fullAddress.city}, ${fullAddress.street} ${fullAddress.house}`
      // ${fullAddress.room}
      return fullAddress.room ? `${readableAddress}, кв:${fullAddress.room}` : readableAddress
    },
    getOwnersFullName () {
      const attributes = this.flatInfo.relationships.attributes
      const fullNameWtihШnitials = `${attributes.last_name} ${attributes.first_name.charAt(0)}.${attributes.middle_name.charAt(0)}.`
      return fullNameWtihШnitials
    }
  },
  methods: {
    likeHandler () {
      this.flatInfo.liked = !this.flatInfo.liked
      //Api.postRequest(this.flatInfo.id, this.flatInfo.liked)
    }
  }
}
</script>

<style scoped lang="scss">
.item-box {
  width: 100%;
  max-width: 370px;
  color: #2e7c59;
  text-align: left;
  margin: 10px 10px 20px 10px;
  &-title {
    font-size: 24px;
  }
  &-type {
    display: flex;
    align-items: center;
    margin: 5px 0;
    &__owner {
      margin-right: 10px;
    }
    &__role {
      background: #fac921;
      color: #1b1f20;
      border-radius: 12px;
      padding: 4px 15px;
      font-weight: bold;
    }
  }
}
.heart {
  width: 24px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
  path {
    fill: gray;
    transition: .3s;
  }
}
.liked {
  path {
    fill: red;
  }
}
</style>
