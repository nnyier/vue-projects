<template>
    <swiper :options="swiperOption" ref="mySwiper" class="my-swiper">
        <swiper-slide class="slide slide1"></swiper-slide>
        <swiper-slide class="slide slide2"></swiper-slide>
        <swiper-slide class="slide slide3"></swiper-slide>
        <swiper-slide class="slide slide4"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        direction: "horizontal",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        mousewheel: true,
        observeParents: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.my-swiper {
  height: 300px;
}
.slide1 {
  height: 300px;
  width: 100%;
  background: url(slide1.jpg) no-repeat;
  background-size: 100%;
}

.slide2 {
  height: 300px;
  width: 100%;
  background: url(slide2.jpg) no-repeat;
  background-size: 100%;
}

.slide3 {
  height: 300px;
  width: 100%;
  background: url(slide3.jpg) no-repeat;
  background-size: 100%;
}
.slide4 {
  height: 300px;
  width: 100%;
  background: url(slide4.jpg) no-repeat;
  background-size: 100%;
}
</style>
