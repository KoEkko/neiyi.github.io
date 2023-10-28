<template>
  <div id="container"></div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
const { t } = useI18n();
let map: any = null;
const markerContent =
  "" +
  '<div class="custom-content-marker">' +
  `   <div class="close-btn" onclick="clearMarker()">${t("con-2")} <br>${t("add-1")}</div>` +
  "</div>";

onMounted(() => {
  AMapLoader.load({
    key: "2015a91bd61a4893d8682c96babae917", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  })
    .then((AMap) => {
      map = new AMap.Map("container", {
        // 设置地图容器id
        viewMode: "2D", // 是否为3D地图模式
        zoom: 15, // 初始化地图级别
        center: [114.055043, 22.598482], // 初始化地图中心点位置
      });
      AMap.plugin(
        [
          "AMap.ToolBar",
          "AMap.Scale",
          "AMap.HawkEye",
          "AMap.MapType",
          "AMap.Geolocation",
        ],
        function () {
          // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
          map.addControl(new AMap.ToolBar());

          // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
          map.addControl(new AMap.Scale());

          // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
          map.addControl(new AMap.HawkEye({ isOpen: true }));

          // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
          map.addControl(new AMap.MapType());

          // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
          map.addControl(new AMap.Geolocation());
        }
      );
      const position = new AMap.LngLat(114.055043, 22.598482); // Marker经纬度
      const marker = new AMap.Marker({
        position: position,
        offset: new AMap.Pixel(-13, -30), // 以 icon 的 [center bottom] 为原点
      });
      const infoWindow = new AMap.InfoWindow({
        offset: new AMap.Pixel(-13, -60),
        content: markerContent,
      });
      map.add(marker);
      infoWindow.open(map, position);
    })
    .catch((e) => {
      console.log(e);
    });
});

onUnmounted(() => {
  map?.destroy();
});
</script>

<style scoped>
#container {
  width: 100%;
  height: 600px;
}
.custom-content-marker {
  position: relative;
  width: 25px;
  height: 34px;
}

.custom-content-marker img {
  width: 100%;
  height: 100%;
}

.custom-content-marker .close-btn {
  position: absolute;
  top: -6px;
  right: -8px;
  width: 15px;
  height: 15px;
  font-size: 12px;
  background: #ccc;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 15px;
  box-shadow: -1px 1px 1px rgba(10, 10, 10, 0.2);
}

.custom-content-marker .close-btn:hover {
  background: #666;
}
</style>
