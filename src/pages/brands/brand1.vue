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
            <img src="../../assets/brand1-1.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="item">
            <img src="../../assets/brand1-2.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="item">
            <img src="../../assets/brand1-3.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="item">
            <img src="../../assets/brand1-4.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="item">
            <img src="../../assets/brand1-5.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="item">
            <img src="../../assets/brand1-6.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="item">
            <img src="../../assets/brand1-8.jpg" alt="" />
          </swiper-slide>
          <swiper-slide class="item">
            <img src="../../assets/brand1-9.jpg" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="intro">
      <div class="up_title">
        <div class="up_tit">诗婷品牌故事</div>
        <div class="down_tit">Brand story</div>
      </div>
      <div class="up animate__animated animate__fadeInLeft">
        <br />
        <span style="line-height: 35px">一位新鲜丽人的心情故事。</span>
        <br />
        <span style="line-height: 35px"
          >我，一位新生代的新鲜丽人，有一个浪漫而又诗意的名字一一诗婷。</span
        >
        <br />
        <span style="line-height: 35px"
          >理想、目标，渴望浪漫、梦幻般的爱情......</span
        ><br />
        <span style="line-height: 35px"
          >个性、感性，喜欢以幻变的方式采撷和追逐自己的青春梦想·.....</span
        ><br />
        <span style="line-height: 35px"
          >活力、激情，喜欢用自己的思维感悟和改变世界.....·过着无忧无虑的快乐生活，追求新颖、创意、个性的自我空间，玩乐的个性和那份难得的纯</span
        ><br />
        <span style="line-height: 35px"
          >真，将久藏心底的那份不逊和自我表露 无遗......</span
        ><br />
        <span style="line-height: 35px"
          >诗婷，一位个性、自我、美丽的新鲜丽人，如阳光下灿烂的花朵在漫舞，又
          以荷塘边多彩的蜻蜓在飞扬，更似流畅的音符在欢唱......采集国际流行时尚元素，带你如同走进五彩斑斓精
          彩的美丽新世界......</span
        ><br />
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
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
}
.con {
  height: 100%;
  width: 75%;
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
