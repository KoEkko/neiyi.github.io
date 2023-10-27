<template>
  <div class="advantage">
    <div class="show_img">
      <div class="content">
        <div class="one">
          <div class="img">
            <img src="../../assets/advance1.jpg" alt="" />
          </div>
          <div class="text">
            <span>CLASSIC</span>
            <span style="color: rgb(254, 118, 0); font-size: 20px">-</span>
            <span style="color: rgb(128, 128, 128); font-size: 16px"
              >经典推荐</span
            >
          </div>
        </div>
        <div class="two">
          <div class="text" style="margin-bottom: 80px">
            <span>SPORTSWEAR</span>
            <span style="color: rgb(254, 118, 0); font-size: 20px">-</span>
            <span style="color: rgb(128, 128, 128); font-size: 16px"
              >运动服饰</span
            >
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
            <span>CLASSIC</span>
            <span style="color: rgb(254, 118, 0); font-size: 20px">-</span>
            <span style="color: rgb(128, 128, 128); font-size: 16px"
              >经典推荐</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="intro">
      <div class="up_title">
        <div class="up_tit">品牌优势</div>
        <div class="down_tit">BRAND ADVANTAGE</div>
      </div>
      <div class="up">
        <br />
        <span style="line-height: 48px"
          >1、诗婷品牌拥有:中国驰名商标，CQC中国环保产品与国家CNMAS实验室双认证、中国内衣十大品牌、广东省名牌产品、广东省著名商标、广东省先进制造业标准化示范
          单位等强大品牌背景。</span
        >
        <br />
        <span
          >2、加盟立享六大支持 品牌支持 广告支持 政策支持运营支持 培训支持
          区域保护</span
        >
        <br />
        <span>3、成熟先进的自主研发生产系统保障产品质与量行业最优。</span><br />
        <span>4、强大的市场推广，让您加盟无忧!</span> <br />
        <span
          >5、一举三得:加盟开一家实体店，即可免费拥有线上直播小店、线上微店，三店齐开、三羊开泰!</span
        >
        <br />
      </div>
      <div class="down_title">
        <div class="up_tit">市场布局</div>
        <div class="down_tit">MARKET LAYOUT</div>
      </div>
      <div class="down">
        <span
          >重点市场方向:国内一线城市、重点省会城市、经济发达的三四线城市</span
        >
        <br />
        <span>业态类型布局: 新兴百货、购物广场、临街商铺、社区商圈店。</span>
        <br />
        <span
          >部分进驻商场资源:万达广场、凯德广场、吉利购物广场、佛山潮流前线、丽影广场、广州黄博领好购物广场</span
        >
        <br />
        <span
          >广州黄埔时代城、步步高商场系统、吉芝岛系统、太原新精品城、太原八方商贸域、内蒙阿拉善左旗驼旺广场、大润发超市系统、万家超市系统、长沙湘府购物广场。</span
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
