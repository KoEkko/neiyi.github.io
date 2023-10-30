<template>
  <div class="profile">
    <div class="head">
      <img src="../../assets/history1.jpg" alt="" />
    </div>
    <div class="head_tit">
      <div class="h_t">
        <div class="up">发展历程</div>
      <div class="down">DEVELOPMENT HISTORY</div>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <div class="left_img">
          <img src="../../assets/history2.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="profile">
          <br />
          <p class="p_s" style="font-size: 12px; color: rgb(64, 64, 64); font-weight: 300;" >
            <p>{{ $t("h_1") }}</p> <br />
            <p>{{ $t("h_2") }}</p> <br />
            <p>
              {{ $t("h_3") }}
            </p> <br>
            <p>
              {{ $t("h_4") }}
              <br>
            </p>
            <br />
            <p>
              {{ $t("h_5") }}
            </p>
            <br />
            <p>
              {{ $t("h_6") }}
            </p>
            <br />
            <p>   
              {{ $t("h_7") }}
            </p>
            <br />
            <p>   
              {{ $t("h_8") }}

            </p>
            <br />
            <p>     
              {{ $t("h_9") }}

            </p>
            <br />
            <p>     
              {{ $t("h_10") }}

            </p>
            <br />
            <p>
              {{ $t("h_11") }}
            
            </p>
            <br>
          </p>
        </div>
      </div>
    </div>
    <div class="photos">
      <div class="box">
        <div class="box_img">
        <img src="../../assets/hi_1.jpg" alt="">
        </div>
        <div class="box_tit">
        </div>
      </div>
      <div class="box">
        <div class="box_img">
        <img src="../../assets/hi_2.jpg" alt="">
        </div>
        <div class="box_tit">
        </div>
      </div>
      <div class="box">
        <div class="box_img">
        <img src="../../assets/hi_3.jpg" alt="">
        </div>
        <div class="box_tit">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
  display: flex;
  align-items: center;
  height: 230px;
  margin-top: 100px;
  margin-bottom: 200px;
}
.photos .box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.box_img {
  height: 150px;
  width: 300px;
  margin-top: 50px;
  padding-bottom: 20px;
}
.box_img img{
  width: 100%;
  height: 100%;
}

.box_tit {

}
</style>
