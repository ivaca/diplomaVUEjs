import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import store from "./components/store/store.js";
import "./plugins/chartist";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";

Vue.use(Chartkick.use(Chart));

export const serverBus = new Vue();
new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
