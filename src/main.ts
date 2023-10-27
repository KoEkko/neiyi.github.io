import { createApp } from "vue";
import "./style.css";
import "../src/assets/main.css";
import App from "./App.vue";
import router from "./route";
import i18n from "./i18n/index"
createApp(App).use(router).use(i18n).mount("#app");
