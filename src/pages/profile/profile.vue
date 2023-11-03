<template>
  <div class="profile">
    <div class="head">
      <img src="../../assets/profile.jpg" alt="" />
    </div>
    <div class="main">
      <div class="title">
        <div class="s_t">
          <div class="big">公司简介</div>
          <div class="small">Company profile</div>
        </div>
        <div class="s_t">
          <div class="big">企业文化</div>
          <div class="small">corporate culture</div>
        </div>
        <div class="s_t">
          <div class="big">发展历程</div>
          <div class="small">development history</div>
        </div>
        <div class="s_t">
          <div class="big">荣誉展示</div>
          <div class="small">Honor show</div>
        </div>
      </div>
      <div class="about">
        <div class="left">
          <div class="container">
            <div class="content"></div>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <div class="left_img">
          <img src="../../assets/profile_low.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="profile">
          <p
            style="font-size: 28px; color: rgb(68, 68, 68); text-align: center"
          >
            公司简介 ABOUT ME
          </p>
          <br />
          <div class="p_s">
            <strong>{{ $t("profile1-1") }}</strong> <br /><br />
            <strong>{{ $t("profile1-2") }}</strong> <br />
            {{ $t("profile1-3") }}<br /><br />

            <strong>{{ $t("profile1-4") }}</strong> <br />
            <li>
              <strong>{{ $t("profile1-5") }}</strong
              >{{ $t("profile1-6") }}
            </li>
            <li>
              <strong>{{ $t("profile1-7") }}</strong
              >{{ $t("profile1-8") }}
            </li>
            <li>
              <strong>{{ $t("profile1-9") }}</strong
              >{{ $t("profile1-10") }}
            </li>
            <li>
              <strong>{{ $t("profile1-11") }}</strong
              >{{ $t("profile1-12") }}
            </li>
            <li>
              <strong>{{ $t("profile1-22") }}</strong
              >{{ $t("profile1-13") }}
            </li>
            <br />
            <strong>{{ $t("profile1-14") }}</strong
            ><br />
            {{ $t("profile1-15") }}<br />
            <br />
            <strong>{{ $t("profile1-16") }}</strong> <br />
            <li>
              <strong>{{ $t("profile1-17") }}</strong
              >{{ $t("profile1-18") }}
            </li>
            <li>
              <strong>{{ $t("profile1-19") }}</strong
              >{{ $t("profile1-23") }}
            </li>
            <li>
              <strong>{{ $t("profile1-20") }}：info@yihan-bras.com</strong>
            </li>
            <br />
            {{ $t("profile1-21") }}
          </div>
        </div>
      </div>
    </div>
    <div class="culture">
      <div class="cul_tit">
        <div class="tit_box">
          <div class="up">企业文化</div>
          <div class="down">CORPORATE CULTURE</div>
        </div>
      </div>
      <div class="web_content animate__animated animate__fadeInLeft">
        <div class="web_row">
          <div class="row_tit">
            {{ $t("profile2-1") }}
          </div>
          <div class="web_col">
            <div class="web_p">
              <div class="web_tit">{{ $t("profile2-2") }}</div>
              <div class="web_t">{{ $t("profile2-3") }}</div>
              <div class="web_tit">{{ $t("profile2-4") }}</div>
              <div class="web_t">{{ $t("profile2-5") }}</div>
              <div class="web_tit">{{ $t("profile2-6") }}</div>
              <div class="web_t">{{ $t("profile2-7") }}</div>
              <div class="web_tit">{{ $t("profile2-8") }}</div>
              <div class="web_t">
                {{ $t("profile2-9") }}
              </div>
            </div>
            <div class="web_video">
              <video
                src="../../assets/1.mp4"
                playsinline
                muted
                autoplay
                loop
                preload="auto"
                controls
                class="video_box"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.head {
  width: 100%;
  height: 330px;
}
.head img {
  width: 100%;
  height: 100%;
}

.main {
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
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
.p_s {
  font-size: 16px;
  line-height: normal;
  font-family: STKaiti;
}
.p_s strong {
  font-weight: 600;
  font-size: 18px;
  color: #000;
}
.content {
  display: flex;
  justify-content: center;
}
.left {
  width: 40%;
}
.right {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.profile {
  display: flex;
  flex-direction: column;
  line-height: 35px;
}
.left_img img {
  margin-left: 80px;
  width: 80%;
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
.web_col video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.web_video {
  width: 660px;
  height: 300px;
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
</style>