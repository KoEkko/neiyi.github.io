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
        <div class="up_tit">美思品牌故事</div>
        <div class="down_tit">品牌故事</div>
      </div>
      <div class="up animate__animated animate__fadeInLeft" >
        <br />
        <span style="line-height: 35px"
          >美思:见字闻香，源自女人“天生爱美，慧有所思”的韵味与意境，音节美妙动、字律温雅清脆，女性的美丽、优雅、聪慧蕴涵其中。</span
        >
        <br />
        <span style="line-height: 35px"
          >美思标志“M”造型犹如女性娇健、丰满的胸型，又似一只翩翩起舞的彩蝶在自日飞翔，流畅灵动的线条隐藏“心”形，象征爱心，巧妙地把品牌文化与核心价值隐寓于其中。热情奔</span
        >
        <br />
        <span style="line-height: 35px">放的美思“红”，更充分展现了成熟女性对时尚生活的追求和由内而发的优雅魅</span><br />
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
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
