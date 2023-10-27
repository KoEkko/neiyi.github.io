<template>
  <div class="profile">
    <div class="head">
      <img src="../../assets/join1.jpg" alt="" />
    </div>
    <!-- <div class="head_tit">
      <div class="h_t">
        <div class="up">企业荣誉</div>
      <div class="down">Honor Show</div>
      </div>
    </div> -->
    <div class="content">
      <div class="left">
        <div class="left_img">
          <img src="../../assets/join2.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="profile">
          <p
            style="font-size: 28px; color: rgb(68, 68, 68); text-align: center"
          >
          加盟流程<br> 
          </p>
          <br />
          <p class="p_s" style="font-size: 12px; color: rgb(64, 64, 64); font-weight: 300;" >
          <p>1、客户以电话、传真、E-mai1、微信或拜访方式传达加盟意向
客户填写《加盟申请表》</p> <br />
            <p>2、公司 (代理商)考察客户经营理念、店铺进行综合评估</p> <br />
            <p>
              3、客户签订特许加盟协议并交纳定金
            </p> <br>
            <p>
              4、公司 (代理商)提供店铺设计装修图纸，客户按图纸装修店铺
              <br>
            </p>
            <br />
            <p>
              5、客户支付首批货款，公司 (代理商) 结合客户要求配货
            </p>
            <br />
            <p>
              6、公司 (代理商)协助筹备策划开业并对店员进行培训
            </p>
            <br />
            <p>   
              7、加盟店开业
            </p>
            <br />
            <p>   
              8、公司 (代理商)派专人负责跟踪服务
            </p>
            <br />
          </p>
        </div>
      </div>
    </div>
    <div class="mid_content">
      <div class="mid_title">
        <div class="mid_up">加盟条件</div>
        <div class="mid_down">JOIN CONDITION</div>
      </div>
    </div>
    <div class="mid_summary">
        1、 认同公司品牌，接受特许加盟操作理念。
2、 具有相关内衣行业经验，并具备良好的商业信誉。<br>
3、具有较强的品牌意识，同时具备加盟专卖店经营管理能力。<br>
4、繁华路段拥有30平方米以上店铺或20平方米以上商场专柜 <br>
5、拥有运作资金20-50万元。
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
.mid_content {
  width: 1600px;
  height: 80px;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mid_summary {
  width: 1200px;
  margin: 0 auto;
  text-align: left;
  word-break: keep-all;
  margin-top: 30px;
  color: rgb(64, 64, 64);
  line-height: 48px;
  font-size: 16px;
}
.mid_title {
  width: 180px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.mid_up {
  font-size: 28px;
    color: rgb(68, 68, 68);
    text-align: center;
    line-height: 35px
}

.mid_down {
  text-align: center;
    line-height: 35px
}
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
