<template>
  <div class="section-box s3-wrap" id="section3">
    <default-description
      title="MY CLIENTS AND TESTIMONIALS"
      subtitle="In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida."
    />
    <swiper class="swiper"
            @slideChange="slideChanges"
            @init="slideChanges"
            :options="swiperOption"
            ref="my-swiper">
      <swiper-slide v-for="(item, index) in slides" :key="index">
          <div class="reviewer">
            <img src="https://sun9-48.userapi.com/c840324/v840324828/29098/P5RdRXDwI0Q.jpg"/>
          </div>
          <div class="slide__content">
            <p class="slide__content-title">{{ item.from }}</p>
            <p class="slide__content-subtitle">{{ item.from }}</p>
            <p class="slide__content-content">{{ item.content }}</p>
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
      { id: 1, from: 'Magora systems', content: 'It was a big pleasure working with Zhandos! Very communicative and active developer. Looking forward to working with him on new projects!' },
      { id: 2, from: 'ME2', content: ' "In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonu mmy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."' },
      { id: 3, from: 'ME3', content: ' "In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonu mmy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."' },
      { id: 4, from: 'ME4', content: ' "In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonu mmy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."' },
      { id: 5, from: 'ME5', content: ' "In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonu mmy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."' },
      { id: 6, from: 'ME6', content: ' "In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonu mmy nibh euismod tincidunt ut laoreet dolore magna aliquam erat."' }
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
  flex-direction: column;
}
.swiper-slide {
  max-width: 500px;
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
    min-height: 300px;
    padding: 30px 65px;
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
      color: red;
      font-size: 14px;
    }
    &-subtitle {
      color: gray;
      font-size: 12px;
      margin-bottom: 10px;
    }
    &-content {
      color: gray;
      font-size: 10px;
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
.swiper-pagination-bullet {
  background: #FAC921;
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
