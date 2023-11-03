<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import "animate.css";
const activeIndex = ref("1");
const { locale } = useI18n({ useScope: "global" });
const changeLang = (loc: string): void => {
  locale.value = loc;
};
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item index="0" class="el_menu_item1">
      <div class="img_box">
        <img class="logo_img" src="./assets/logo.png" alt="logo" />
      </div>
      <p>Yihan International Co., Ltd</p>
    </el-menu-item>
    <el-menu-item index="1" class="menu-item"
      ><router-link to="/">{{ $t("home") }}</router-link></el-menu-item
    >
    <el-sub-menu index="2" class="menu-item">
      <template #title>{{ $t("intro") }}</template>
      <el-menu-item index="2-1"
        ><router-link to="/profile">{{
          $t("profile")
        }}</router-link></el-menu-item
      >
      <el-menu-item index="2-2"
        ><router-link to="/history">{{
          $t("history")
        }}</router-link></el-menu-item
      >
      <el-menu-item index="2-3"
        ><router-link to="honor">{{ $t("honor") }}</router-link></el-menu-item
      >
    </el-sub-menu>
    <el-sub-menu index="3" class="menu-item">
      <template #title>{{ $t("brands") }}</template>
      <el-menu-item index="3-1"
        ><router-link to="/brand2">{{
          $t("brand1")
        }}</router-link></el-menu-item
      >
    </el-sub-menu>
    <el-sub-menu index="5" class="menu-item">
      <template #title>{{ $t("joinus") }}</template>
      <el-menu-item index="5-1"
        ><router-link to="advantage">{{
          $t("advantage")
        }}</router-link></el-menu-item
      >
      <el-menu-item index="5-2"
        ><router-link to="/join">{{ $t("join") }}</router-link></el-menu-item
      >
      <el-menu-item index="5-3"
        ><router-link to="/contact">{{
          $t("contact")
        }}</router-link></el-menu-item
      >
    </el-sub-menu>
    <el-sub-menu index="6" class="menu-item">
      <template #title>{{ $t("locale") }}</template>
      <el-menu-item @click="changeLang('cn')">中文Chinese</el-menu-item>
      <el-menu-item @click="changeLang('en')">英文English</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <router-view />
  <footer>
    <div class="main">
      <el-row class="row-gap">
        <el-col :span="8"
          ><div>{{ $t("footer1-1") }}</div></el-col
        >
        <el-col :span="8"
          ><div>{{ $t("footer1-2") }}</div></el-col
        >
        <el-col :span="8"
          ><div>{{ $t("footer1-3") }}</div></el-col
        >
      </el-row>
      <el-row class="row-gap">
        <el-col :span="8"
          ><div>{{ $t("footer1-10") }}</div></el-col
        >
        <el-col :span="8"
          ><div></div></el-col
        >
        <el-col :span="8"
          ><div>{{ $t("footer1-7") }}</div></el-col
        >
      </el-row>
      <el-row class="row-gap">
        <el-col :span="8"
          ><div>{{ $t("footer1-5") }}</div></el-col
        >
      </el-row>
      <el-row class="row-gap">
        <el-col :span="8"
          ><div>{{ $t("footer1-6") }}</div></el-col
        >
      </el-row>
      <el-row class="row-gap">
        <el-col :span="8"
          ><div>{{ $t("footer1-8") }}</div></el-col
        >
      </el-row>
      <el-row class="row-gap">
        <el-col :span="8"
          ><div>{{ $t("footer1-9") }}</div></el-col
        >
      </el-row>
    </div>
    <div class="copyright">@2021, YiHan 版權所有</div>
  </footer>
</template>

<style scoped>

.el-menu-demo {
  display: flex;
  justify-content: center;
  height: 100px;
}
.el_menu_item1 {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 18px;
}
.img_box {
  width: 80px;
  height: 80px;
  margin-right: 18px;
}
.img_box img{
  width: 100%;
  height: 100%;
}
.menu-item {
  padding-left: 30px;
  padding-right: 29px;
  border-right: 1px solid #eee;
}

footer {
  height: 420px;
  background: #86ccc5 none repeat center top;
  color: #fff;
}
.main {
  width: 1200px;
  height: 95%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 15px;
}
.copyright {
  width: 1200px;
  margin: 0 auto;
  height: 5%;
}
.row-gap {
  padding-top: 20px;
}
</style>
