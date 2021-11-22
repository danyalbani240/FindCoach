import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styleSheet/index.css";
import BaseCard from "./components/Base/BaseButton.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("base-card", BaseCard)
  .mount("#app");
