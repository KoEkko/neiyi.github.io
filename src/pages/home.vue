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

<template>
  <div class="block text-center">
    <el-carousel height="900px" class="fa">
      <el-carousel-item class="img-box">
        <img src="../assets/1.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item class="img-box">
        <img src="../assets/2.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item class="img-box">
        <img src="../assets/3.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item class="img-box">
        <img src="../assets/4.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item class="img-box">
        <img src="../assets/5.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item class="img-box">
        <img src="../assets/6.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item class="img-box">
        <img src="../assets/7.jpg" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="swiper-one">
    <div class="title animate__animated animate__fadeInLeft">系列</div>
    <swiper
      :modules="modules"
      :slides-per-view="6"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :navigation="{}"
      class="animate__animated animate__fadeInRight"
    >
      <swiper-slide class="item"
        ><img
          src="../assets/1-初階系列-Level-1-Basic-150x150.jpg"
          alt=""
        />初阶系列
      </swiper-slide>
      <swiper-slide class="item"
        ><img
          src="../assets/2-進階系列-Level-2-Support-150x150.jpg"
          alt=""
        />进阶系列</swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../assets/3-高階系列-Level-3-Unify-150x150.jpg"
          alt=""
        />高阶系列</swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../assets/4-T-Shirt-Bra-150x150.jpg"
          alt=""
        />T-Shirt-Bra</swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../assets/5-全罩杯系列-Extended-Bra-150x150.jpg"
          alt=""
        />全罩杯系列</swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../assets/6-香港製造系列-Made-in-Hong-Kong-150x150.jpg"
          alt=""
        />香港制造系列</swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../assets/7-記憶鋼圈系列-Memory-Wire-Bra-150x150.jpg"
          alt=""
        />记忆钢圈系列</swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../assets/8-無鋼圈系列-Wireless-Bra-150x150.jpg"
          alt=""
        />无钢圈系列</swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../assets/9-美背系列-Butterfly-Collection-150x150.jpg"
          alt=""
        />美背系列</swiper-slide
      >
    </swiper>
  </div>
  <div class="swiper-two">
    <div class="title animate__animated animate__fadeInLeft">
      塑形系列及其他
    </div>
    <swiper
      :modules="modules"
      :slides-per-view="6"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :navigation="{}"
      class="animate__animated animate__fadeInRight"
    >
      <swiper-slide class="item"
        ><img src="../assets/10-塑形背心-Vest-150x150.jpg" alt="" />塑形背心
      </swiper-slide>
      <swiper-slide class="item"
        ><img
          src="../assets/11-塑形束衣-BodiShape-150x150.jpg"
          alt=""
        />塑形束衣</swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../assets/12-塑形束褲-BodiShape-Pants-150x150.jpg"
          alt=""
        />塑形束褲</swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../assets/13-腰封-Girdle-150x150.jpg"
          alt=""
        />腰封</swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../assets/14-配件-Others-150x150.jpg"
          alt=""
        />配件</swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../assets/14-配件-Others_2-150x150.jpg"
          alt=""
        />配件</swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../assets/15-內褲-Pants-150x150.jpg"
          alt=""
        />內褲</swiper-slide
      >
    </swiper>
  </div>
</template>

<style scoped>
.block {
  position: relative;
}
.fa {
  position: relative;
}
.img-box {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  overflow: hidden;
}
.img-box img {
  width: 100%;
  height: 100%;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
}
.swiper-button-prev .swiper-button-next {
  color: #eee !important;
}

.title {
  background-color: #86ccc5;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
}
</style>
