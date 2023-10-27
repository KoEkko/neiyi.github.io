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
          <p>美思1.0时代</p> <br />
            <p>1988年-1997年·三台衣车创立美思公司</p> <br />
            <p>
              1988年11月·三台衣车创业
            </p> <br>
            <p>
              1995年·成立兴华内衣厂(广东美思内衣有限公司前身)
              <br>
            </p>
            <br />
            <p>
              美思2.0时代
            </p>
            <br />
            <p>
              1998-2008·坚持品牌发展之路，深耕市场，全国布局1998年·美思品牌创立，全面开展品牌发展之路
            </p>
            <br />
            <p>   
              2003年10月·创立诗婷”品牌
            </p>
            <br />
            <p>   
2008年11月·美思公司20周年庆典:美思宣传片全国启动

            </p>
            <br />
            <p>     
美思3.时代

            </p>
            <br />
            <p>     
2009-2017·智能创新发展

            </p>
            <br />
            <p>
2013年6月CNAS国家级实验室认证:CQC中国环保产品双认证2016年8月美思公司亮相广东时装周;魔挺内衣获省长杯一等奖美思4.0时代
            
            </p>
            <br>
            <p>
2018年12月“砥砺二十，匠心致远”·广东美思集团辉煌30
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
          台衣车创立美思公司
        </div>
      </div>
      <div class="box">
        <div class="box_img">
        <img src="../../assets/hi_2.jpg" alt="">
        </div>
        <div class="box_tit">
            成立兴华内衣
        </div>
      </div>
      <div class="box">
        <div class="box_img">
        <img src="../../assets/hi_3.jpg" alt="">
        </div>
        <div class="box_tit">
            比亚总统阿达马·巴罗到访
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
