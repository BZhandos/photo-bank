<template>
  <div class="section-box s3-wrap" id="section3">
    <default-description
      title="MY CLIENTS AND TESTIMONIALS"
      subtitle="The reviews of my happy customers are collected from everywhere(upwork.com, linkedin.com) in this amazing swiper, please check this out!"
    />
    <swiper class="swiper"
            @slideChange="slideChanges"
            @init="slideChanges"
            :options="swiperOption"
            ref="my-swiper">
      <swiper-slide v-for="(item, index) in slides" :key="index">
          <div class="reviewer">
            <img :src="require('@/assets/images/reviews/' + item.img)" alt="soon.."/>
          </div>
          <div class="slide__content">
            <p class="slide__content-title">{{ item.from }}</p>
            <p class="slide__content-subtitle">Happy {{ item.status }}</p>
            <p class="slide__content-content">{{ item.content }}</p>
            <p class="slide__content-via">via {{ item.via }}</p>
          </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import DefaultDescription from '../../components/blocks/defaultDescription'
export default {
  name: 'Section_03',
  components: { DefaultDescription },
  data: () => ({
    slides: [
      {
        id: 1,
        from: 'Magora systems',
        via: 'upwork',
        img: 'magora.png',
        status: 'client',
        content: 'It was a big pleasure working with Zhandos! Very communicative and active developer. Looking forward to working with him on new projects!'
      },
      {
        id: 2,
        from: 'Jerry Case',
        via: 'upwork',
        img: 'upwork.png',
        status: 'client',
        content: 'Good work, quick revisions, clean code. Skills 5.0 Quality 5.0 Availability 5.0 Deadlines 5.0 Communication 5.0 Cooperation 5.0'
      },
      {
        id: 3,
        from: 'Idrissova Zhazira',
        via: 'linkedin',
        img: 'zhazira_i.jpeg',
        status: 'client from atsmartstudy.com',
        content: 'A very talented specialist in his field. Zhandos understands the problem well and offers his own solutions. Quality of work 10 out of 10. Thank you and  looking forward to working with you again!'
      }
    ],
    swiperOption: {
      slidesPerView: "auto",
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
  }),
  computed: {
    swiper () {
      return this.$refs["my-swiper"].$swiper
    }
  },
  methods: {
    slideChanges () {
      console.log(this.swiper.activeIndex)
    }
  }
}
</script>

<style lang="scss">
.s3-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.swiper {
  width: 100%;
}
.swiper-slide {
  max-width: 450px;
  width: 100%;
  padding: 80px 0 28px;
  .reviewer {
    display: none;
    position: absolute;
    top: 40px;
    right: 50px;
    z-index: 3;
    & img {
      border: 1px solid #a8a8a8;
      border-radius: 50%;
      padding: 2px;
      width: 80px;
      height: 80px;
      background-color: #fff;
    }
  }
  .slide__content {
    position: relative;
    height: 250px;
    padding: 40px 65px;
    background: #f9f9f9;
    border: 1px solid #a8a8a8;
    border-radius: 4px;
    width: 100%;
    transform: scale(0.6);
    opacity: 0.5;
    will-change: contents;
    transition: 0.3s ease all;
    text-align: left;
    line-height: 1.5;
    &-title {
      color: #666;
      font-weight: bold;
      font-size: 14px;
    }
    &-subtitle {
      color: #999;
      font-weight: bold;
      font-size: 12px;
      margin-bottom: 10px;
    }
    &-content {
      color: gray;
      font-size: 10px;
    }
    &-via {
      color: #666;
      position: absolute;
      bottom: 10px;
      font-weight: bold;
      font-size: 8px;
      text-transform: uppercase;
      text-decoration: underline dotted;
    }
  }
}
.swiper-slide-active{
  .slide__content{
    transform: scale(1);
    opacity: 1;
    transition: 0.5s ease all;
  }
  .reviewer {
    display: block;
    animation: fade-in 2s;
  }
}
.swiper-pagination {
  bottom: 0 !important;
}
.swiper-pagination-bullet {
  background: #FAC921;
}
.swiper-pagination-bullet-active {

}
@keyframes fade-in {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
