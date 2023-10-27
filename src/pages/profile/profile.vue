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
            <strong>深圳市奕瀚国际贸易有限公司</strong> <br /><br />
            <strong>关于我们</strong> <br />
            深圳市奕瀚国际贸易有限公司，是内衣出口批发贸易的专业合作伙伴。拥有20的内衣行业经验，我们以卓越的专业知识和广泛的产品范围，为全球客户提供内衣的优质选择。<br /><br />

            <strong>核心优势</strong> <br />
            <li>
              <strong>丰富经验</strong
              >：我们积累了两个十年的内衣行业经验，深谙市场需求，为客户提供专业的建议和解决方案。
            </li>
            <li>
              <strong>宽敞展厅</strong
              >：我们自豪地拥有近千平方米的展厅，汇集了内衣领域的最新潮流和多元选择。这里是客户发现内衣创新和品质的理想之地。
            </li>
            <li>
              <strong>自有加工厂</strong
              >：我们拥有现代化的加工厂，确保产品制造过程受到严格控制，以满足客户对品质的高标准要求。
            </li>
            <li>
              <strong>知名品牌</strong
              >：作为行业领袖，我们骄傲地拥有三个备受认可的知名品牌。这些品牌代表着内衣领域的品质、时尚和创新。
            </li>
            <li>
              <strong>出口贸易经验</strong
              >：我们在出口贸易方面拥有丰富的经验，熟悉全球市场的规定和要求，确保您的产品顺利抵达目的地。
            </li>
            <br />
            <strong>我们的使命</strong><br />
            是为客户提供最佳的内衣选择，确保他们在穿着上享受到舒适和时。不论您是批发商、零售商还是品牌拥有者，我们都将提供专业支持和多样化的产品选择，以满足您的业务成功。<br />
            <br />
            <strong>联系我们</strong> <br />
            <li><strong>地址：</strong>深圳市龙华区民治街道民乐花园31栋A202</li>
            <li><strong>电话：</strong>18823927828</li>
            <li><strong>电子邮件：</strong></li>
            <br />
            无论您是新客户还是老朋友，我们期待与您建立长期的合作伙伴关系，一同创造内衣市场的成功未来。
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
            我们一定要成为一个伟大的公司，我们要朝着这个目标努力奋斗！
          </div>
          <div class="web_col">
            <div class="web_p">
              <div class="web_tit">经营理念</div>
              <div class="web_t">共创、共享、共赢</div>
              <div class="web_tit">核心价值</div>
              <div class="web_t">以消费者为中心，以奋斗者为根本</div>
              <div class="web_tit">企业宗旨</div>
              <div class="web_t">对美好生活的向往，是我们奋斗的目标</div>
              <div class="web_tit">企业司训</div>
              <div class="web_t">
                爱岗敬业、勇于担当 廉洁奉公、务实高效 精益求精、创新发展
              </div>
            </div>
            <div class="web_video"></div>
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
