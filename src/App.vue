<script setup lang="ts">
import { ref } from "vue";
import "animate.css";
const activeIndex = ref("1");
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item index="0">
      <img
        class="logo_img"
        style="width: 100px"
        src="./assets/logo_jia.png"
        alt="logo"
      />
    </el-menu-item>
    <el-menu-item index="1" class="menu-item"
      ><router-link to="/">首页</router-link></el-menu-item
    >
    <el-sub-menu index="2" class="menu-item">
      <template #title>企业介绍</template>
      <el-menu-item index="2-1"
        ><router-link to="/profile">企业简介</router-link></el-menu-item
      >
      <el-menu-item index="2-2"
        ><router-link to="/history">发展历程</router-link></el-menu-item
      >
      <el-menu-item index="2-3"
        ><router-link to="honor">企业荣誉</router-link></el-menu-item
      >
    </el-sub-menu>
    <el-sub-menu index="3" class="menu-item">
      <template #title>旗下品牌</template>
      <el-menu-item index="3-1"
        ><router-link to="/brand1">美思品牌</router-link></el-menu-item
      >
      <el-menu-item index="3-2"
        ><router-link to="/brand2">诗婷品牌</router-link></el-menu-item
      >
    </el-sub-menu>
    <el-menu-item index="4" class="menu-item">
      <template #title
        ><router-link to="dynamic">企业动态</router-link></template
      >
    </el-menu-item>
    <el-sub-menu index="5" class="menu-item">
      <template #title>招商加盟</template>
      <el-menu-item index="5-1"
        ><router-link to="advantage">品牌优势与布局</router-link></el-menu-item
      >
      <el-menu-item index="5-2"
        ><router-link to="/join">关于加盟</router-link></el-menu-item
      >
      <el-menu-item index="5-3"
        ><router-link to="/contact">联系我们</router-link></el-menu-item
      >
    </el-sub-menu>
    <el-sub-menu index="6" class="menu-item">
      <template #title>切换语言</template>
      <template
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
      >
        <el-menu-item index="6-1">{{ locale }}</el-menu-item>
      </template>
    </el-sub-menu>
  </el-menu>
  <router-view />
  <footer>
    <div class="main">
      <el-row class="row-gap">
        <el-col :span="8"><div>产品</div></el-col>
        <el-col :span="8"><div>商城</div></el-col>
        <el-col :span="8"><div>隐私权政策</div></el-col>
      </el-row>
      <el-row class="row-gap">
        <el-col :span="8"><div>內衣</div></el-col>
        <el-col :span="8"><div>BodiBra 淘寶旗艦店</div></el-col>
        <el-col :span="8"><div>使用規則及管理條款</div></el-col>
      </el-row>
      <el-row class="row-gap">
        <el-col :span="8"><div>產婦托腹帶</div></el-col>
      </el-row>
      <el-row class="row-gap">
        <el-col :span="8"><div>腰封</div></el-col>
      </el-row>
      <el-row class="row-gap">
        <el-col :span="8"><div>BodiCare</div></el-col>
      </el-row>
      <el-row class="row-gap">
        <el-col :span="8"><div>塑型束褲</div></el-col>
      </el-row>
    </div>
    <div class="copyright">@2021, BodiBra 版權所有</div>
  </footer>
</template>

<style scoped>
.el-menu-demo {
  display: flex;
  justify-content: center;
  height: 100px;
}
.logo_img {
  margin-right: 100px;
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
