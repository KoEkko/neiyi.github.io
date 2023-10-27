<template>
  <div class="profile">
    <div class="head">
      <img src="../../assets/honor_1.jpg" alt="" />
    </div>
    <div class="head_tit">
      <div class="h_t">
        <div class="up">企业荣誉</div>
      <div class="down">Honor Show</div>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <div class="left_img">
          <img src="../../assets/hon_2.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="profile">
          <p
            style="font-size: 28px; color: rgb(68, 68, 68); text-align: center"
          >
          企业标准领航者<br> 
          </p>
          <br />
          <p class="p_s" style="font-size: 12px; color: rgb(64, 64, 64); font-weight: 300;" >
          <p>CNAS--中国合格评定国家认证实验室</p> <br />
            <p>CQC--中国环保产品认证</p> <br />
            <p>
              年度创新奖标 &nbsp; 准化良好行为AAAA级证书
            </p> <br>
            <p>
              国家标准企业单位(文胸，泳衣，塑身衣)
              <br>
            </p>
            <br />
            <p>
              广东省先进制造业标准化示范单位
            </p>
            <br />
            <p>
              连续一年获得:佛山最具成长性中小企业
            </p>
            <br />
            <p>   
              广东省制造业500强  广东省制造业优秀企业  纳税超千万企业
            </p>
            <br />
            <p>   
              南海制造业全国隐形冠军全国内衣产业知名品牌创建示范区 骨干企业

            </p>
            <br />
            <p>     
              广东省民营科技企业

            </p>
            <br />
            <p>     
              中国保健协会保健功能针织品科研示范基地  

            </p>
            <br />
            <p>
              广东省美思时尚保健内衣工程技术研究中心
            
            </p>
            <br>
            <p>
              佛山市高精特新企业
            </p>
            <br>
          </p>
        </div>
      </div>
    </div>
    <div class="photos">
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
    >
      <swiper-slide class="item"
        ><img
          src="../../assets/hon_3.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="item"
        ><img
          src="../../assets/hon_3.jpg"
          alt=""
        /></swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../../assets/hon_1.jpg"
          alt=""
        /></swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../../assets/hon_4.jpg"
          alt=""
        /></swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../../assets/hon_5.jpg"
          alt=""
        /></swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../../assets/hon_6.jpg"
          alt=""
        /></swiper-slide
      >
      <swiper-slide class="item"
        ><img
          src="../../assets/hon_7.jpg"
          alt=""
        /></swiper-slide
      >
    </swiper>
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
.head {
  width: 100%;
  height: 400px;
}
.head img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main {
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.head_tit {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}
.h_t {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.s_t {
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.big {
  color: rgb(73, 110, 232);
  font-size: 28px;
  font-family: "微软雅黑";
  text-align: center;
}
.small {
  color: rgba(128, 128, 128, 1);
  font-size: 14px;
  font-family: "微软雅黑";
  text-align: center;
}

.content {
  display: flex;
  justify-content: center;
  margin-top: 150px;
}
.left {
  margin-top: 40px;
  flex: 1;
  margin-left: 200px;
}
.right {
  display: flex;
  flex-direction: column;
  flex: 2;
}
.right .profile {
  display: flex;
  flex-direction: column;
  line-height: 30px;
  padding: 20px 30px;
  background-image: url(../../assets/history3.jpg);
  background-repeat: no-repeat;
}
.left_img img {
  margin-left: 80px;
  width: 70%;
}

.culture {
  margin-top: 100px;

}
.cul_tit {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tit_box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.up {
  font-size: 28px;
  color: rgb(68, 68, 68);
  line-height: 35px;
}
.down {
  font-size: 16px;
  color: #bbb;
  line-height: 35px;
}

.web_content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.web_row {
  width: 1400px;
  height: 360px;
  margin-top: 60px;
  margin-bottom: 100px;
}
.row_tit {
  font-size: 24px;
  color: #333333;
}
.web_col {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}
.web_tit {
  font-size: 18px;
  color: #333333;
  margin-top: 10px;
}
.web_t {
  font-size: 14px;
  color: #999999;
}


.photos {
  height: 300px;
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
}

.photos .item {
  width: 150px;
  height: 150px;
}
.photos .item img{
  width: 100%;
  height: 100%;
}
</style>
