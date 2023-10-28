<template>
  <div class="brand2">
    <div class="swiper">
      <div class="con">
        <swiper
          :modules="modules"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :navigation="{}"
        >
          <swiper-slide class="item">
            <img src="../../assets/brand2.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="item">
            <img src="../../assets/brand2-2.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="item">
            <img src="../../assets/brand2-3.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="item">
            <img src="../../assets/brand2-4.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="item">
            <img src="../../assets/brand2-5.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="item">
            <img src="../../assets/brand2-6.jpg" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="intro">
      <div class="up_title">
        <div class="up_tit">{{$t("brand2-1")}}</div>
        <div class="down_tit">{{$t("brand2-2")}}</div>
      </div>
      <div class="up animate__animated animate__fadeInLeft" >
        <br />
        <span style="line-height: 35px"
          >{{$t("brand2-3")}}</span
        >
        <br />
        <span style="line-height: 35px"
          >{{$t("brand2-4")}}</span
        >
        <br />
        <span style="line-height: 35px">{{$t("brand2-5")}}</span><br />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
// import Swiper core and required modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
const modules = [Navigation, Scrollbar, A11y, Autoplay];
</script>

<style scoped>
.swiper {
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
}
.con {
  height: 100%;
  width: 85%;
}

.item img {
  width: 100%;
  height: 100%;
}


.intro {
  width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
}
.up {
  width: 1200px;
  margin: 0 auto;
  text-align: left;
}
.up_title,
.down_title {
  font-size: 28px;
  color: rgb(68, 68, 68);
  line-height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.up_tit {
  font-size: 28px;
  color: #414141;
}
.down_tit {
  font-size: 16px;
  color: #414141;
}

</style>
