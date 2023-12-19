import { createApp } from "vue";
import App from "./App.vue";
import "./assets/input.css";
import store from "./store";
import router from './router'

createApp(App).use(router).use(store).use(router).mount("#app");
