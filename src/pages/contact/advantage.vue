<template>
  <div class="advantage">
    <div class="show_img">
      <div class="content">
        <div class="one">
          <div class="img">
            <img src="../../assets/advance1.jpg" alt="" />
          </div>
          <div class="text">
            <span>{{$t("advan-10")}}</span>
            <span style="color: rgb(254, 118, 0); font-size: 20px">-</span>
          </div>
        </div>
        <div class="two">
          <div class="text" style="margin-bottom: 80px">
            <span>{{ $t("advan-12")}}</span>
            <span style="color: rgb(254, 118, 0); font-size: 20px">-</span>
          </div>
          <div class="img">
            <img src="../../assets/advance3.jpg" alt="" />
          </div>
        </div>
        <div class="three">
          <div class="img">
            <img src="../../assets/advance2.jpg" alt="" />
          </div>
          <div class="text">
            <span>{{$t("advan-10")}}</span>
            <span style="color: rgb(254, 118, 0); font-size: 20px">-</span>
          </div>
        </div>
      </div>
    </div>
    <div class="intro">
      <div class="up_title">
        <div class="up_tit">{{ $t("advan-13") }}</div>
      </div>
      <div class="up">
        <br />
        <span style="line-height: 48px"
          >{{ $t("advan-1")}}</span
        >
        <br />
        <span
          >{{ $t("advan-2")}}</span
        >
        <br />
        <span>{{ $t("advan-3")}}</span><br />
        <span>{{ $t("advan-4")}}</span> <br />
        <span
          >{{ $t("advan-5")}}</span
        >
        <br />
      </div>
      <div class="down_title">
        <div class="up_tit">{{$t("advan-14")}}</div>
      </div>
      <div class="down">
        <span
          >{{ $t("advan-6")}}</span
        >
        <br />
        <span>{{ $t("advan-7")}}</span>
        <br />
        <span
          >{{ $t("advan-8")}}</span
        >
        <br />
        <span
          >{{ $t("advan-9")}}</span
        >
        <br />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.show_img {
  margin-top: 200px;
  margin-bottom: 150px;
}
.content {
  display: flex;
  margin: 0 80px;
}

.one,
.two,
.three {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}
.img {
  width: 400px;
  height: 624px;
}
.img img {
  width: 100%;
  height: 100%;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 22px;
  color: rgb(68, 68, 68);
  margin-top: 80px;
}

.intro {
  width: 1600px;
  margin: 0 auto;
}

.up,
.down {
  height: 400px;
  width: 1200px;
  margin: 0 auto;
  font-size: 16px;
  color: rgb(65, 65, 65);
}
.up, .down span {
  line-height: 48px;
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
  margin-top: 50px;
}

.down_tit {
  color: rgb(128, 128, 128);
  font-size: 16px;
  line-height: 35px;
}

.down {
  margin-bottom: -80px;
}
</style>
