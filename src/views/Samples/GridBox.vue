<template>
  <div class="container">
    <div class="row flex-column-reverse flex-sm-row">
      <div class="col-md-3 left card shadow mb-3">
        <div class="card-body px-0 d-flex flex-column align-items-center">
<!--          <div class="thumb shadow" :style="{ backgroundImage: `url(${supplier.image})` }"></div>-->
<!--          <div class="name">{{ supplier.name }}</div>-->
          <ul class="list-unstyled w-100">
            <li><i class="fa fa-eye"></i> Lorem ipsum dolor sit amet</li>
            <li><i class="fa fa-eye"></i> Lorem ipsum dolor sit amet</li>
            <li><i class="fa fa-eye"></i> Lorem ipsum dolor sit amet</li>
            <li><i class="fa fa-eye"></i> Lorem ipsum dolor sit amet</li>
          </ul>

          <ul class="list-unstyled w-100">
<!--            <li><b>Email: </b><a :href="`mailto:${ supplier.email }`">{{ supplier.email }}</a></li>-->
<!--            <li><b>Phone: </b><a :href="`tel:${ supplier.mobile }`">{{ supplier.mobile }}</a></li>-->
<!--            <li><b>Website: </b><a target="_blank" :href="supplier.insurl">{{ supplier.insurl }}</a></li>-->
          </ul>
        </div>
      </div>
      <div class="col-md-9" v-if="tabs">
        <Tabs :tabs="tabs" v-model="tab"/>
        <div class="tab-pane container px-0 my-2 active">
          <h3 class="text-center">{{ currentTab.title }}</h3>
          <p v-html="currentTab.content"></p>
          <!--                    <div class="row flex-wrap">-->
          <!--                        <div class="col-md-6" v-for="item in currentTab.content" :key="item.id">-->
          <!--                            <h4>{{ item.title }}</h4>-->
          <!--                            <p>{{ item.content }}</p>-->
          <!--                        </div>-->
          <!--                    </div>-->
        </div>
      </div>
    </div>

    <h2>Products</h2>
    <div class="products-wrap">
      <div class="products-wrap-box" v-for="product in products" :key="product.id">
        <div class="products-wrap-box__icon">
          Icon is here
        </div>
        <p class="products-wrap-box__name">{{product.name}}</p>
      </div>
    </div>
    <div class="d-flex justify-content-md-between justify-content-center flex-wrap">
<!--      <ProductBoxSm class="mb-3" v-for="item in supplier.products" :key="item.id" :product="item"-->
<!--                    @click.native="$router.push({ name: 'product', params: { id: item.id } })"/>-->
    </div>
  </div>
</template>

<script>
// import { getSupplier } from '../api'
//import Tabs from '../components/Tabs'
//import ProductBoxSm from '../components/product/ProductBoxSm'

  export default {
    name: "GridBox",
    //components: {ProductBoxSm, Tabs},
    props: {
      // id: {
      //   required: true,
      //   type: String | Number
      // }
    },
    data () {
      return {
        supplier: {},
        tab: 0,
        products: [
          { id: 1, name: 'Product 1' },
          { id: 2, name: 'Product 2' },
          { id: 3, name: 'Product 3' },
          { id: 4, name: 'Product 4' },
          { id: 5, name: 'Product 5' },
          { id: 6, name: 'Product 6' }
        ]
      }
    },
    // computed: {
    //   tabs () {
    //     return [
    //       {
    //         title: 'About us',
    //         content: this.supplier.about
    //       },
    //       {
    //         title: 'Our vision',
    //         content: this.supplier.our_vision
    //       },
    //       {
    //         title: 'Our Team',
    //         content: this.supplier.our_team
    //       },
    //       {
    //         title: 'Our Service',
    //         content: this.supplier.our_service
    //       },
    //     ]
    //   },
    //   currentTab () {
    //     return this.tabs[this.tab]
    //   }
    // },
    // async created () {
    //   this.supplier = await getSupplier(this.id)
    // }
  }
</script>

<style scoped lang="scss">
  .container {
    background-color: #fff;
  }
  .left {
    background-color: #ff9a22;
    color: #fff;

    .thumb {
      width: 80%;
      padding-top: 80%;
      background-size: cover;
      border-radius: 50%;
    }

    .name {
      font-size: 24px;
      padding: 10px 0;
    }

    a {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    .left {
      border-radius: 0;
      margin: 1rem;
      width: calc(100% - 2rem);
    }
  }
.products-wrap {
  padding: 20px 0;
  max-width: 1008px;
  margin: 0 auto 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(228px, 228px));
  grid-gap: 32px;
  &-box {
    height: 228px;
    width: 228px;
    border-radius: 20px;
    box-shadow: 0px 0px 4px 0px rgba(213, 213, 213, 0.75);
    display: flex;
    justify-content: center;
    flex-direction: column;
    &__icon {

    }
    &__name {

    }
  }
}
</style>
