import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

Vue.config.productionTip = false;

//自定义指令
Vue.directive('rainbow', {
  bind(el){
      el.style.color = '#'+Math.random().toString(16).slice(2, 8);
  }
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
