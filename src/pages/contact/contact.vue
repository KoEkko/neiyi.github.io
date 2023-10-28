<template>
  <div class="contact">
    <div class="rows">
      <div class="bar">
        <div class="up">{{$t("con-1")}}</div>
      </div>
      <div class="content">
        <div class="left">
          <div class="box">
            <div class="tit">{{$t("con-2")}}</div>
            <div class="p">
              {{$t("con-3")}}
            </div>
            <div class="p_down">
              <p>{{$t("con-4")}}</p>
              <br />
              <p>
                {{$t("con-5")}}
              </p>
              <br />
            </div>
          </div>
        </div>
        <div class="right">
          <img src="../../assets/contact.jpg" alt="" />
        </div>
      </div>
      <div class="contain">
        <MapContainer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MapContainer from "./MapContainer.vue";
</script>

<style scoped>
.rows {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bar {
  margin: 80px 0 60px 0;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.15);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.up {
  padding-top: 5px;
  padding-bottom: 10px;
  font-size: 28px;
  color: rgb(68, 68, 68);
}
.down {
  padding-bottom: 5px;
  font-size: 16px;
  color: rgb(128, 128, 128);
}

.content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left {
  display: flex;
  flex: 1;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.15);
}
.box {
  display: flex;
  flex-direction: column;
  margin-left: 300px;
}

.tit {
  font-size: 18px;
  color: rgb(51, 51, 51);
  padding-top: 80px;
}
.p {
  padding-bottom: 80px;
}
.p,
.p_down p {
  color: rgb(128, 128, 128);
  font-size: 12px;
  line-height: 34px;
}
.p_down p {
  display: block;
}
.p_down p:last-of-type {
  margin-bottom: 100px;
}
.right {
  display: flex;
  flex: 1;
  justify-content: center;
}

.contain {
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.15);
  margin-top: 100px;
  margin-bottom: 100px;
  width: 70%;
}
</style>
