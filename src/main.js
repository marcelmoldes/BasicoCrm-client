import {createApp} from "vue";
import App from "./App.vue";
import "./assets/main.css";
import store from "./store";
import router from './router'
import mitt from 'mitt'
import clickoutside from './directives/v-click-outside'

createApp(App).use(router).use(store).use({
    install: (app) => {
        app.config.globalProperties.$eventBus = mitt();
    }
}).directive('click-outside', clickoutside).mount("#app");
